import * as antlr4 from "../../antlr4";
import { Context } from "./Context";
import { Source } from "./Source.d";
import { Module } from "./Module";
import { Instance } from "./Instance";
import { ModuleProvider } from "../ModuleProvider";
import { Entity } from "./Entity";

export class Root extends Context {

    modu_provider: ModuleProvider;
    modules: {[key: string]: Module};
    instances: {[key: string]: Instance};

    constructor(ctx: antlr4.ParserRuleContext, source: Source, modu_provider: ModuleProvider) {
        super(source.get_path(), "root", ctx, source);
        this.modules = {};
        this.instances = {};
        this.modu_provider = modu_provider;
    }

    find_symbol(name: string, pos: number): Entity|undefined {
        let sym = super.find_symbol(name, pos);
        if (sym) return sym;
        let modu = this.modu_provider.get_module(name);
        return modu;
    }

}