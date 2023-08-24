import * as antlr4 from "../../antlr4";
import { Context } from "./Context";
import { Procedure } from "./Procedure";
import { Source } from "./Source.d";

export class Func extends Procedure {

    constructor(name: string, ctx: antlr4.ParserRuleContext, source: Source, parent: Context) {
        super(name, ctx, source, parent);
    }

}