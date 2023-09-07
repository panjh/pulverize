import * as vscode from 'vscode';
import { PulParser } from '../parser/PulParser';

let debug = false;
let dtag = "[DocumentSymbolProvider]";

export class DocumentSymbolProvider implements vscode.DocumentSymbolProvider {

    provideDocumentSymbols(document: vscode.TextDocument, token: vscode.CancellationToken): vscode.ProviderResult<vscode.SymbolInformation[]> {
        let root = PulParser.inst().parse(document.uri.fsPath);
        if (!root) return null;
        if (debug) console.log(`${dtag} symbols of '${document.uri.fsPath}'`);
        let symbols = root.get_document_symbols();
        let items: vscode.SymbolInformation[] = [];
        for (let symbol of symbols) {
            if (debug) console.log(`${dtag} symbol name '${symbol.name}' ctx '${symbol.ctx.name}' path '${symbol.get_path()}' start ${symbol.rng.start.line}:${symbol.rng.start.character} `);
            let path = symbol.get_path();
            let desc = `${path}:${symbol.rng.start.line+1}:${symbol.rng.start.character+1}`;
            let loc = new vscode.Location(vscode.Uri.file(path), symbol.rng);
            let item = new vscode.SymbolInformation(symbol.name, vscode.SymbolKind.Variable, desc, loc);
            items.push(item);
        }
        return items;
    }

}