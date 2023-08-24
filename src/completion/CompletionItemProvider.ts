import * as vscode from 'vscode';
import * as util from '../util';
import { PulParser } from '../parser/PulParser';
import { Source } from '../parser/entity/Source';
import { Instance } from '../parser/entity/Instance';
import { Macro } from '../parser/entity/Macro';
import { Entity } from '../parser/entity/Entity';

let debug = false;
let dtag = "[CompletionItemProvider]";

export class CompletionItemProvider implements vscode.CompletionItemProvider {

    provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext): vscode.ProviderResult<vscode.CompletionItem[]> {
        let pos = document.offsetAt(position);
        let ch = context.triggerCharacter;
        let root = PulParser.inst().parse(document.uri.fsPath);
        if (!root) return null;
        let source = root.source as Source;
        let ctx = root.locate(position);
        if (debug) console.log(`${dtag} pos ${position.line}:${position.character} char '${ch}' ctx '${ctx.name}'`);
        if (ch == '`') return this.macro_items(source.get_macros(pos));
        else if (ch == '$') return this.variable_items(ctx.get_symbols(pos), position);
        else if (ch == '.' && ctx instanceof Instance) return this.port_items(ctx as Instance);
        else return null;
    }

    private macro_items(macros: Macro[]): vscode.CompletionItem[] {
        let items: vscode.CompletionItem[] = [];
        for (let macro of macros) {
            let item = new vscode.CompletionItem(macro.name, vscode.CompletionItemKind.Variable);
            item.documentation = new vscode.MarkdownString();
            item.documentation.appendCodeblock(macro.to_string(), "verilog");
            items.push(item);
        }
        return items;
    }

    private variable_items(symbols: Entity[], position: vscode.Position): vscode.CompletionItem[] {
        let items: vscode.CompletionItem[] = [];
        for (let symbol of symbols) {
            let item = new vscode.CompletionItem(symbol.name, vscode.CompletionItemKind.Variable);
            item.documentation = new vscode.MarkdownString();
            item.documentation.appendCodeblock(symbol.to_string(), "verilog");
            let tri_rng = new vscode.Range(position.line, position.character-1, position.line, position.character);
            item.additionalTextEdits = [vscode.TextEdit.delete(tri_rng)];
            items.push(item);
        }
        return items;
    }

    private port_items(inst: Instance): vscode.CompletionItem[]|null {
        let modu_name = inst.parent!.name;
        let modu = PulParser.inst().get_module(modu_name);
        if (!modu) return null;
        let items: vscode.CompletionItem[] = [];
        let missing_ports: string[] = [];
        for (let i = 0; i < modu.ports.length; ++i) {
            let port = modu.ports[i];
            let item = new vscode.CompletionItem(port.name, vscode.CompletionItemKind.Variable);
            item.documentation = new vscode.MarkdownString();
            item.documentation.appendCodeblock(port.to_string(), "verilog");
            item.insertText = new vscode.SnippetString(`${port.name}(\${1:${port.name}}),`);
            item.sortText = `5_miss_${util.zero_fill(i, 6)}`;
            if (inst.get_connector(port.name)) {
                item.kind = vscode.CompletionItemKind.Constant;
                item.sortText = `7_found_${util.zero_fill(i, 6)}`;
            }
            else {
                missing_ports.push(`.${port.name}(${port.name}),`);
            }
            items.push(item);
        }
        if (missing_ports.length > 0) {
            let item = new vscode.CompletionItem("All missing ports...", vscode.CompletionItemKind.Snippet);
            missing_ports[0] = missing_ports[0].substring(1);
            item.insertText = missing_ports.join("\n");
            item.sortText = `6_allmissing`;
            items.push(item);
        }
        return items;
    }

}