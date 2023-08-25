import * as vscode from "vscode";

export declare class Source {

    path: string;
    code: string;
    mtime: number;

    reset(code: string, mtime: number);

    get_source(tok_index: number): Source;

    get_path(): string;

    get_document(beg: number, end: number, range?: vscode.Range): string;

    get_location(range: vscode.Range): string;

    relative(path: string): string;

}
