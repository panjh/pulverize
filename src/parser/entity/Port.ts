import * as antlr4 from "../../antlr4";
import { Entity } from "./Entity";
import { Source } from "./Source.d";

export class Port extends Entity {
    dir: string;
    width: string;

    constructor(name: string, dir: string, width: string, ctx: antlr4.ParserRuleContext, source: Source) {
        super(name, ctx, source);
        this.dir = dir;
        this.width = width;
    }
};
