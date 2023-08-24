import * as antlr4 from "../../antlr4";
import { Context } from "./Context";
import { Source } from "./Source.d";
import { Module } from "./Module";
import { Instance } from "./Instance";

export class Root extends Context {

    modules: {[key: string]: Module};
    instances: {[key: string]: Instance};

    constructor(ctx: antlr4.ParserRuleContext, source: Source) {
        super(source.get_path(), ctx, source);
        this.modules = {};
        this.instances = {};
    }

}