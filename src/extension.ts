import * as vscode from 'vscode';
import * as util from './util';
import { CompletionItemProvider } from './completion/CompletionItemProvider';
import { DefinitionProvider } from './completion/DefinitionProvider';
import { HoverProvider } from './completion/HoverProvider';
import { CodeActionProvider } from './completion/CodeActionProvider';
import { DocumentSymbolProvider } from './completion/DocumentProvider';
import { PulParser } from './parser/PulParser';

let debug = false;
let dtag = "[extension]";

export async function activate(context: vscode.ExtensionContext) {
    let lang: vscode.DocumentFilter[] = [
        { scheme: 'file', language: 'verilog' },
        { scheme: 'file', language: 'systemverilog' },
    ];

	vscode.languages.registerHoverProvider(lang, new HoverProvider());
    if (!debug) {
        vscode.languages.registerDefinitionProvider(lang, new DefinitionProvider());
        vscode.languages.registerCompletionItemProvider(lang, new CompletionItemProvider(), '.', '`', '$');
        vscode.languages.registerDocumentSymbolProvider(lang, new DocumentSymbolProvider());
        vscode.languages.registerCodeActionsProvider(lang, new CodeActionProvider());
    }

    vscode.commands.registerCommand('pulverize.parse', () => {
        if (debug) console.log(`${dtag} command pulverize.parse`);
        if (!vscode.window.activeTextEditor) return;
        let doc = vscode.window.activeTextEditor.document;
        let path = doc.uri.path.substring(1);
        PulParser.inst().parse(path, true);
        PulParser.inst().update_diagnostics();
    });
    vscode.commands.registerCommand('pulverize.parse_all', () => {
        if (debug) console.log(`${dtag} command pulverize.parse_all`);
        PulParser.inst().parse_all();
    });
    vscode.commands.registerCommand('pulverize.check', () => {
        if (debug) console.log(`${dtag} command pulverize.check`);
        if (!vscode.window.activeTextEditor) return;
        let doc = vscode.window.activeTextEditor.document;
        let path = doc.uri.path.substring(1);
        PulParser.inst().check(path);
        PulParser.inst().update_diagnostics();
    });

    vscode.workspace.onDidSaveTextDocument(doc => {
        let path = doc.uri.path.substring(1);
        if (debug) console.log(`${dtag} onDidSaveTextDocument path ${path}`);
        let lang = util.get_path_language(path);
        switch (lang) {
        case util.Lang.V:
        case util.Lang.SV:
            PulParser.inst().parse(path, true);
            PulParser.inst().update_diagnostics();
            break;
        case util.Lang.VH:
            PulParser.inst().parse_for_include(path);
            break;
        }
    });

    if (!debug) vscode.commands.executeCommand('pulverize.parse_all');
}

export function deactivate() {}
