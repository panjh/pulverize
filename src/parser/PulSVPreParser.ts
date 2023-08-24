import * as vscode from "vscode";
import * as antlr4 from "../antlr4";
import * as util from "../util";
import SVLexer from "../sv/SVLexer";
import { PulErrorListener } from "./PulErrorListener";
import { Source } from "./entity/Source";
import { SourceLoader } from "./SourceLoader";
import { Include } from "./entity/Include";
import { Macro } from "./entity/Macro";

const CHN_NORMAL = 0;
const CHN_SPCACE = 1;
const CHN_DIRECTIVE = 2;
const CHN_COMMENTS = 3;

const IF_FALSE = 0;
const IF_TRUE = 1;
const IF_IGNORE = 2;

let debug = false;
let debug_next = false;
let debug_add = false;
let dtag = "[PulSVPreParser]";

class LexWrapper {
    source?: Source;
    line?: number;
    column?: number;
    pos_override?: number;
    lexer: SVLexer;
    pos: number;
    err: PulErrorListener;

    constructor(diags: vscode.Diagnostic[], source: Source|string, line?: number, column?: number) {
        if (source instanceof Source) {
            this.source = source;
            source = source.code;
        }
        this.line = line;
        this.column = column;
        let ins = new antlr4.CharStream(source);
        this.lexer = new SVLexer(ins);
        this.err = new PulErrorListener("pul-lexer", diags, this.lexer);
        this.pos = 0;
    }

    next(kind?: number): antlr4.Token|null {
        while (true) {
            let tok = this.lexer.nextToken();
            this.pos = tok.start;
            if (tok.channel == CHN_SPCACE || tok.channel == CHN_COMMENTS) continue;
            if (this.line !== undefined) tok.line = this.line;
            if (this.column !== undefined) tok.column = this.column;
            if (debug_next) console.log(`${dtag} READ  ${util.pad(tok.tokenIndex, 4)}. @${tok.line}:${tok.column} (${tok.channel}) ${util.pad(SVLexer.symbolicNames[tok.type], 20)}: ${tok.text.trim()}`, kind);
            if (kind === undefined || tok.type == kind) return tok;
            console.error(`${dtag} ${tok.text} at ${tok.line}:${tok.column} is not type ${SVLexer.literalNames[kind]}`);
            return null;
        }
    }
}

export class PulSVPreParser {

    lex_main: LexWrapper;
    source: Source;
    loader: SourceLoader;
    includes: Include[];
    tokens: antlr4.Token[];
    if_state: number[];
    if_depth: number;

    constructor(source: Source, loader: SourceLoader, diags: vscode.Diagnostic[]) {
        this.lex_main = new LexWrapper(diags, source);
        this.source = source;
        this.loader = loader;
        this.includes = [];
        this.tokens = [];
        this.if_state = [];
        this.if_depth = -1;
    }


    get_source(tok_index: number): Source {
        for (let inc of this.includes) {
            if (inc.contains(tok_index)) return inc.source;
        }
        return this.source;
    }

    get_tokens(): antlr4.Token[] {
        return this.tokens;
    }

    get_lexer(): SVLexer {
        return this.lex_main.lexer;
    }

    parse(lex?: LexWrapper): boolean {
        if (!lex) lex = this.lex_main;
        while (true) {
            let tok = lex.next()!;
            if (tok.type == SVLexer.EOF) {
                if (lex == this.lex_main) this.add(tok, lex.pos_override);
                break;
            }

            if (tok.channel == CHN_NORMAL) {
                if (this.check_if()) this.add(tok, lex.pos_override);
                continue;
            }

            switch (tok.type) {
            case SVLexer.INCLUDE_DIRECTIVE:
                if (this.check_if() && !this.include_directive(lex, tok)) return false;
                break;
            case SVLexer.DEFINE_DIRECTIVE:
                if (this.check_if() && !this.define_directive(lex, tok)) return false;
                break;
            case SVLexer.UNDEF_DIRECTIVE:
                if (this.check_if() && !this.undef_directive(lex, tok)) return false;
                break;
            case SVLexer.MACRO_USAGE:
                if (this.check_if() && !this.macro_usage(lex, tok)) return false;
                break;
            case SVLexer.IFDEF_DIRECTIVE:
                if (!this.ifdef_directive(lex, tok)) return false;
                break;
            case SVLexer.IFNDEF_DIRECTIVE:
                if (!this.ifndef_directive(lex, tok)) return false;
                break;
            case SVLexer.ELSIF_DIRECTIVE:
                if (!this.elsif_directive(lex, tok)) return false;
                break;
            case SVLexer.ELSE_DIRECTIVE:
                if (!this.else_directive(lex, tok)) return false;
                break;
            case SVLexer.ENDIF_DIRECTIVE:
                if (!this.endif_directive(lex, tok)) return false;
                break;
            }
        }
        return true;
    }

    private check_if(): boolean {
        return (this.if_state.length == 0 || this.if_state[this.if_state.length-1] == IF_TRUE);
    }

    private add(tok: antlr4.Token, pos?: number): void {
        if (pos === undefined) pos = tok.start;
        (tok as any).pos_start = pos;
        tok.tokenIndex = this.tokens.length;
        this.tokens.push(tok);
        if (debug_add) console.log(`${dtag} WRITE ${util.pad(tok.tokenIndex, 4)}. @${util.pad(tok.line, 4)}:${util.pad(tok.column, 3)}|${util.pad((tok as any).pos_start, 4)} (${tok.channel}) ${util.pad(SVLexer.symbolicNames[tok.type], 20)}: ${tok.text.trim()}`);
    }

    /*
     * `include "header.vh"
     */
    private include_directive(lex: LexWrapper, token: antlr4.Token): boolean {
        let tok = lex.next(SVLexer.STRING_LITERAL);
        if (!tok) return false;
        let path = tok.text;
        path = path.substring(1, path.length-1);
        path = this.source.relative(path);
        if (debug) console.log(`${dtag} include='${path}'`);
        let src_include = this.loader.load(path);
        if (!src_include) {
            lex.err.syntaxError(lex.lexer, tok, token.line, token.column, `include file '${path}' not found`);
            return true;
        }
        let inc = new Include(src_include);
        inc.tok_start = this.tokens.length;

        let ilex = new LexWrapper(lex.err.diags, src_include);
        ilex.pos_override = token.start;
        this.parse(ilex);
        inc.tok_end = this.tokens.length;
        this.includes.push(inc);
        return true;
    }

    /*
     * `define MACRO [TEXT]
     */
    private define_directive(lex: LexWrapper, token: antlr4.Token): boolean {
        let tok = lex.next(SVLexer.DIRECTIVE_IDENTIFIER);
        if (!tok) return false;
        let name = tok.text;
        tok = lex.next()!;
        if (tok.type == SVLexer.MACRO_WHITE_SPACE) tok = lex.next()!;
        let pos_beg = tok.start;
        let rng_beg = new vscode.Position(tok.line-1, token.column);
        while (tok.type != SVLexer.MACRO_NEWLINE && tok.type != SVLexer.EOF) {
            tok = lex.next()!;
        }
        let pos_end = tok.start;
        let rng_end = new vscode.Position(tok.line-1, tok.column);
        let rng = new vscode.Range(rng_beg, rng_end);
        let code = lex.source!.get_document(pos_beg, pos_end);

        let ilex = new LexWrapper(lex.err.diags, code, tok.line, tok.column);
        ilex.pos_override = token.start;
        let mtoks = this.tokens;
        let mdebug_add = debug_add;
        debug_add = false;
        this.tokens = [];
        this.parse(ilex);
        let itoks = this.tokens;
        this.tokens = mtoks;
        debug_add = mdebug_add;

        if (debug) console.log(`${dtag} define='${name}' value='${code}'`);
        this.source.define_macro(new Macro(name, itoks, lex.source, token.start, pos_end, rng), this.tokens.length, this.lex_main.pos);
        return true;
    }

    /*
     * `undef MACRO
     */
    private undef_directive(lex: LexWrapper, token: antlr4.Token): boolean {
        let tok = lex.next(SVLexer.SIMPLE_IDENTIFIER);
        if (!tok) return false;
        let name = tok.text;
        if (debug) console.log(`${dtag} undef='${name}'`);
        this.source.undef_macro(name, this.tokens.length, this.lex_main.pos);
        return true;
    }

    /*
     * `MACRO
     */
    private macro_usage(lex: LexWrapper, token: antlr4.Token): boolean {
        let name = token.text.substring(1);
        let macro = this.source.find_macro_by_idx(name, this.tokens.length);
        if (debug) console.log(`${dtag} macro='${name}' value='${macro?.to_string()}'`);
        if (!macro) {
            lex.err.syntaxError(lex.lexer, token, token.line, token.column, `macro '${name}' not found`);
            return true;
        }
        for (let tok of macro.tokens) {
            this.add(tok.clone(), lex.pos_override || token.start);
        }
        return true;
    }

    /*
     * `ifdef MACRO
     */
    private ifdef_directive(lex: LexWrapper, token: antlr4.Token): boolean {
        ++this.if_depth;
        if (!this.check_if()) return true;
        let tok = lex.next(SVLexer.SIMPLE_IDENTIFIER);
        if (!tok) return false;
        let name = tok.text;
        if (debug) console.log(`${dtag} ifdef='${name}'`);
        this.if_state.push(this.source.find_macro_by_idx(name, this.tokens.length) ? IF_TRUE : IF_FALSE);
        return true;
    }

    /*
     * `ifndef MACRO
     */
    private ifndef_directive(lex: LexWrapper, token: antlr4.Token): boolean {
        ++this.if_depth;
        if (!this.check_if()) return true;
        let tok = lex.next(SVLexer.SIMPLE_IDENTIFIER);
        if (!tok) return false;
        let name = tok.text;
        if (debug) console.log(`${dtag} ifndef='${name}'`);
        this.if_state.push(this.source.find_macro_by_idx(name, this.tokens.length) ? IF_FALSE : IF_TRUE);
        return true;
    }

    /*
     * `elsif MACRO
     */
    private elsif_directive(lex: LexWrapper, token: antlr4.Token): boolean {
        if (!this.check_if() && this.if_depth > this.if_state.length) return true;
        let tok = lex.next(SVLexer.SIMPLE_IDENTIFIER);
        if (!tok) return false;
        let name = tok.text;
        switch (this.if_state[this.if_state.length-1]) {
        case IF_TRUE:   this.if_state[this.if_state.length-1] = IF_IGNORE; break;
        case IF_FALSE:  this.if_state[this.if_state.length-1] = (this.source.find_macro_by_idx(name, this.tokens.length) ? IF_TRUE : IF_FALSE); break;
        default:        this.if_state[this.if_state.length-1] = IF_IGNORE; break;
        }
        return true;
    }

    /*
     * `else
     */
    private else_directive(lex: LexWrapper, token: antlr4.Token): boolean {
        if (!this.check_if() && this.if_depth > this.if_state.length) return true;
        if (debug) console.log(`${dtag} else`);
        switch (this.if_state[this.if_state.length-1]) {
        case IF_FALSE:  this.if_state[this.if_state.length-1] = IF_TRUE; break;
        default:        this.if_state[this.if_state.length-1] = IF_IGNORE; break;
        }
        return true;
    }

    /*
     * `endif
     */
    private endif_directive(lex: LexWrapper, token: antlr4.Token): boolean {
        --this.if_depth;
        if (!this.check_if() && this.if_depth > this.if_state.length) return true;
        if (debug) console.log(`${dtag} endif`);
        this.if_state.pop();
        return true;
    }


}