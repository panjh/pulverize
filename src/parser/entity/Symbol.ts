import * as antlr4 from "../../antlr4";
import * as vscode from "vscode";
import { Context } from "./Context";
import { Entity } from "./Entity";
import { Source } from "./Source.d";

export class Symbol extends Entity {

    parent?: Context;
    width: string;
    value?: string;

    width_symbol?: number;
    width_value?: number;

    constructor(name: antlr4.ParserRuleContext, kind: string, width: string, ctx: antlr4.ParserRuleContext, source: Source, parent?: Context) {
        super(name, kind, ctx, source);
        this.parent = parent;
        this.width = width;
    }

    to_string(): string {
        if (this.value === undefined) return `${this.kind}${this.width} ${this.name}`;
        return `${this.kind}${this.width} ${this.name} = ${this.value}`;
    }

};
