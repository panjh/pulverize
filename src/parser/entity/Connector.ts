import * as antlr4 from "../../antlr4";
import { Entity } from "./Entity";
import { Source } from "./Source.d";

export class Connector extends Entity {

    modu: string;
    width_value?: number;

    constructor(name: antlr4.ParserRuleContext, modu: string, ctx: antlr4.ParserRuleContext, source: Source) {
        super(name, "connect", ctx, source);
        this.modu = modu;
    }

};
