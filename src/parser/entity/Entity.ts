import * as vscode from "vscode";
import * as antlr4 from "../../antlr4";
import * as util from "../../util";
import { Source } from "./Source.d";

export class Entity {
    source: Source;
    name: string;
    tok_index: number;

    beg: number;
    end: number;
    rng: vscode.Range;

    root_beg: number;
    root_end: number;
    root_rng: vscode.Range;

    scope_beg: number;
    scope_end: number;


    constructor(name: string, ctx: antlr4.ParserRuleContext, source: Source) {
        this.source = source;
        this.name = name;
        this.tok_index = ctx.start.tokenIndex;

        this.beg = ctx.start.start;
        this.end = ctx.stop!.stop;
        this.rng = util.token_range(ctx.start, ctx.stop!);

        this.root_beg = (ctx.start as any).root_beg || this.beg;
        this.root_end = (ctx.start as any).root_end || this.end;
        this.root_rng = (ctx.start as any).root_rng || this.rng;

        this.scope_beg = this.root_beg;
        this.scope_end = -1;
    }

    to_string(): string {
        return this.source.get_document(this.beg, this.end, this.rng);
    }

    get_path(): string {
        return this.source.get_path();
    }

    scope_contains(pos: number): boolean {
        return (pos >= this.scope_beg && (this.scope_end < 0 || pos < this.scope_end));
    }
};
