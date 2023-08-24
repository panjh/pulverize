import * as vscode from "vscode";
import * as fs from "fs";
import * as antlr4 from "./antlr4";

let debug = false;
let dtag = "[util]";

export enum Lang { UNKNOWN, V, SV, VH };

export function get_path_language(path: string): Lang {
    if (path.endsWith(".v")) return Lang.V;
    else if (path.endsWith(".sv")) return Lang.SV;
    else if (path.endsWith(".vh")) return Lang.VH;
    else return Lang.UNKNOWN;
}

export function find_one<T>(type: any, ctx: antlr4.RuleContext): T|undefined {
    if (ctx instanceof type) return ctx as T;
    if (!(ctx instanceof antlr4.ParserRuleContext) || !ctx.children) return undefined;

    for (let child of ctx.children) {
        if (!(child instanceof antlr4.RuleContext)) continue;
        let t = find_one<T>(type, child);
        if (t) return t;
    }
    return undefined;
}


export function find_all<T extends antlr4.RuleContext>(type: any, ctx: antlr4.RuleContext, elems?: T[]): T[] {
    if (!elems) elems = [];
    if (ctx instanceof type) elems.push(ctx as T);
    if (!(ctx instanceof antlr4.ParserRuleContext) || !ctx.children) return elems;

    for (let child of ctx.children) {
        if (!(child instanceof antlr4.RuleContext)) continue;
        find_all(type, child, elems);
    }
    return elems;
}

export function file_read(path: string): string {
    if (!fs.existsSync(path) || fs.statSync(path).isDirectory()) {
        if (debug) console.log(`${dtag} file ${path} not found`);
        return "";
    }
    try {
        let text = fs.readFileSync(path, "utf-8");
        return text;
    }
    catch (e) {
        console.error(`${dtag} failed to read file ${path}`, e);
        return "";
    }
}

export function file_write(path: string, data: string): void {
    path = path.replace(/\\/g, '/');
    let dir = fs_basedir(path);
    fs.mkdirSync(dir, {recursive: true});
    try {
        fs.writeFileSync(path, data);
    }
    catch (e) {
        console.error(`${dtag} failed to write file ${path}`, e);
    }
}

export function file_mtime(path: string): number {
    if (!fs.existsSync(path) || fs.statSync(path).isDirectory()) {
        if (debug) console.log(`${dtag} file ${path} not found`);
        return 0;
    }
    return fs.statSync(path).mtime.getTime();
}

export function fs_basedir(path: string): string {
    path = path.replace(/\\/g, '/');
    let i = path.lastIndexOf('/');
    if (i < 0) return '.';
    return path.substring(0, i);
}

export function fs_path(path: string, cwd: string): string {
    if (path.length >= 1 && path[0] == '/') return path;
    if (path.length >= 2 && path[1] == ':') return path;
    path = path.replace(/\\/g, '/');
    cwd = cwd.replace(/\\/g, '/');
    if (cwd.length == 0) cwd = '.';
    else if (!fs.statSync(cwd).isDirectory()) {
        cwd = fs_basedir(cwd);
        if (!fs.statSync(cwd).isDirectory()) cwd = '.';
    }
    if (cwd[cwd.length-1] == '/') cwd = cwd.substring(0, cwd.length-1);
    while (path.startsWith('../')) {
        path = path.substring(3);
        let i = cwd.lastIndexOf('/');
        if (i < 0) {
            cwd = '.';
            break;
        }
        cwd = cwd.substring(0, i);
    }
    return `${cwd}/${path}`;
}

export function workdir(): string|undefined {
    if (!vscode.workspace.workspaceFolders) return undefined;
    return vscode.workspace.workspaceFolders[0].uri.path.substring(1);
}

export function push_all<T>(dest: T[], src: T[]) {
    for (let s of src) dest.push(s);
}

export function pad(obj: any, len: number): string {
    let s = "" + obj;
    while (s.length < len) s += " ";
    return s;
}

export enum SymbolKind { VARIABLE, MACRO, FILE, FIELD };

export class SymbolResult {
    word: string;
    kind: SymbolKind;

    constructor(word: string, kind: SymbolKind) {
        this.word = word;
        this.kind = kind;
    }
}

export function get_symbol(doc: vscode.TextDocument, rng: vscode.Range): SymbolResult {
    let word = doc.getText(rng);
    let pos = rng.start.character;
    if (pos == 0) return new SymbolResult(word, SymbolKind.VARIABLE);
    let line = doc.lineAt(rng.start.line);
    let prefix = line.text.substring(0, pos);
    if (prefix.startsWith('`include')) {
        let start = line.text.lastIndexOf('"', pos);
        let end = line.text.indexOf('"', pos);
        word = line.text.substring(start+1, end);
        return new SymbolResult(word, SymbolKind.FILE);
    }
    else if (prefix.endsWith('`') || prefix.startsWith('`')) {
        return new SymbolResult(word, SymbolKind.MACRO);
    }
    else if (prefix.endsWith('.')) {
        return new SymbolResult(word, SymbolKind.FIELD);
    }
    else {
        return new SymbolResult(word, SymbolKind.VARIABLE);
    }
}

export function list(path: string): string[] {
    if (!fs.existsSync(path) || !fs.statSync(path).isDirectory()) {
        if (debug) console.log(`${dtag} file ${path} is not directory`);
        return [];
    }
    let childs = fs.readdirSync(path);
    let l: string[] = [];
    for (let child of childs) {
        l.push(child);
    }
    return l;
}

export function zero_fill(num: number, width: number): string {
    let s = num.toFixed();
    while (s.length < width) s = '0' + s;
    return s;
}