import * as vscode from 'vscode';
import * as util from '../util';
import { PulParser } from '../parser/PulParser';
import { Source } from '../parser/entity/Source';
import { Instance } from '../parser/entity/Instance';
import { InstanceGroup } from '../parser/entity/InstanceGroup';

let debug = false;
let dtag = "[DefinitionProvider]";

export class DefinitionProvider implements vscode.DefinitionProvider {

    provideDefinition(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken): vscode.ProviderResult<vscode.Location> {
        let rng = document.getWordRangeAtPosition(position);
        if (!rng) return null;
        let pos = document.offsetAt(position);
        let sym = util.get_symbol(document, rng);
        if (debug) console.log(`${dtag} word='${sym.word}' kind=${sym.kind}`);
        let root = PulParser.inst().parse(document.uri.fsPath);
        if (!root) return null;
        let source = root.source as Source;
        let ctx = root.locate(position);
        switch (sym.kind) {
        case util.SymbolKind.MACRO: {
            let macro = source.find_macro_by_pos(sym.word, pos);
            if (debug) console.log(`${dtag} macro='${macro?.name}'`);
            if (!macro?.get_path()) return null;
            return new vscode.Location(vscode.Uri.file(macro.get_path()!), macro.rng!);
        }
        case util.SymbolKind.VARIABLE: {
            let symbol = ctx.find_symbol(sym.word, pos);
            if (!symbol) return null;
            if (debug) console.log(`${dtag} symbol='${symbol.name}' loc='${symbol.get_path()}:${symbol.rng.start.line+1}:${symbol.rng.start.character+1}`);
            return new vscode.Location(vscode.Uri.file(symbol.get_path()), symbol.rng);
        }
        case util.SymbolKind.FILE: {
            let file = root.source.relative(sym.word);
            if (debug) console.log(`${dtag} file='${file}'`);
            return new vscode.Location(vscode.Uri.file(file), new vscode.Position(0, 0));
        }
        case util.SymbolKind.FIELD: {
            if (!(ctx instanceof Instance)) return null;
            let def_modu = ctx.parent as InstanceGroup;
            let modu = PulParser.inst().get_module(def_modu.name);
            let port = modu?.get_port(sym.word);
            if (!port) return null;
            return new vscode.Location(vscode.Uri.file(port.get_path()), port.rng);
        }
        }
    }

}