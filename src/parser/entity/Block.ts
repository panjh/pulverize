import * as antlr4 from "../../antlr4";
import { Context } from "./Context";
import { Source } from "./Source";

export class Block extends Context {

    constructor(name: antlr4.ParserRuleContext|string, ctx: antlr4.ParserRuleContext, source: Source, parent: Context) {
        super(name, "block", ctx, source, parent);
    }

    to_string(): string {
        return `${this.kind} ${this.name}`;
    }
}