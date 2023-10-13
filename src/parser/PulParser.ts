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
import { Symbol } from "./entity/Symbol";
import { Entity } from "./entity/Entity";
import { PulConfig } from "./PulConfig";

import VLexer from "../v/VLexer";
import VParser from "../v/VParser";
import { PulVPreParser } from "./PulVPreParser";
import { PulVListener } from "./PulVListener";
import { ModuleProvider } from "./ModuleProvider";
import { SemaTokens } from "./SemaTokens";
import { Id } from "./entity/Id";
import { PulLinter } from "./PulLinter";
import { Block } from "./entity/Block";
import { InstanceGroup } from "./entity/InstanceGroup";
import { Instance } from "./entity/Instance";

let debug = false;
let dtag = "[PulParser]";

export class PulParser implements SourceLoader, ModuleProvider {

    private static INST: PulParser;

    static inst(): PulParser {
        if (!this.INST) this.INST = new PulParser();
        return this.INST;
    }

    private sources: {[key: string]: Source};
    private modules: {[key: string]: Module};
    private macros: Macro[];
    private status: vscode.StatusBarItem;
    private file_count: number;
    private file_done: number;
    private diags: vscode.DiagnosticCollection;
    private diag_map: {[key:string]: vscode.Diagnostic[]};

    constructor() {
        this.sources = {};
        this.modules = {};
        this.macros = PulConfig.inst().define.map(v => new Macro(v));
        this.status = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 10000);
        this.file_count = 0;
        this.file_done = 0;
        this.diags = vscode.languages.createDiagnosticCollection();
        this.diag_map = {};
    }

    get_module(name: string): Module|undefined {
        return this.modules[name];
    }

    load(path: string, force?: boolean, code?: string): Source|undefined {
        path = path.replace(/\\/g, '/');
        let source = this.sources[path];
        let mtime = Date.now();
        if (code === undefined) {
            mtime = util.file_mtime(path);
            if (mtime < 0) return undefined;
            let stime = (source ? source.mtime : -1);
            let modified = (mtime > stime);
            if (debug) console.log(`${dtag} load ${path} found ${!!source} modified ${modified}`);
            if (!modified) {
                if (source && force) source.reset_diags();
                return source;
            }
            code = util.file_read(path);
        }
        else if (source && source.code == code) {
            return source;
        }
        else {
            if (debug) console.log(`${dtag} load  ${path} found ${!!source} modified dirty`);
        }

        if (source) {
            this.unbind_source(source);
            source.reset(code, mtime);
            if (debug) console.log(`${dtag} reset '${path}' diag parser ${source.diags_parser.length}`);
        }
        else {
            source = new Source(path, code, mtime);
            this.sources[path] = source;
        }
        source.add_macros(this.macros);
        return source;
    }

    parse(path: string, force?: boolean, code?: string): Root|undefined {
        let source = this.load(path, force, code);
        if (!source) return undefined;
        if (source.root && !force) return source.root;

        let start_ms = Date.now();
        let pre = new PulVPreParser(source, this, source.diags_lexer);
        source.valid = pre.parse();
        if (source.valid) {
            source.root = this.do_parse_v(source, pre.get_lexer(), pre.get_tokens());
            source.sema_tokens = pre.sema_tokens;
            this.semantic(source);
        }
        let millis = Date.now() - start_ms;
        console.log(`${dtag} '${source.path}' parsed in ${millis}ms`);

        if (!path.endsWith(".vh")) this.bind_source(source);
        return source.root;
    }

    private semantic(source?: Source, ctx?: Context, ) {
        if (!source) return;
        if (!ctx || ctx == source.root) {
            ctx = source.root;
            source.sema_tokens = source.sema_tokens.filter(st => st.kind == 'ignore');
        }
        if (!ctx) return;

        for (let symbols of Object.values(ctx.symbols)) {
            for (let symbol of symbols) {
                if (!(symbol instanceof Symbol) && !(symbol instanceof Block)) continue;
                if (!symbol.origin) continue;
                let rng = symbol.name_rng;
                if (!rng) continue;
                let name = symbol.name;
                switch (symbol.kind) {
                case "tri":
                case "wire": source.sema_tokens.push(new SemaTokens(name, rng, "wire")); break;
                case "reg": source.sema_tokens.push(new SemaTokens(name, rng, "reg")); break;
                case "logic": source.sema_tokens.push(new SemaTokens(name, rng, "logic")); break;
                case "inst": source.sema_tokens.push(new SemaTokens(name, rng, "inst")); break;
                case "block":
                case "param": source.sema_tokens.push(new SemaTokens(name, rng, "param")); break;
                default: source.sema_tokens.push(new SemaTokens(name, rng, "sim")); break;
                }
            }
        }

        for (let ref of ctx.references) {
            if (!(ref instanceof Id)) continue;
            let parent = ctx;
            for (let i = 0; i < ref.hiers.length; ++i) {
                let id = ref.hiers[i];
                let child = parent.find_symbol(id.name, (i == 0 ? id.root_beg : undefined));
                let name = id.name;
                let rng = id.root_rng;
                if (id.origin) {
                    switch (child?.kind) {
                    case "tri":
                    case "wire": source.sema_tokens.push(new SemaTokens(name, rng, "wire")); break;
                    case "reg": source.sema_tokens.push(new SemaTokens(name, rng, "reg")); break;
                    case "logic": source.sema_tokens.push(new SemaTokens(name, rng, "logic")); break;
                    case "inst": source.sema_tokens.push(new SemaTokens(name, rng, "inst")); break;
                    case "block":
                    case "param": source.sema_tokens.push(new SemaTokens(name, rng, "param")); break;
                    default: source.sema_tokens.push(new SemaTokens(name, rng, "sim")); break;
                    }
                }
                if (!(child && child instanceof Context)) break;
                parent = child;
                if (child instanceof Instance) {
                    let module = this.get_module(child.modu_name);
                    if (module) parent = module;
                }
            }
        }
        for (let child of ctx.childs) {
            this.semantic(source, child);
        }
    }

    private do_parse_v(source: Source, lexer: VLexer, tokens: antlr4.Token[]): Root|undefined {
        let toks = new BufferedTokenStream(lexer, tokens);
        // let toks = new ChannelTokenStream(lexer, 0, locater.get_tokens());
        let parser = new VParser(toks as antlr4.TokenStream);
        new PulErrorListener(source.diags_parser, parser);
        let ast = parser.parse();
        let listener = new PulVListener(source, this);
        antlr4.ParseTreeWalker.DEFAULT.walk(listener, ast);
        return listener.get_root();
    }

    async parse_check_all(): Promise<void> {
        let root_path = util.workdir();
        if (!root_path) return undefined;
        let files = await vscode.workspace.findFiles(`{${PulConfig.inst().source.join(",")}}`, `{${PulConfig.inst().exclude.join(",")}}`);
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
            return this.prom_check(files);
        }).then(() => {
            this.status.hide();
            this.update_diagnostics();
        });
    }

    parse_check_for_include(inc_path: string) {
        let inc_source = this.load(inc_path);
        if (!inc_source || inc_source.valid) return;
        if (debug) console.log(`${dtag} parse check for include '${inc_path}`);
        for (let [path, source] of Object.entries(this.sources)) {
            if (source.has_include(inc_path)) {
                let root = this.parse(path, true);
                PulLinter.inst().check(root);
            }
        }
        this.update_diagnostics();
    }

    private prom_parse(path: string): Promise<void> {
        return new Promise(resolve => {
            this.parse(path, true);
            ++this.file_done;
            let percent = Math.round(this.file_done * 100 / this.file_count);
            this.status.text = `${percent}% of ${this.file_done}/${this.file_count} files indexed`;
            this.status.show();
            setTimeout(() => resolve(), 1);
        });
    }

    private prom_check(files: vscode.Uri[]): Promise<void> {
        return new Promise(resolve => {
            let start_ms = Date.now();
            for (let file of files) {
                let path = file.path.substring(1);
                let source = this.load(path);
                if (!source?.root) continue;
                PulLinter.inst().check(source);
            }
            let millis = Date.now() - start_ms;
            console.log(`${dtag} all sources checked in ${millis}ms`);
            setTimeout(() => resolve(), 1);
        });
    }


    unbind_source(source: Source): void {
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

    bind_source(source: Source): void {
        if (!source.valid) return;
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
        for (let diag of source.diags_lexer) {
            this.diag_map[source.path].push(diag);
        }
        for (let diag of source.diags_parser) {
            let path = source.path;
            if (diag.code !== undefined ) {
                let inc_source = source.get_source(diag.code as number);
                if (inc_source != source) path =`${source.path}|${inc_source.path}`;
            }
            this.diag_map[path].push(diag);
        }
        for (let diag of source.diags_linter) {
            this.diag_map[source.path].push(diag);
        }
    }

    update_diagnostics() {
        this.diags.clear();
        let inc_diags_map: {[path:string]: {[key:string]: vscode.Diagnostic}} = {};
        for (let [key, diags] of Object.entries(this.diag_map)) {
            let i = key.indexOf('|');
            if (i < 0) {
                this.diags.set(vscode.Uri.file(key), diags);
            }
            else {
                let inc_path = key.substring(i + 1);
                let inc_diags = inc_diags_map[inc_path];
                if (!inc_diags) inc_diags_map[inc_path] = inc_diags = {};
                for (let diag of diags) {
                    let tip = `${diag.range.start.line}:${diag.range.start.character}:${diag.message}`;
                    inc_diags[tip] = diag;
                }
            }
        }
        for (let [path, diags] of Object.entries(inc_diags_map)) {
            this.diags.set(vscode.Uri.file(path), Object.values(diags));
        }
    }

    find_references(entity: Entity): Entity[] {
        let refs: Symbol[] = [];
        for (let module of Object.values(this.modules)) {
            this.find_references_in(module, entity, refs);
        }
        return refs;
    }

    private find_references_in(ctx: Context, entity: Entity, refs: Entity[]): void {
        for (let ref of ctx.references) {
            if (ref instanceof InstanceGroup) {
                if ((entity instanceof Module || entity instanceof InstanceGroup) && entity.name == ref.name) refs.push(ref);
                continue;
            }
            let symbol = ctx.find_symbol(ref.name, ref.root_beg);
            if (symbol === entity) refs.push(ref);
        }
        for (let child of ctx.childs) {
            this.find_references_in(child, entity, refs);
        }
    }

}
