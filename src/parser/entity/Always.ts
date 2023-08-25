import * as antlr4 from "../../antlr4";
import { Context } from "./Context";
import { Source } from "./Source.d";

export class Always extends Context {

    constructor(ctx: antlr4.ParserRuleContext, source: Source, parent: Context) {
        super(`line-${ctx.start.line}`, "always", ctx, source, parent);
    }
}