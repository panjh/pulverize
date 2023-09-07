import * as vscode from 'vscode';
import * as util from '../util';
import { PulParser } from '../parser/PulParser';

let debug = false;
let dtag = "[ReferenceProvider]";

export class ReferenceProvider implements vscode.ReferenceProvider {

    provideReferences(document: vscode.TextDocument, position: vscode.Position, context: vscode.ReferenceContext, token: vscode.CancellationToken): vscode.ProviderResult<vscode.Location[]> {
        let rng = document.getWordRangeAtPosition(position);
        if (!rng) return null;
        let pos = document.offsetAt(position);
        let sym = util.get_symbol(document, rng);
        if (debug) console.log(`${dtag} word='${sym.word}' kind=${sym.kind}`);
        if (sym.kind != util.SymbolKind.VARIABLE) return null;

        let root = PulParser.inst().parse(document.uri.fsPath);
        if (!root) return null;
        let ctx = root.locate(position);
        let symbol = ctx.find_symbol(sym.word, pos);
        if (debug) console.log(`${dtag} symbol='${symbol?.name}'`);
        if (!symbol) return null;
        let refs = PulParser.inst().find_references(symbol);
        return refs.map(id => new vscode.Location(vscode.Uri.file(id.source.path), id.name_rng!));
    }

}