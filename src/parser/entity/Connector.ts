import * as antlr4 from "../../antlr4";
import { Entity } from "./Entity";
import { Source } from "./Source.d";

export class Connector extends Entity {

    constructor(name: string, ctx: antlr4.ParserRuleContext, source: Source) {
        super(name, ctx, source);
    }

};
