import * as antlr4 from "../../antlr4";
import * as v from "../../v/VParser";
import { Entity } from "./Entity";
import { Context } from "./Context";
import { Source } from "./Source.d";

export class Id extends Entity {

    parent?: Context;
    port_modu?: string;
    port_name?: string;
    hiers: Entity[];

    constructor(name: antlr4.ParserRuleContext, ctx: v.IdentifierContext|v.Hierarchical_identifierContext, source: Source, parent?: Context) {
        super(name, "ref", ctx, source);
        this.parent = parent;
        this.hiers = [];
        if (ctx instanceof v.IdentifierContext) {
            this.hiers.push(this);
        }
        else if (ctx instanceof v.Hierarchical_identifierContext) {
            let names: String[] = [];
            for (let id of ctx.identifier_list()) {
                this.hiers.push(new Entity(id, "hier", id, source));
                names.push(id.getText());
            }
            this.name = names.join(".");
        }
    }

    is_hier(): boolean {
        return this.hiers.length > 1;
    }

};
