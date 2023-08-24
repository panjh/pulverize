import * as antlr4 from "../../antlr4";
import { Entity } from "./Entity";
import { Context } from "./Context";
import { Source } from "./Source.d";

export class Id extends Entity {

    parent?: Context;
    port_modu?: string;
    port_name?: string;

    constructor(name: string, ctx: antlr4.ParserRuleContext, source: Source) {
        super(name, ctx, source);
    }
};
