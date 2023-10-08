import * as vscode from "vscode";
import * as antlr4 from "../../antlr4";
import { Entity } from "./Entity";
import { Source } from "./Source.d";
import { Id } from "./Id";
import { ContextEntity } from "./ContextEntity";
import { PulParser } from "../PulParser";

export class Context extends Entity {
    parent?: Context;
    childs: Context[];
    symbols: {[key: string]: Entity[]};
    references: Entity[];

    constructor(name: antlr4.ParserRuleContext|string, kind: string, ctx: antlr4.ParserRuleContext, source: Source, parent?: Context) {
        super(name, kind, ctx, source);
        this.parent = parent;
        this.childs = [];
        this.symbols = {};
        this.references = [];
    }

    locate(pos: vscode.Position): Context {
        for (let child of this.childs) {
            if (child.root_rng.contains(pos)) {
                return child.locate(pos);
            }
        }
        return this;
    }

    add_symbol(symbol: Entity) {
        let s = this.symbols[symbol.name];
        if (!s) this.symbols[symbol.name] = [symbol];
        else {
            if (s[s.length-1].scope_end < 0) s[s.length-1].scope_end = symbol.scope_beg;
            s.push(symbol);
        }
    }

    find_symbol(name: string, pos?: number, hier?: boolean): Entity|undefined {
        if (hier === undefined) hier = false;
        let self_name = name;
        let child_name: string|undefined;
        let p = name.indexOf(".");
        if (p > 0) {
            self_name = name.substring(0, p);
            child_name = name.substring(p + 1);
        }
        let s = this.symbols[self_name];
        if (s) {
            for (let sym of s) {
                if (pos !== undefined && !sym.scope_contains(pos)) continue;
                if (!hier || !child_name || !(sym instanceof Context)) return sym;
                let par = sym as Context;
                let instance = par as any;
                if (instance.modu_name) {
                    let module = PulParser.inst().get_module(instance.modu_name);
                    if (module) par = module;
                }
                return par.find_symbol(child_name, undefined, hier);
            }
        }
        if (!this.parent) return undefined;
        return this.parent.find_symbol(name, pos, hier);
    }

    get_symbols(pos: number, syms?: Entity[]): Entity[] {
        if (syms === undefined) syms = [];
        for (let symbols of Object.values(this.symbols)) {
            for (let symbol of symbols) {
                if (symbol.scope_contains(pos)) {
                    syms.push(symbol);
                    break;
                }
            }
        }
        if (!this.parent) return syms;
        return this.parent.get_symbols(pos, syms);
    }

    get_document_symbols(syms?: ContextEntity[]): ContextEntity[] {
        if (syms === undefined) syms = [];
        for (let [name, symbols] of Object.entries(this.symbols)) {
            for (let symbol of symbols) syms.push(new ContextEntity(symbol, this));
        }
        for (let child of this.childs) {
            child.get_document_symbols(syms);
        }
        return syms;
    }

    to_string(): string {
        return `${this.kind} ${this.name}()`;
    }

}