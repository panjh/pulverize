import * as antlr4 from '../../antlr4';
import * as vscode from "vscode";
import { Context } from './Context';
import { Port } from './Port';
import { Source } from './Source.d';

export class Procedure extends Context {

    ports: Port[];

    constructor(name: string, kind: string, ctx: antlr4.ParserRuleContext, source: Source, parent: Context) {
        super(name, kind, ctx, source, parent);
        this.ports = [];
    }

    get_port(name: string): Port|undefined {
        for (let port of this.ports) {
            if (port.name == name) return port;
        }
        return undefined;
    }

    to_string(): string {
        return `${this.kind} ${this.name}(${this.ports.map(p => p.to_string()).join(",")})`;
    }

    to_md_string(): vscode.MarkdownString {
        let md = new vscode.MarkdownString();
        md.appendMarkdown(this.get_md_desc("procedure"));
        md.appendCodeblock(this.to_string(), "verilog");
        return md;
    }
}