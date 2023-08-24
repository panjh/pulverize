import * as antlr4 from "../../antlr4";
import { Entity } from "./Entity";
import { Source } from "./Source.d";

export class Logic extends Entity {
    kind: string;
    width: string;

    constructor(name: string, kind: string, width: string, ctx: antlr4.ParserRuleContext, source: Source) {
        super(name, ctx, source);
        this.kind = kind;
        this.width = width;
    }
};
