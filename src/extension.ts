import * as vscode from 'vscode';
import * as util from './util';
import { CompletionItemProvider } from './completion/CompletionItemProvider';
import { DefinitionProvider } from './completion/DefinitionProvider';
import { HoverProvider } from './completion/HoverProvider';
import { CodeActionProvider } from './completion/CodeActionProvider';
import { DocumentSymbolProvider } from './completion/DocumentProvider';
import { PulParser } from './parser/PulParser';
import { SemanticTokensProvider } from './completion/SemanticTokensProvider';

let debug = false;
let dtag = "[extension]";

export async function activate(context: vscode.ExtensionContext) {
    let lang: vscode.DocumentFilter = { scheme: 'file', language: 'verilog' };

    let sematic_tokens_provider = new SemanticTokensProvider();
    context.subscriptions.push(vscode.languages.registerDocumentSemanticTokensProvider(lang, sematic_tokens_provider, sematic_tokens_provider.get_legend()));
	context.subscriptions.push(vscode.languages.registerHoverProvider(lang, new HoverProvider()));
    if (!debug) {
        context.subscriptions.push(vscode.languages.registerDefinitionProvider(lang, new DefinitionProvider()));
        context.subscriptions.push(vscode.languages.registerCompletionItemProvider(lang, new CompletionItemProvider(), '.', '`', '$'));
        context.subscriptions.push(vscode.languages.registerDocumentSymbolProvider(lang, new DocumentSymbolProvider()));
        context.subscriptions.push(vscode.languages.registerCodeActionsProvider(lang, new CodeActionProvider()));
    }

    context.subscriptions.push(vscode.commands.registerCommand('pulverize.parse', () => {
        if (debug) console.log(`${dtag} command pulverize.parse`);
        if (!vscode.window.activeTextEditor) return;
        let doc = vscode.window.activeTextEditor.document;
        let path = doc.uri.path.substring(1);
        PulParser.inst().parse(path, true);
        PulParser.inst().update_diagnostics();
    }));
    context.subscriptions.push(vscode.commands.registerCommand('pulverize.parse_all', () => {
        if (debug) console.log(`${dtag} command pulverize.parse_all`);
        PulParser.inst().parse_all();
    }));
    context.subscriptions.push(vscode.commands.registerCommand('pulverize.check', () => {
        if (debug) console.log(`${dtag} command pulverize.check`);
        if (!vscode.window.activeTextEditor) return;
        let doc = vscode.window.activeTextEditor.document;
        let path = doc.uri.path.substring(1);
        PulParser.inst().check(path);
        PulParser.inst().update_diagnostics();
    }));

    context.subscriptions.push(vscode.workspace.onDidSaveTextDocument(doc => {
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
    }));

    if (!debug) vscode.commands.executeCommand('pulverize.parse_all');
}

export function deactivate() {}
