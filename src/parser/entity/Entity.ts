import * as vscode from "vscode";
import * as antlr4 from "../../antlr4";
import * as util from "../../util";
import { Source } from "./Source.d";
import { RefToken } from "./RefToken";

export class Entity {
    source: Source;
    name: string;
    name_rng?: vscode.Range;
    kind: string;
    tok_index: number;
    origin: boolean;

    beg: number;
    end: number;
    rng: vscode.Range;

    root_beg: number;
    root_end: number;
    root_rng: vscode.Range;
    root_name_rng?: vscode.Range;

    scope_beg: number;
    scope_end: number;


    constructor(name: antlr4.ParserRuleContext|string, kind: string, ctx: antlr4.ParserRuleContext, source: Source) {
        this.source = source;
        if (name instanceof antlr4.ParserRuleContext) {
            this.name = name.getText();
            this.name_rng = util.token_range(name.start, name.stop!);
            this.root_name_rng = (name.start as RefToken).root_rng || this.name_rng;
        }
        else {
            this.name = name as string;
        }
        this.kind = kind;
        this.tok_index = ctx.start.tokenIndex;
        this.origin = ((ctx.start as RefToken).root_beg === undefined);

        this.beg = ctx.start.start;
        this.end = ctx.stop!.stop;
        this.rng = util.token_range(ctx.start, ctx.stop!);

        this.root_beg = (ctx.start as RefToken).root_beg || this.beg;
        this.root_end = (ctx.start as RefToken).root_end || this.end;
        this.root_rng = (ctx.start as RefToken).root_rng || this.rng;

        this.scope_beg = this.root_beg;
        this.scope_end = -1;
    }

    to_string(): string {
        return this.name;
    }

    to_md_string(): vscode.MarkdownString {
        let md = new vscode.MarkdownString();
        md.appendMarkdown(this.get_md_desc(this.kind));
        md.appendCodeblock(this.to_string(), "verilog");
        return md;
    }

    get_md_desc(type: string): string {
        return `(**${type}** at ${this.source.get_location(this.rng)})`;
    }

    get_path(): string {
        return this.source.get_path();
    }

    scope_contains(pos: number): boolean {
        return (pos >= this.scope_beg && (this.scope_end < 0 || pos < this.scope_end));
    }
};
