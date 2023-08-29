import * as vscode from "vscode";
import * as antlr4 from "../antlr4";

let debug = false;
let dtag = "[PulErrorListener]";

export class PulErrorListener extends antlr4.ErrorListener<any> {

    tag: string;
    diags: vscode.Diagnostic[];

    constructor(tag: string, diags: vscode.Diagnostic[], parser?: antlr4.Recognizer<any>) {
        super();
        this.tag = tag;
        this.diags = diags;
        if (!parser) return;
        parser.removeErrorListeners();
        parser.addErrorListener(this);
    }

    syntaxError(recognizer: any, token: any, line: number, column: number, msg: string, e?: antlr4.RecognitionException) {
        let pos = new vscode.Position(line-1, column);
        let rng = new vscode.Range(pos, pos);
        let code: number|undefined;
        let tag = "pul-lexer";
        if (token instanceof vscode.Range) {
            if (debug) console.log(`${dtag} linter error "${msg}" at ${token.start.line}:${token.start.character}`);
            rng = token;
            tag = "pul-linter";
        }
        else if (token instanceof antlr4.Token) {
            if (debug) console.log(`${dtag} parser error "${msg}" token ${token.tokenIndex} at ${token.line}:${token.column}`);
            rng = new vscode.Range(token.line-1, token.column, token.line-1, token.column+token.text.length);
            code = token.tokenIndex;
            tag = "pul-parser";
        }
        else {
            if (debug) console.log(`${dtag} lexer error "${msg}" at ${line}:${column}`);
        }
        let diag = new vscode.Diagnostic(rng, msg, vscode.DiagnosticSeverity.Error);
        diag.source = tag;
        diag.code = code;
        this.diags.push(diag);
    }

}