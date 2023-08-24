import * as vscode from "vscode";
import * as antlr4 from "../../antlr4/index";
import { Source } from "./Source.d";

export class Entity {
    source: Source;
    name: string;
    beg: number;
    end: number;
    range: vscode.Range;
    tok_index: number;
    doc_start: number;
    doc_end: number;
    doc_range: vscode.Range;

    constructor(name: string, ctx: antlr4.ParserRuleContext, source: Source) {
        this.source = source;
        this.name = name;
        this.beg = (ctx.start as any).doc_start;
        this.end = (ctx.stop as any).doc_stop;
        let start = new vscode.Position(ctx.start.line-1, ctx.start.column);
        let stop = ctx.stop && new vscode.Position(ctx.stop.line-1, ctx.stop.column + (ctx.stop.stop-ctx.stop.start+1)) || start;
        this.range = new vscode.Range(start, stop);
        this.tok_index = ctx.start.tokenIndex;
        this.doc_start = (ctx.start as any).doc_start;
        this.doc_end = -1;
        this.doc_range = (ctx.start as any).doc_range || this.range;
    }

    to_string(): string {
        return this.source.get_document(this.beg, this.end, this.doc_range);
    }

    get_path(): string {
        return this.source.get_path();
    }

    pos_contains(pos: number): boolean {
        return (pos >= this.doc_start && (this.doc_end < 0 || pos < this.doc_end));
    }
};
