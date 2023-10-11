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

        let LINT_module_not_found = (PulConfig.inst().lint["module-not-found"] !== false);
        let LINT_illegal_port = (PulConfig.inst().lint["illegal-port"] !== false);
        let LINT_width_missmatch = (PulConfig.inst().lint["width-missmatch"] !== false);
        let LINT_missing_port = (PulConfig.inst().lint["missing-port"] !== false);
        let LINT_reference_not_found = (PulConfig.inst().lint["reference-not-found"] !== false);
        let LINT_reference_ahead_declaration = (PulConfig.inst().lint["reference-ahead-declaration"] !== false);

        if (ctx instanceof InstanceGroup) {
            let modu = ctx as InstanceGroup;
            if (LINT_module_not_found) this.check_module_not_found(modu, source);
            if (LINT_illegal_port) this.check_illegal_port(modu, source);
            if (LINT_width_missmatch) this.check_width_missmatch(modu, source);
            if (LINT_missing_port) this.check_missing_port(modu, source);
        }

        if (LINT_reference_not_found) this.check_reference_not_found(ctx, source);
        if (LINT_reference_ahead_declaration) this.check_reference_ahead_declaration(ctx, source);

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

    private check_module_not_found(modu: InstanceGroup, source: Source): void {
        let module = PulParser.inst().get_module(modu.name);
        if (!module) {
            let diag = new vscode.Diagnostic(modu.root_name_rng || modu.root_rng, `module '${modu.name}' not found`, vscode.DiagnosticSeverity.Warning);
            diag.source = "pul-linter[module-not-found]";
            source.diags_linter.push(diag);
        }
    }

    private check_illegal_port(modu: InstanceGroup, source: Source): void {
        let module = PulParser.inst().get_module(modu.name);
        if (!module) return;
        for (let child of modu.childs) {
            let inst = child as Instance;
            for (let conn of inst.connectors) {
                let port = module.get_port(conn.name);
                if (!port) {
                    let diag = new vscode.Diagnostic(conn.root_rng, `illegal port '${modu.name}.${conn.name}'`, vscode.DiagnosticSeverity.Warning);
                    diag.source = "pul-linter[illegal-port]";
                    source.diags_linter.push(diag);
                }
            }
        }
    }

    private check_width_missmatch(modu: InstanceGroup, source: Source): void {
        let module = PulParser.inst().get_module(modu.name);
        if (!module) return;
        for (let child of modu.childs) {
            let inst = child as Instance;
            for (let conn of inst.connectors) {
                let port = module.get_port(conn.name);
                if (!port) continue;
                if (conn.width_value && port.width_symbol) {
                    if (conn.width_value < port.width_symbol) {
                        let diag = new vscode.Diagnostic(conn.root_rng, `value width (${conn.width_value}) < port '${modu.name}.${conn.name}' (${port.width_symbol})`, vscode.DiagnosticSeverity.Warning);
                        diag.source = "pul-linter[width-missmatch]";
                        source.diags_linter.push(diag);
                   }
                }
            }
        }
    }

    private check_missing_port(modu: InstanceGroup, source: Source): void {
        let module = PulParser.inst().get_module(modu.name);
        if (!module) return;
        for (let child of modu.childs) {
            let inst = child as Instance;
            for (let port of module.ports) {
                let conn = inst.get_connector(port.name);
                if (!conn) {
                    let diag = new vscode.Diagnostic(inst.root_name_rng || inst.root_rng, `missing port '${modu.name}.${port.name}'`, vscode.DiagnosticSeverity.Warning);
                    diag.source = "pul-linter[missing-port]";
                    source.diags_linter.push(diag);
                }
            }
        }
    }

    private check_reference_not_found(ctx: Context, source: Source): void {
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
                let diag = new vscode.Diagnostic(rng, `reference '${ref.name}' not found`, vscode.DiagnosticSeverity.Warning);
                diag.source = "pul-linter[reference-not-found]";
                diag.code = code;
                source.diags_linter.push(diag);
            }
        }
    }

    private check_reference_ahead_declaration(ctx: Context, source: Source): void {
        for (let ref of ctx.references) {
            if (!(ref instanceof Id)) continue;
            let symbol = ctx.find_symbol(ref.name, ref.root_beg);
            let rng = ref.root_rng;
            if (!symbol) continue;
            if (!symbol.scope_contains(ref.root_beg)) {
                let diag = new vscode.Diagnostic(rng, `reference '${ref.name}' ahead of declaration`, vscode.DiagnosticSeverity.Warning);
                diag.source = "pul-linter[reference-ahead-declaration]";
                source.diags_linter.push(diag);
            }
        }
    }

}