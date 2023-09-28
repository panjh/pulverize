import * as vscode from "vscode";
import { Source } from "./entity/Source";
import { Context } from "./entity/Context";
import { InstanceGroup } from "./entity/InstanceGroup";
import { PulParser } from "./PulParser";
import { Instance } from "./entity/Instance";
import { PulConfig } from "./PulConfig";
import { Id } from "./entity/Id";

let debug = false;
let dtag = "[PulLinter]";

export class PulLinter {

    private static INST: PulLinter;

    static inst(): PulLinter {
        if (!this.INST) this.INST = new PulLinter();
        return this.INST;
    }

    check(source?: Source|Context, ctx?: Context): void {
        if (!source) return;
        if (source instanceof Context) {
            ctx = source;
            source = source.source as Source;
        }
        if (this.is_exclude(source.path)) return;
        let is_root = false;
        if (!ctx || ctx == source.root) {
            is_root = true;
            ctx = source.root;
        }
        if (!ctx) return;

        if (ctx instanceof InstanceGroup) {
            let modu = ctx as InstanceGroup;
            let module = PulParser.inst().get_module(modu.name);
            if (!module) {
                if (PulConfig.inst().lint["module-not-found"] !== false) {
                    let diag = new vscode.Diagnostic(modu.root_rng, `module '${modu.name}' not found`, vscode.DiagnosticSeverity.Warning);
                    diag.source = "pul-linter[module-not-found]";
                    source.diags_linter.push(diag);
                }
            }
            else {
                for (let child of modu.childs) {
                    let inst = child as Instance;
                    for (let conn of inst.connectors) {
                        let port = module.get_port(conn.name);
                        if (!port) {
                            if (PulConfig.inst().lint["illegal-port"] !== false) {
                                let diag = new vscode.Diagnostic(conn.root_rng, `illegal port '${modu.name}.${conn.name}'`, vscode.DiagnosticSeverity.Warning);
                                diag.source = "pul-linter[illegal-port]";
                                source.diags_linter.push(diag);
                            }
                        }
                        else if (conn.width_value && port.width_symbol) {
                            if (conn.width_value < port.width_symbol) {
                                if (PulConfig.inst().lint["width-missmatch"] !== false) {
                                    let diag = new vscode.Diagnostic(conn.root_rng, `value width (${conn.width_value}) < port '${modu.name}.${conn.name}' (${port.width_symbol})`, vscode.DiagnosticSeverity.Warning);
                                    diag.source = "pul-linter[width-missmatch]";
                                    source.diags_linter.push(diag);
                                }
                            }
                        }
                    }
                }
            }
        }

        for (let ref of ctx.references) {
            if (!(ref instanceof Id)) continue;
            let symbol = ctx.find_symbol(ref.name, ref.root_beg);
            let rng = ref.root_rng;
            if (!symbol) {
                let code = ref.name;
                if (ref instanceof Id && ref.port_name && ref.port_modu) {
                    let modu = PulParser.inst().get_module(ref.port_modu);
                    let port = modu?.get_port(ref.port_name);
                    if (port) code += `,${port.width}`;
                }
                if (PulConfig.inst().lint["reference-not-found"] !== false) {
                    let diag = new vscode.Diagnostic(rng, `reference '${ref.name}' not found`, vscode.DiagnosticSeverity.Warning);
                    diag.source = "pul-linter[reference-not-found]";
                    diag.code = code;
                    source.diags_linter.push(diag);
                }
            }
            else if (!symbol.scope_contains(ref.root_beg)) {
                if (PulConfig.inst().lint["reference-ahead-declaration"] !== false) {
                    let diag = new vscode.Diagnostic(rng, `reference '${ref.name}' ahead of declaration`, vscode.DiagnosticSeverity.Warning);
                    diag.source = "pul-linter[reference-ahead-declaration]";
                    source.diags_linter.push(diag);
                }
            }
        }

        for (let child of ctx.childs) {
            this.check(source, child);
        }

        if (is_root) PulParser.inst().bind_source(source);
    }

    private is_exclude(path: string): boolean {
        let ws = vscode.workspace.getWorkspaceFolder(vscode.Uri.file(path));
        if (ws) path = path.substring(ws.uri.path.length);
        for (let pat of PulConfig.inst().lint_exclude) {
            pat = pat.replace(/\?|\*+/g, s => {
                switch (s) {
                case "?": return "[^\\/]";
                // case "*": return "[^\\/]*";
                default: return ".*";
                }
            });
            let re = new RegExp(pat);
            if (re.test(path)) return true;
        }
        return false;
    }

}