import * as antlr4 from "../../antlr4";
import { Symbol } from "./Symbol";
import { Source } from "./Source.d";
import { Context } from "./Context";

export class Logic extends Symbol {

    constructor(name: antlr4.ParserRuleContext, kind: string, width: string, ctx: antlr4.ParserRuleContext, source: Source, parent?: Context) {
        super(name, kind, width, ctx, source, parent);
    }
};
