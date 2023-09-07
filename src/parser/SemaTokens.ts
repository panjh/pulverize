import * as vscode from 'vscode';

export class SemaTokens {
    name: string;
    rng: vscode.Range;
    kind: string;

    constructor(name: string, rng: vscode.Range, kind: string) {
        this.name = name;
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
        return `${this.kind} token '${this.name}' at ${this.rng.start.line}:[${this.rng.start.character}:${this.rng.end.character}]`;
    }

}