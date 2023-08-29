import * as antlr4 from "../../antlr4";
import { Entity } from "./Entity";
import { Context } from "./Context";
import { Source } from "./Source.d";

export class Id extends Entity {

    parent?: Context;
    port_modu?: string;
    port_name?: string;

    constructor(name: antlr4.ParserRuleContext, ctx: antlr4.ParserRuleContext, source: Source, parent?: Context) {
        super(name, "ref", ctx, source);
        this.parent = parent;
    }

};
