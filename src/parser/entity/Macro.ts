import * as antlr4 from "../../antlr4";
import * as vscode from "vscode";
import { Source } from "./Source.d";

export class Macro {

    name: string;
    tokens: antlr4.Token[];
    source?: Source;
    beg?: number;
    end?: number;
    rng?: vscode.Range;
    pos_start: number;
    pos_end: number;
    idx_start: number;
    idx_end: number;

    constructor(name: string, tokens?: antlr4.Token[], source?: Source, beg?: number, end?: number, rng?: vscode.Range) {
        this.name = name;
        this.tokens = (tokens || []);
        this.pos_start = 0;
        this.pos_end = -1;
        this.idx_start = 0;
        this.idx_end = -1;
        this.source = source;
        this.beg = beg;
        this.end = end;
        this.rng = rng;
    }

    idx_contains(idx: number): boolean {
        return (idx >= this.idx_start && (this.idx_end < 0 || idx < this.idx_end));
    }

    pos_contains(pos: number): boolean {
        return (pos >= this.pos_start && (this.pos_end < 0 || pos < this.pos_end));
    }

    get_path(): string|undefined {
        return this.source?.path;
    }

    to_string(): string {
        if (this.source) return this.source.get_document(this.beg!, this.end!, this.rng!);
        else return this.tokens.map(t => t.text).join(" ");
    }
};
