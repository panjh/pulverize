import * as vscode from 'vscode';
import * as util from '../util';
import { PulParser } from '../parser/PulParser';
import { Context } from '../parser/entity/Context';
import { Instance } from '../parser/entity/Instance';
import { InstanceGroup } from '../parser/entity/InstanceGroup';
import { Func } from '../parser/entity/Func';
import { Task } from '../parser/entity/Task';
import { Always } from '../parser/entity/Always';
import { Initial } from '../parser/entity/Initial';

let debug = false;
let dtag = "[CodeActionProvider]";

export class CodeActionProvider implements vscode.CodeActionProvider {

    provideCodeActions(document: vscode.TextDocument, range: vscode.Range | vscode.Selection, context: vscode.CodeActionContext, token: vscode.CancellationToken): vscode.ProviderResult<vscode.CodeAction[]> {
        let rng = document.getWordRangeAtPosition(range.start);
        if (!rng) return null;
        let word = document.getText(rng);
        if (debug) console.log(`${dtag} word='${word}' range='${range.start.line}:${range.start.character}~${range.end.line}:${range.end.character}'`);
        if (word.length == 0) return null;
        if (context.diagnostics.length == 0) return null;
        let missing_code: string|undefined;
        for (let diag of context.diagnostics) {
            if (diag.source == "pul-linter" && diag.code !== undefined) {
                missing_code = diag.code as string;
                break;
            }
        }
        if (missing_code === undefined) return null;
        let root = PulParser.inst().parse(document.uri.fsPath);
        if (!root) return null;
        let ctx = root.locate(range.start);
        return this.create_ref(document, range.start, missing_code, ctx);
    }

    private create_ref(doc: vscode.TextDocument, pos: vscode.Position, code: string, ctx: Context): vscode.CodeAction[] {
        let [name, width] = code.split(',');
        let action =  new vscode.CodeAction(`Add wire "${name}"`, vscode.CodeActionKind.QuickFix);
        action.edit = new vscode.WorkspaceEdit();
        let insert_pos = new vscode.Position(pos.line, 0);
        while (ctx instanceof Instance || ctx instanceof InstanceGroup || ctx instanceof Func || ctx instanceof Task || ctx instanceof Always || ctx instanceof Initial) {
            insert_pos = new vscode.Position(ctx.range.start.line, 0);
            ctx = ctx.parent!;
        }
        action.edit.insert(doc.uri, insert_pos, `wire${util.pad(width, 8)}${name};\n`);
        return [action];
    }

}