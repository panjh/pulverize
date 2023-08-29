import * as antlr4 from "../../antlr4";
import { Context } from "./Context";
import { Port } from "./Port";
import { Procedure } from "./Procedure";
import { Source } from "./Source.d";

export class Task extends Procedure {

    constructor(name: antlr4.ParserRuleContext, ctx: antlr4.ParserRuleContext, source: Source, parent: Context) {
        super(name, "task", ctx, source, parent);
    }

}