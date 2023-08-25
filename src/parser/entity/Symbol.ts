import * as antlr4 from "../../antlr4";
import * as vscode from "vscode";
import { Context } from "./Context";
import { Entity } from "./Entity";
import { Source } from "./Source.d";

export class Symbol extends Entity {

    parent?: Context;
    kind: string;
    width: string;
    value?: string;

    constructor(name: string, kind: string, width: string, ctx: antlr4.ParserRuleContext, source: Source, parent?: Context) {
        super(name, ctx, source);
        this.parent = parent;
        this.kind = kind;
        this.width = width;
    }

    to_string(): string {
        if (this.value === undefined) return `${this.kind}${this.width} ${this.name}`;
        return `${this.kind}${this.width} ${this.name} = ${this.value}`;
    }

    to_md_string(): vscode.MarkdownString {
        let md = new vscode.MarkdownString();
        md.appendMarkdown(this.get_md_desc("symbol"));
        md.appendCodeblock(this.to_string(), "verilog");
        return md;
    }
};
