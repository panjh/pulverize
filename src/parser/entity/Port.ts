import * as antlr4 from "../../antlr4";
import { Symbol } from "./Symbol";
import { Source } from "./Source.d";
import { Context } from "./Context";

export class Port extends Symbol {
    dir: string;

    constructor(name: string, kind: string, width: string, dir: string, ctx: antlr4.ParserRuleContext, source: Source, parent?: Context) {
        super(name, kind, width, ctx, source, parent);
        this.dir = dir;
    }

    to_string(): string {
        if (this.value === undefined) return `${this.kind}${this.width} ${this.name}`;
        return `${this.dir} ${this.kind}${this.width} ${this.name} = ${this.value}`;
    }

};
