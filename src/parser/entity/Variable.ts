import * as antlr4 from "../../antlr4";
import { Symbol } from "./Symbol";
import { Source } from "./Source.d";
import { Context } from "./Context";

export class Variable extends Symbol {

    constructor(name: string, kind: string, ctx: antlr4.ParserRuleContext, source: Source, parent?: Context) {
        super(name, kind, "", ctx, source, parent);
    }
};
