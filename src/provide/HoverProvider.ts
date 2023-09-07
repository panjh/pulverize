import * as vscode from 'vscode';
import * as util from '../util';
import { PulParser } from '../parser/PulParser';
import { Source } from '../parser/entity/Source';
import { Instance } from '../parser/entity/Instance';
import { InstanceGroup } from '../parser/entity/InstanceGroup';

let debug = false;
let dtag = "[VHoverProvider]";

export class HoverProvider implements vscode.HoverProvider {

    provideHover(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken): vscode.ProviderResult<vscode.Hover> {
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
            if (!macro) return null;
            return new vscode.Hover(macro.to_md_string());
        }
        case util.SymbolKind.VARIABLE: {
            let symbol = ctx.find_symbol(sym.word, pos);
            if (debug) console.log(`${dtag} symbol='${symbol?.name}'`);
            if (!symbol) return null;
            return new vscode.Hover(symbol.to_md_string());
        }
        case util.SymbolKind.FILE: {
            let file = root.source.relative(sym.word);
            if (debug) console.log(`${dtag} file='${file}'`);
            let md = new vscode.MarkdownString();
            md.appendMarkdown(`*(include @{file})*`);
            return new vscode.Hover(md);
        }
        case util.SymbolKind.FIELD: {
            if (!(ctx instanceof Instance)) return null;
            let def_modu = ctx.parent as InstanceGroup;
            let modu = PulParser.inst().get_module(def_modu.name);
            let port = modu?.get_port(sym.word);
            if (!port) return null;
            return new vscode.Hover(port.to_md_string());
        }
        }
    }

}