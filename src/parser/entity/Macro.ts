import * as antlr4 from "../../antlr4";
import * as vscode from "vscode";
import { Source } from "./Source.d";

export class Macro {

    name: string;
    tokens: antlr4.Token[];
    source?: Source;
    beg?: number;
    end?: number;
    rng?: vscode.Range;

    scope_beg: number;
    scope_end: number;

    idx_beg: number;
    idx_end: number;

    constructor(name: string, tokens?: antlr4.Token[], source?: Source, beg?: number, end?: number, rng?: vscode.Range) {
        this.name = name;
        this.tokens = (tokens || []);
        this.scope_beg = 0;
        this.scope_end = -1;
        this.idx_beg = 0;
        this.idx_end = -1;
        this.source = source;
        this.beg = beg;
        this.end = end;
        this.rng = rng;
    }

    idx_contains(idx: number): boolean {
        return (idx >= this.idx_beg && (this.idx_end < 0 || idx < this.idx_end));
    }

    scope_contains(pos: number): boolean {
        return (pos >= this.scope_beg && (this.scope_end < 0 || pos < this.scope_end));
    }

    get_path(): string|undefined {
        return this.source?.path;
    }

    to_string(): string {
        if (this.source) return this.source.get_document(this.beg!, this.end!);
        else return `\`define ${this.name} ${this.tokens.map(t => t.text).join(" ")}`;
    }

    to_md_string(): vscode.MarkdownString {
        let md = new vscode.MarkdownString();
        md.appendMarkdown(this.get_md_desc());
        md.appendCodeblock(this.to_string(), "verilog");
        return md;
    }

    get_md_desc(): string {
        if (this.source) return `(**macro** at ${this.source.get_location(this.rng!)})`;
        else return "(**macro** from ENV)";
    }
};
