import * as vscode from "vscode";
import * as antlr4 from "../antlr4";
import * as util from "../util";
import { Source } from "./entity/Source";
import { Root } from "./entity/Root";
import { SourceLoader } from "./SourceLoader";
import { Macro } from "./entity/Macro";
import { PulErrorListener } from "./PulErrorListener";
import { BufferedTokenStream } from "../stream/BufferedTokenStream";
import { Module } from "./entity/Module";
import { Context } from "./entity/Context";
import { PulConfig } from "./PulConfig";

import VLexer from "../v/VLexer";
import VParser from "../v/VParser";
import { PulVPreParser } from "./PulVPreParser";
import { PulVListener } from "./PulVListener";
import { ModuleProvider } from "./ModuleProvider";

// systemverilog is not full supported, partial supported by verilog with some pactch
// import SVLexer from "../sv/SVLexer";
// import SVParser from "../sv/SVParser";
// import { PulSVListener } from "./PulSVListener";
// import { PulSVPreParser } from "./PulSVPreParser";

let debug = false;
let dtag = "[PulParser]";

export class PulParser implements SourceLoader, ModuleProvider {

    private static INST: PulParser;

    static inst(): PulParser {
        if (!this.INST) this.INST = new PulParser();
        return this.INST;
    }

    private cfg: PulConfig;
    private sources: {[key: string]: Source};
    private modules: {[key: string]: Module};
    private macros: Macro[];
    private status: vscode.StatusBarItem;
    private file_count: number;
    private file_done: number;
    private diags: vscode.DiagnosticCollection;
    private diag_map: {[key:string]: vscode.Diagnostic[]};

    constructor() {
        this.cfg = new PulConfig();
        if (!this.cfg.load()) this.cfg.store();
        this.sources = {};
        this.modules = {};
        this.macros = this.cfg.define.map(v => new Macro(v));
        this.status = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 10000);
        this.file_count = 0;
        this.file_done = 0;
        this.diags = vscode.languages.createDiagnosticCollection();
        this.diag_map = {};
    }

    get_module(name: string): Module|undefined {
        return this.modules[name];
    }

    load(path: string): Source|undefined {
        path = path.replace(/\\/g, '/');
        let mtime = util.file_mtime(path);
        if (!mtime) return undefined;
        let source = this.sources[path];
        let stime = (source ? source.mtime : -1);
        if (debug) console.log(`${dtag} root ${path} found ${!!source} modified ${mtime > stime}`);
        if (stime >= mtime) return source;
        let code = util.file_read(path);
        if (source) {
            this.unbind_source(source);
            source.reset(code, mtime);
        }
        else this.sources[path] = source = new Source(path, code, mtime);
        source.add_macros(this.macros);
        return source;
    }

    parse(path: string, force?: boolean): Root|undefined {
        let source = this.load(path);
        if (!source) return undefined;
        if (source.root && !force) return source.root;

        switch (util.get_path_language(path)) {
        case util.Lang.V:
        case util.Lang.SV:
            let start_ms = Date.now();
            let pre = new PulVPreParser(source, this, source.diags_lexer = []);
            source.valid = pre.parse();
            if (source.valid) source.root = this.do_parse_v(source, pre.get_lexer(), pre.get_tokens());
            let millis = Date.now() - start_ms;
            console.log(`${dtag} '${source.path}' pased in ${millis}ms`);
            this.check(source.path);
            break;
        default:
            if (debug) console.log(`${dtag} '${source.path}' is not verilog file`);
            break;
        }

        return source.root;
    }

    check(path: string) {
        let source = this.load(path);
        if (source?.root) {
            source.diags_linter = [];
            this.do_check(source.root, source);
            this.bind_source(source);
        }
    }

    private do_check(ctx: Context, source: Source): boolean {
        let no_error = true;
        for (let id of ctx.references) {
            let symbol = ctx.find_symbol(id.name, id.root_beg);
            let rng = id.root_rng;
            if (!symbol) {
                let code = id.name;
                if (id.port_name && id.port_modu) {
                    let modu = this.get_module(id.port_modu);
                    let port = modu?.get_port(id.port_name);
                    if (port) code += `,${port.width}`;
                }
                let diag = new vscode.Diagnostic(rng, `reference '${id.name}' not found`, vscode.DiagnosticSeverity.Error);
                diag.source = "pul-linter";
                diag.code = code;
                source.diags_linter.push(diag);
                no_error = false;
            }
            else if (!symbol.scope_contains(id.root_beg)) {
                let diag = new vscode.Diagnostic(rng, `reference '${id.name}' ahead of declaration`, vscode.DiagnosticSeverity.Warning);
                diag.source = "pul-linter";
                source.diags_linter.push(diag);
                no_error = false;
            }
        }
        for (let child of ctx.childs) {
            no_error &&= this.do_check(child, source);
        }
        return no_error;
    }

    private do_parse_v(source: Source, lexer: VLexer, tokens: antlr4.Token[]): Root|undefined {
        let toks = new BufferedTokenStream(lexer, tokens);
        // let toks = new ChannelTokenStream(lexer, 0, locater.get_tokens());
        let parser = new VParser(toks as antlr4.TokenStream);
        new PulErrorListener("pul-parser", source.diags_parser = [], parser);
        let ast = parser.parse();
        let listener = new PulVListener(source, this);
        antlr4.ParseTreeWalker.DEFAULT.walk(listener, ast);
        return listener.get_root();
    }

    // private do_parse_sv(source: Source, lexer: SVLexer, tokens: antlr4.Token[]): Root|undefined {
    //     let toks = new BufferedTokenStream(lexer, tokens);
    //     // let toks = new ChannelTokenStream(lexer, 0, locater.get_tokens());
    //     let parser = new SVParser(toks as antlr4.TokenStream);
    //     new PulErrorListener("pul-parser", source.diags_parser = [], parser);
    //     let ast = parser.parse();
    //     let listener = new PulSVListener(source);
    //     antlr4.ParseTreeWalker.DEFAULT.walk(listener, ast);
    //     return listener.get_root();
    // }

    async parse_all(): Promise<void> {
        let root_path = util.workdir();
        if (!root_path) return undefined;
        let files = await vscode.workspace.findFiles(`{${this.cfg.source.join(",")}}`, `{${this.cfg.exclude.join(",")}}`);
        if (files.length == 0) return undefined;

        this.sources = {};
        this.modules = {};
        this.diag_map = {};
        this.diags.clear();
        this.file_count = files.length;
        this.file_done = 0;
        let parse_promise = new Promise<void>(resolve => resolve());
        for (let file of files) {
            let path = file.path.substring(1);
            parse_promise = parse_promise.then(() => this.prom_parse(path));
        }
        return parse_promise.then(() => {
            this.status.hide();
            this.update_diagnostics();
        });
    }

    parse_for_include(inc_path: string) {
        let inc_source = this.load(inc_path);
        if (!inc_source || inc_source.valid) return;

        for (let [path, source] of Object.entries(this.sources)) {
            if (source.has_include(inc_path)) this.parse(path, true);
        }
        this.update_diagnostics();
    }

    private prom_parse(path: string): Promise<void> {
        return new Promise(resolve => {
            this.parse(path);
            ++this.file_done;
            let percent = Math.round(this.file_done * 100 / this.file_count);
            this.status.text = `${percent}% of ${this.file_done}/${this.file_count} files indexed`;
            this.status.show();
            setTimeout(() => resolve(), 1);
        });
    }

    private unbind_source(source: Source): void {
        if (source.root) {
            for (let [name, modu] of Object.entries(this.modules)) {
                if (modu.parent == source.root) delete this.modules[name];
            }
        }
        for (let key of Object.keys(this.diag_map)) {
            if (key == source.path || key.startsWith(`${source.path}|`) || key.endsWith(`|${source.path}`)) {
                delete this.diag_map[key];
            }
        }
    }

    private bind_source(source: Source): void {
        if (source.root) {
            for (let [name, modu] of Object.entries(source.root.modules)) {
                this.modules[name] = modu;
            }
        }
        this.diag_map[source.path] = [];
        for (let inc of source.includes) {
            let path = `${source.path}|${inc.source.path}`;
            this.diag_map[path] = [];
        }
        for (let diag of source.diags_lexer) this.diag_map[source.path].push(diag);
        for (let diag of source.diags_parser) {
            let path = source.path;
            if (diag.code !== undefined ) {
                let inc_source = source.get_source(diag.code as number);
                if (inc_source != source) path =`${source.path}|${inc_source.path}`;
                // diag.source = `pul-parser(${source.path})`;
                diag.code = undefined;
            }
            this.diag_map[path].push(diag);
        }
        for (let diag of source.diags_linter) this.diag_map[source.path].push(diag);
    }

    update_diagnostics() {
        this.diags.clear();
        let inc_diags_map: {[path:string]: {[key:string]: vscode.Diagnostic}} = {};
        for (let [key, diags] of Object.entries(this.diag_map)) {
            let i = key.indexOf('|');
            if (i < 0) this.diags.set(vscode.Uri.file(key), diags);
            else {
                let inc_path = key.substring(i + 1);
                let inc_diags = inc_diags_map[inc_path];
                if (!inc_diags) inc_diags_map[inc_path] = inc_diags = {};
                for (let diag of diags) {
                    let key = `${diag.range.start.line}:${diag.range.start.character}:${diag.message}`;
                    inc_diags[key] = diag;
                }
            }
        }
        for (let [path, diags] of Object.entries(inc_diags_map)) {
            this.diags.set(vscode.Uri.file(path), Object.values(diags));
        }
    }

}
