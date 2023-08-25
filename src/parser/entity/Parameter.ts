import * as antlr4 from "../../antlr4";
import { Symbol } from "./Symbol";
import { Source } from "./Source.d";
import { Context } from "./Context";

export class Parameter extends Symbol {

    constructor(name: string, value: string, ctx: antlr4.ParserRuleContext, source: Source, parent?: Context) {
        super(name, "param", "", ctx, source, parent);
        this.value = value;
    }
};
