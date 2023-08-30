import * as antlr4 from '../../antlr4';
import * as vscode from 'vscode';

export class RefToken extends antlr4.Token {
    root_beg?: number;
    root_end?: number;
    root_rng?: vscode.Range;
}