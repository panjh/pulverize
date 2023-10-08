import * as vscode from 'vscode';
import * as util from './util';
import { CompletionItemProvider } from './provide/CompletionItemProvider';
import { DefinitionProvider } from './provide/DefinitionProvider';
import { HoverProvider } from './provide/HoverProvider';
import { CodeActionProvider } from './provide/CodeActionProvider';
import { DocumentSymbolProvider } from './provide/DocumentProvider';
import { PulParser } from './parser/PulParser';
import { SemanticTokensProvider } from './provide/SemanticTokensProvider';
import { ReferenceProvider } from './provide/ReferenceProvider';
import { PulLinter } from './parser/PulLinter';
import { PulConfig } from './parser/PulConfig';

let debug = false;
let dtag = "[extension]";

export async function activate(context: vscode.ExtensionContext) {
    let lang: vscode.DocumentFilter = { scheme: 'file', language: 'verilog' };

    let sematic_tokens_provider = new SemanticTokensProvider();
    context.subscriptions.push(vscode.languages.registerDocumentSemanticTokensProvider(lang, sematic_tokens_provider, sematic_tokens_provider.get_legend()));
	context.subscriptions.push(vscode.languages.registerHoverProvider(lang, new HoverProvider()));
    if (!debug) {
        context.subscriptions.push(vscode.languages.registerDefinitionProvider(lang, new DefinitionProvider()));
        context.subscriptions.push(vscode.languages.registerCompletionItemProvider(lang, new CompletionItemProvider(), '.', '`'));
        context.subscriptions.push(vscode.languages.registerDocumentSymbolProvider(lang, new DocumentSymbolProvider()));
        context.subscriptions.push(vscode.languages.registerCodeActionsProvider(lang, new CodeActionProvider()));
        context.subscriptions.push(vscode.languages.registerReferenceProvider(lang, new ReferenceProvider()));
    }

    context.subscriptions.push(vscode.commands.registerCommand('pulverize.parse', () => {
        if (debug) console.log(`${dtag} command pulverize.parse`);
        if (!vscode.window.activeTextEditor) return;
        let doc = vscode.window.activeTextEditor.document;
        let path = doc.uri.path.substring(1);
        let root = PulParser.inst().parse(path, true);
        PulLinter.inst().check(root);
        PulParser.inst().update_diagnostics();
    }));
    context.subscriptions.push(vscode.commands.registerCommand('pulverize.parse_all', () => {
        if (debug) console.log(`${dtag} command pulverize.parse_all`);
        PulParser.inst().parse_check_all();
    }));

    context.subscriptions.push(vscode.workspace.onDidSaveTextDocument(doc => {
        let path = doc.uri.path.substring(1);
        if (debug) console.log(`${dtag} onDidSaveTextDocument path ${path}`);
        let lang = util.get_path_language(path);
        switch (lang) {
        case util.Lang.V:
        case util.Lang.SV:
            let root = PulParser.inst().parse(path, true);
            PulLinter.inst().check(root);
            PulParser.inst().update_diagnostics();
            break;
        case util.Lang.VH:
            PulParser.inst().parse_check_for_include(path);
            break;
        case util.Lang.CFG:
            PulConfig.inst().load();
            vscode.commands.executeCommand('pulverize.parse_all');
            break;
        }
    }));

    if (!debug) vscode.commands.executeCommand('pulverize.parse_all');
}

export function deactivate() {}
