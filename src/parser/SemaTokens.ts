import * as vscode from 'vscode';

export class SemaTokens {
    rng: vscode.Range;
    kind: string;

    constructor(rng: vscode.Range, kind: string) {
        this.rng = rng;
        this.kind = kind;
    }

    in_same_line(rng: vscode.Range): boolean {
        return this.rng.start.line == rng.start.line;
    }

    union(rng: vscode.Range): void {
        this.rng = this.rng.union(rng);
    }

    to_string(): string {
        return `token(${this.kind}) at ${this.rng.start.line}:[${this.rng.start.character}:${this.rng.end.character}]`;
    }

}