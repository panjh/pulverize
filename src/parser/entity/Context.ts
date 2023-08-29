import * as vscode from "vscode";
import * as antlr4 from "../../antlr4";
import { Entity } from "./Entity";
import { Source } from "./Source.d";
import { Id } from "./Id";
import { ContextEntity } from "./ContextEntity";

export class Context extends Entity {
    parent?: Context;
    childs: Context[];
    symbols: {[key: string]: Entity[]};
    references: Id[];

    constructor(name: antlr4.ParserRuleContext|string, kind: string, ctx: antlr4.ParserRuleContext, source: Source, parent?: Context) {
        super(name, kind, ctx, source);
        this.parent = parent;
        this.childs = [];
        this.symbols = {};
        this.references = [];
    }

    locate(pos: vscode.Position): Context {
        for (let child of this.childs) {
            if (child.rng.contains(pos)) return child.locate(pos);
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

    find_symbol(name: string, pos: number): Entity|undefined {
        let s = this.symbols[name];
        if (s) {
            for (let sym of s) {
                if (sym.scope_contains(pos)) return sym;
            }
        }
        if (!this.parent) return undefined;
        return this.parent.find_symbol(name, pos);
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