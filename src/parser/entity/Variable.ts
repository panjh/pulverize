import * as antlr4 from "../../antlr4";
import { Entity } from "./Entity";
import { Source } from "./Source.d";

export class Variable extends Entity {

    kind: string;

    constructor(name: string, kind: string, ctx: antlr4.ParserRuleContext, source: Source) {
        super(name, ctx, source);
        this.kind = kind;
    }
};
