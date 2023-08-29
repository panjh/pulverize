import * as vscode from 'vscode';
import { PulParser } from '../parser/PulParser';
import { Source } from '../parser/entity/Source';

let debug = false;
let dtag = "[SemanticTokensProvider]";

export class SemanticTokensProvider implements vscode.DocumentSemanticTokensProvider {

    types = ['macro', 'variable'];
    modifiers = ['false', 'reg', 'wire', 'logic', 'param', 'sim'];
    legend = new vscode.SemanticTokensLegend(this.types, this.modifiers);

    get_legend(): vscode.SemanticTokensLegend {
        return this.legend;
    }

    provideDocumentSemanticTokens(document: vscode.TextDocument, token: vscode.CancellationToken): vscode.ProviderResult<vscode.SemanticTokens> {
        let root = PulParser.inst().parse(document.uri.fsPath);
        if (!root) return null;
        if (debug) console.log(`${dtag} tokens of '${document.uri.fsPath}'`);
        let source = root.source as Source;
        let builder = new vscode.SemanticTokensBuilder(this.legend);
        for (let st of source.sema_tokens) {
            if (debug) console.log(`${dtag} ${st.to_string()}`);
            switch (st.kind) {
            case 'ignore': builder.push(st.rng, 'macro', ['false']); break;
            case 'wire': builder.push(st.rng, 'variable', ['wire']); break;
            case 'reg': builder.push(st.rng, 'variable', ['reg']); break;
            case 'logic': builder.push(st.rng, 'variable', ['logic']); break;
            case 'param': builder.push(st.rng, 'variable', ['param']); break;
            case 'sim': builder.push(st.rng, 'variable', ['sim']); break;
            }
        }
        return builder.build();
    }

}