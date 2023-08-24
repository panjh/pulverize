import * as antlr4 from "../../antlr4";
import { Context } from "./Context";
import { Source } from "./Source.d";

export class InstanceGroup extends Context {

    constructor(name: string, ctx: antlr4.ParserRuleContext, source: Source, parent: Context) {
        super(name, ctx, source, parent);
    }

}