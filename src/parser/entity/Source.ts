import * as vscode from "vscode";
import * as util from "../../util";
import { Root } from "./Root";
import { Macro } from "./Macro";
import { Include } from "./Include";
import { SemaTokens } from "../SemaTokens";

let debug = false;
let dtag = "[Source]";

export class Source {
    path: string;
    code: string;
    mtime: number;
    includes: Include[];
    macros: {[key: string]: Macro[]};
    valid: boolean;
    root?: Root;
    sema_tokens: SemaTokens[];
    diags_lexer: vscode.Diagnostic[];
    diags_parser: vscode.Diagnostic[];
    diags_linter: vscode.Diagnostic[];

    constructor(path: string, code: string, mtime: number) {
        this.path = path;
        this.code = code;
        this.mtime = mtime;
        this.includes = [];
        this.macros = {};
        this.valid = false;
        this.root = undefined;
        this.sema_tokens = [];
        this.diags_lexer = [];
        this.diags_parser = [];
        this.diags_linter = [];
    }

    reset(code: string, mtime: number) {
        this.code = code;
        this.mtime = mtime;
        this.includes = [];
        this.macros = {};
        this.valid = false;
        this.root = undefined;
        this.sema_tokens = [];
        this.diags_lexer = [];
        this.diags_parser = [];
        this.diags_linter = [];
        if (debug) console.log(`${dtag} reset '${this.path}`);
    }

    get_source(tok_index: number): Source {
        for (let inc of this.includes) {
            if (inc.contains(tok_index)) return inc.source;
        }
        return this;
    }

    add_macros(macros: Macro[]) {
        for (let macro of macros) {
            this.macros[macro.name] = [macro];
        }
    }

    get_document(beg: number, end: number, range?: vscode.Range): string {
        let doc = this.code.substring(beg, end);
        if (range) {
            let cmt = `/* file: ${this.get_location(range)} */`;
            doc = `${cmt}\n${doc}`;
        }
        // console.log(`code ${beg}~${end} => ${doc}`);
        return doc;
    }

    get_location(range: vscode.Range): string {
        return `${this.path}:${range.start.line+1}:${range.start.character+1}`;
    }

    get_path(): string {
        return this.path;
    }

    relative(path: string): string {
        return util.fs_path(path, this.path);
    }

    define_macro(macro: Macro, idx: number, pos: number): void {
        macro.idx_beg = idx;
        macro.idx_end = -1;
        macro.scope_beg = pos;
        macro.scope_end = -1;
        let m = this.macros[macro.name];
        if (!m) this.macros[macro.name] = [macro];
        else {
            if (m[m.length-1].scope_end < 0) m[m.length-1].scope_end = pos;
            m.push(macro);
        }
    }

    undef_macro(name: string, idx: number, pos: number): void {
        let m = this.macros[name];
        if (!m) return;
        m[m.length-1].idx_end = idx;
        m[m.length-1].scope_end = pos;
    }

    find_macro_by_idx(name: string, idx: number): Macro|null {
        let m = this.macros[name];
        if (!m) return null;
        for (let i = 0; i < m.length; ++i) {
            if (m[i].idx_contains(idx)) return m[i];
        }
        return null;
    }

    find_macro_by_pos(name: string, pos: number): Macro|null {
        let m = this.macros[name];
        if (!m) return null;
        for (let macro of m) {
            if (macro.scope_contains(pos)) return macro;
        }
        return null;
    }

    get_macros(pos: number): Macro[] {
        let macs: Macro[] = [];
        for (let [name, macros] of Object.entries(this.macros)) {
            for (let macro of macros) {
                if (macro.scope_contains(pos)) {
                    macs.push(macro);
                    break;
                }
            }
        }
        return macs;
    }

    has_include(path: string): boolean {
        for (let inc of this.includes) {
            if (inc.source.path == path) return true;
        }
        return false;
    }


}