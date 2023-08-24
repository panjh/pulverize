import * as antlr4 from "../../antlr4";
import { Entity } from "./Entity";
import { Source } from "./Source.d";

export class Parameter extends Entity {
    value: string;

    constructor(name: string, value: string, ctx: antlr4.ParserRuleContext, source: Source) {
        super(name, ctx, source);
        this.value = value;
    }
};
