import * as vscode from "vscode";
import * as antlr4 from "../antlr4/index";
import * as util from "../util";
import VLexer from "../v/VLexer";
import { PulErrorListener } from "./PulErrorListener";
import { Source } from "./entity/Source";
import { SourceLoader } from "./SourceLoader";
import { Include } from "./entity/Include";
import { Macro } from "./entity/Macro";
import { SemaTokens } from "./SemaTokens";

const CHN_NORMAL = 0;
const CHN_SPACE = 1;
const CHN_DIRECTIVE = 2;
const CHN_COMMENTS = 3;

const IF_FALSE = 0;
const IF_TRUE = 1;
const IF_IGNORE = 2;

let debug = false;
let debug_next = false;
let debug_add = false;
let dtag = "[PulVPreParser]";

class LexWrapper {
    source?: Source;
    token_override?: any;
    root_override?: any;
    lexer: VLexer;
    pos: number;
    err: PulErrorListener;

    constructor(diags: vscode.Diagnostic[], source: Source|string, root_override?: any) {
        if (source instanceof Source) {
            this.source = source;
            source = source.code;
        }
        this.root_override = root_override;
        let ins = new antlr4.CharStream(source);
        this.lexer = new VLexer(ins);
        this.err = new PulErrorListener("pul-lexer", diags, this.lexer);
        this.pos = 0;
    }

    next(kind?: number): antlr4.Token|null {
        while (true) {
            let tok = this.lexer.nextToken();
            let override = this.token_override;
            if (override) {
                tok.text = tok.text;
                if (override.start) tok.start += override.start, tok.stop += override.start;
                if (override.column && tok.line == 1) tok.column += override.column;
                if (override.line) tok.line += override.line - 1;
            }
            this.pos = tok.start;
            if (tok.channel == CHN_SPACE) continue;
            if (debug_next) console.log(`${dtag} READ      . @${util.pad(tok.line, 4)}:${util.pad(tok.column, 3)}      (${tok.channel}) ${util.pad(VLexer.symbolicNames[tok.type], 20)}: ${tok.text.trim()}`);
            if (kind === undefined || tok.type == kind) return tok;
            console.error(`${dtag} ${tok.text} at ${tok.line}:${tok.column} is not type ${VLexer.literalNames[kind]}`);
            return null;
        }
    }
}

export class PulVPreParser {

    lex_main: LexWrapper;
    source: Source;
    loader: SourceLoader;
    tokens: antlr4.Token[];
    sema_tokens: SemaTokens[];
    if_state: number[];
    if_depth: number;

    constructor(source: Source, loader: SourceLoader, diags: vscode.Diagnostic[]) {
        this.lex_main = new LexWrapper(diags, source);
        this.source = source;
        this.loader = loader;
        this.tokens = [];
        this.sema_tokens = [];
        this.if_state = [];
        this.if_depth = 0;
    }


    get_tokens(): antlr4.Token[] {
        return this.tokens;
    }

    get_lexer(): VLexer {
        return this.lex_main.lexer;
    }

    parse(lex?: LexWrapper): boolean {
        if (!lex) lex = this.lex_main;
        let main = (lex == this.lex_main);
        while (true) {
            let tok = lex.next()!;
            if (tok.type == VLexer.EOF) {
                if (lex == this.lex_main) this.add(tok, lex.root_override);
                break;
            }

            if (tok.channel == CHN_NORMAL || tok.channel == CHN_COMMENTS) {
                if (!this.check_if()) this.ignore(tok, main, lex.root_override);
                else if (tok.channel == CHN_NORMAL) this.add(tok, lex.root_override);
                continue;
            }

            switch (tok.type) {
            case VLexer.INCLUDE_DIRECTIVE:
                if (!this.check_if()) this.ignore(tok, main, lex.root_override);
                else if (!this.include_directive(lex, tok)) return false;
                break;
            case VLexer.DEFINE_DIRECTIVE:
                if (!this.check_if()) this.ignore(tok, main, lex.root_override);
                else if (!this.define_directive(lex, tok)) return false;
                break;
            case VLexer.UNDEF_DIRECTIVE:
                if (!this.check_if()) this.ignore(tok, main, lex.root_override);
                else if (!this.undef_directive(lex, tok)) return false;
                break;
            case VLexer.MACRO_USAGE:
                if (!this.check_if()) this.ignore(tok, main, lex.root_override);
                else if (!this.macro_usage(lex, tok)) return false;
                break;
            case VLexer.IFDEF_DIRECTIVE:
                ++this.if_depth;
                if (!this.check_if()) this.ignore(tok, main, lex.root_override);
                else if (!this.ifdef_directive(lex, tok)) return false;
                break;
            case VLexer.IFNDEF_DIRECTIVE:
                ++this.if_depth;
                if (!this.check_if()) this.ignore(tok, main, lex.root_override);
                else if (!this.ifndef_directive(lex, tok)) return false;
                break;
            case VLexer.ELSIF_DIRECTIVE:
                if (!this.check_if() && this.if_depth > this.if_state.length) this.ignore(tok, main, lex.root_override);
                else if (!this.elsif_directive(lex, tok)) return false;
                break;
            case VLexer.ELSE_DIRECTIVE:
                if (!this.check_if() && this.if_depth > this.if_state.length) this.ignore(tok, main, lex.root_override);
                else if (!this.else_directive(lex, tok)) return false;
                break;
            case VLexer.ENDIF_DIRECTIVE:
                --this.if_depth;
                if (!this.check_if() && this.if_depth+1 > this.if_state.length) this.ignore(tok, main, lex.root_override);
                else if (!this.endif_directive(lex, tok)) return false;
                break;
            }
        }
        return true;
    }

    private check_if(): boolean {
        return (this.if_state.length == 0 || this.if_state[this.if_state.length-1] == IF_TRUE);
    }

    private add(tok: antlr4.Token, root_override?: any): void {
        if (root_override?.beg !== undefined) (tok as any).root_beg = root_override.beg;
        if (root_override?.end !== undefined) (tok as any).root_end = root_override.end;
        if (root_override?.rng !== undefined) (tok as any).root_rng = root_override.rng;
        tok.tokenIndex = this.tokens.length;
        this.tokens.push(tok);
        if (debug_add) console.log(`${dtag} WRITE ${util.pad(tok.tokenIndex, 4)}. @${util.pad(tok.line, 4)}:${util.pad(tok.column, 3)}|${util.pad((tok as any).root_beg||-1, 4)} (${tok.channel}) ${util.pad(VLexer.symbolicNames[tok.type], 20)}: ${tok.text.trim()}`);
    }

    private ignore(tok: antlr4.Token, main: boolean, root_override?: any): void {
        if (!main) return;
        let rng: vscode.Range = (root_override?.rng || (tok as any).root_rng) || new vscode.Range(tok.line-1, tok.column, tok.line-1, tok.column+tok.text.length);
        let last = this.sema_tokens.at(-1);
        if (last && last.kind == "ignore" && last.in_same_line(rng)) last.union(rng);
        else this.sema_tokens.push(new SemaTokens(rng, "ignore"));
    }

    /*
     * `include "header.vh"
     */
    private include_directive(lex: LexWrapper, token: antlr4.Token): boolean {
        let tok = lex.next(VLexer.STRING_LITERAL);
        if (!tok) return false;
        let path = tok.text;
        path = path.substring(1, path.length-1);
        path = this.source.relative(path);
        if (debug) console.log(`${dtag} include='${path}'`);
        let inc_source = this.loader.load(path);
        if (!inc_source) {
            lex.err.syntaxError(lex.lexer, tok, token.line, token.column, `include file '${path}' not found`);
            return true;
        }
        let inc = new Include(inc_source);
        inc.tok_start = this.tokens.length;

        let ilex = new LexWrapper(lex.err.diags, inc_source, lex.root_override || {
            "beg": token.start,
            "end": token.stop,
            "rng": util.token_range(token, tok),
        });
        this.parse(ilex);
        inc.tok_end = this.tokens.length;
        this.source.includes.push(inc);
        return true;
    }

    /*
     * `define MACRO [TEXT]
     */
    private define_directive(lex: LexWrapper, token: antlr4.Token): boolean {
        let tok = lex.next(VLexer.DIRECTIVE_IDENTIFIER);
        if (!tok) return false;
        let name = tok.text;
        tok = lex.next()!;
        if (tok.type == VLexer.MACRO_WHITE_SPACE) tok = lex.next()!;
        let start_token = tok;
        let pos_beg = tok.start;
        let rng_beg = new vscode.Position(tok.line-1, token.column);
        while (tok.type != VLexer.MACRO_NEWLINE && tok.type != VLexer.EOF) {
            tok = lex.next()!;
        }
        let pos_end = tok.start;
        let rng_end = new vscode.Position(tok.line-1, tok.column);
        let rng = new vscode.Range(rng_beg, rng_end);
        let code = lex.source!.get_document(pos_beg, pos_end);

        let ilex = new LexWrapper(lex.err.diags, code, lex.root_override);
        ilex.token_override = start_token;
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
        let tok = lex.next(VLexer.SIMPLE_IDENTIFIER);
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
            let root_override = lex.root_override || {
                "beg": token.start,
                "end": token.stop,
                "rng": util.token_range(token, token),
            };
            this.add(tok.clone(), root_override);
        }
        return true;
    }

    /*
     * `ifdef MACRO
     */
    private ifdef_directive(lex: LexWrapper, token: antlr4.Token): boolean {
        let tok = lex.next(VLexer.SIMPLE_IDENTIFIER);
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
        let tok = lex.next(VLexer.SIMPLE_IDENTIFIER);
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
        let tok = lex.next(VLexer.SIMPLE_IDENTIFIER);
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
        if (debug) console.log(`${dtag} endif`);
        this.if_state.pop();
        return true;
    }


}