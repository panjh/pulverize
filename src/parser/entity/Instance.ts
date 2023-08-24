import * as antlr4 from "../../antlr4";
import { Connector } from "./Connector";
import { Context } from "./Context";
import { Source } from "./Source.d";

export class Instance extends Context {

    connectors: Connector[];

    constructor(name: string, ctx: antlr4.ParserRuleContext, source: Source, parent: Context) {
        super(name, ctx, source, parent);
        this.connectors = [];
    }

    get_connector(name: string): Connector|undefined {
        for (let c of this.connectors) {
            if (c.name == name) return c;
        }
        return undefined;
    }

}