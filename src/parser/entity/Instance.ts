import * as antlr4 from "../../antlr4";
import { Connector } from "./Connector";
import { Context } from "./Context";
import { InstanceGroup } from "./InstanceGroup";
import { Source } from "./Source.d";

export class Instance extends Context {

    modu_name: string;
    connectors: Connector[];

    constructor(name: antlr4.ParserRuleContext, ctx: antlr4.ParserRuleContext, source: Source, parent: InstanceGroup) {
        super(name, "inst", ctx, source, parent);
        this.modu_name = parent.name;
        this.connectors = [];
    }

    get_connector(name: string): Connector|undefined {
        for (let c of this.connectors) {
            if (c.name == name) return c;
        }
        return undefined;
    }

    to_string(): string {
        return `${this.modu_name} ${this.name}`;
    }
}