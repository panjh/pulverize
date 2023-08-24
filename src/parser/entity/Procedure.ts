import * as antlr4 from '../../antlr4';
import { Context } from './Context';
import { Port } from './Port';
import { Source } from './Source.d';

export class Procedure extends Context {

    ports: Port[];

    constructor(name: string, ctx: antlr4.ParserRuleContext, source: Source, parent: Context) {
        super(name, ctx, source, parent);
        this.ports = [];
    }

    get_port(name: string): Port|undefined {
        for (let port of this.ports) {
            if (port.name == name) return port;
        }
        return undefined;
    }
}