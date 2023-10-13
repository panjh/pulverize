import * as v from "../v/VParser";
import * as antlr4 from "../antlr4";
import * as util from "../util";
import * as calc from "./calc";
import VParserListener from "../v/VParserListener";
import { Connector } from "./entity/Connector";
import { Context } from "./entity/Context";
import { Func } from "./entity/Func";
import { Instance } from "./entity/Instance";
import { InstanceGroup } from "./entity/InstanceGroup";
import { Module } from "./entity/Module";
import { Parameter } from "./entity/Parameter";
import { Port } from "./entity/Port";
import { Task } from "./entity/Task";
import { Logic } from "./entity/Logic";
import { Root } from "./entity/Root";
import { Id } from "./entity/Id";
import { Variable } from "./entity/Variable";
import { Block } from "./entity/Block";
import { Procedure } from "./entity/Procedure";
import { Source } from "./entity/Source";
import { ModuleProvider } from "./ModuleProvider";
import { PulVPreParser } from "./PulVPreParser";

type PortContext = v.Input_declarationContext|v.Inout_declarationContext|v.Output_declarationContext|v.Tf_input_declarationContext|v.Tf_inout_declarationContext|v.Tf_output_declarationContext;
type ParamContext = v.Parameter_declarationContext|v.Local_parameter_declarationContext;

let debug = false;
let dtag = "[PulVListener]";

export class PulVListener extends VParserListener {

    public static INST?: PulVPreParser;

    private source: Source;
    private modu_provider: ModuleProvider;
    private root?: Root;
    private curr?: Context;
    private curr_port_name?: string;
    private curr_port_modu?: string;

    constructor(source: Source, modu_provider: ModuleProvider) {
        super();
        this.source = source;
        this.modu_provider = modu_provider;
    }

    get_root(): Root|undefined {
        return this.root;
    }

    private push_context(ctx: Context): void {
        if (this.curr) this.curr.childs.push(ctx);
        this.curr = ctx;
        if (debug) console.log(`${dtag}     context push '${this.curr?.parent?.name} / ${this.curr?.name}'`);
    }

    private pop_context(): void {
        if (this.curr && this.curr.parent) this.curr = this.curr.parent as Context;
        if (debug) console.log(`${dtag}     context pop '${this.curr?.name}'`);
    }

    private add_port(ctx: PortContext, dir: string): void {
        let kind: string = "wire";
        let cobj = ctx as any;
        if (cobj.net_type && cobj.net_type()) kind = cobj.net_type().getText();
        else if (cobj.reg_type && cobj.reg_type()) kind = cobj.reg_type().getText();
        else if (cobj.output_variable_type && cobj.output_variable_type()) kind = cobj.output_variable_type().getText();
        else if (cobj.task_port_type && cobj.task_port_type()) kind = cobj.task_port_type().getText();
        let width = (ctx.range_()?.getText() || "");
        let width_symbol =  this.width_range(ctx.range_());
        let ports = util.find_all(v.Port_identifierContext, ctx);
        if (!(this.curr instanceof Procedure)) {
            console.error(`${dtag} current context '${this.curr?.name}' is not a procedure`);
            return;
        }
        let proc = this.curr as Procedure;
        for (let po of ports) {
            let name = po;
            let port = new Port(name, kind, width, dir, ctx, this.source.get_source(ctx.start.tokenIndex), this.curr!);
            port.width_symbol = width_symbol;
            this.curr!.add_symbol(port);
            proc.ports.push(port);
        }
    }

    private add_param(ctx: ParamContext): void {
        let params = util.find_all<v.Param_assignmentContext>(v.Param_assignmentContext, ctx);
        for (let param of params) {
            let name = param.parameter_identifier();
            let value = param.constant_mintypmax_expression().getText();
            let parameter = new Parameter(name, value, ctx, this.source.get_source(ctx.start.tokenIndex), this.curr!);
            this.curr!.add_symbol(parameter);
        }
    }

    private add_net(ctx: v.Net_declarationContext): void {
        let kind = (ctx.net_type()?.getText() || "trireg");
        let width = (ctx.range_()?.getText() || "");
        let width_symbol = this.width_range(ctx.range_());
        if (ctx.list_of_net_decl_assignments()) {
            for (let net of ctx.list_of_net_decl_assignments().net_decl_assignment_list()) {
                if (!net.net_identifier() || !net.expression()) continue;
                let name = net.net_identifier();
                let value = net.expression().getText();
                let logic = new Logic(name, kind, width, ctx, this.source.get_source(ctx.start.tokenIndex), this.curr!);
                logic.value = value;
                logic.width_symbol = width_symbol;
                logic.width_value = calc.width(net.expression(), this.curr!);
                this.curr!.add_symbol(logic);
                if (debug) console.log(`${dtag}   add_net(${name}=${value}) to ctx '${this.curr!.name}'`);
            }
        }
        if (ctx.list_of_net_identifiers()) {
            for (let net of ctx.list_of_net_identifiers().net_identifier_list()) {
                let name = net;
                let logic = new Logic(name, kind, width, ctx, this.source.get_source(ctx.start.tokenIndex), this.curr!);
                logic.width_symbol = width_symbol;
                this.curr!.add_symbol(logic);
                if (debug) console.log(`${dtag}   add_net(${name}) to ctx '${this.curr!.name}'`);
            }
        }
    }

    private add_reg(ctx: v.Reg_declarationContext): void {
        let kind = ctx.reg_type().getText();
        let width = (ctx.range_()?.getText() || "");
        let width_symbol = this.width_range(ctx.range_());
        let regs = util.find_all(v.Variable_identifierContext, ctx);
        for (let reg of regs) {
            let name = reg;
            let logic = new Logic(name, kind, width, ctx, this.source.get_source(ctx.start.tokenIndex), this.curr!);
            logic.width_symbol = width_symbol;
            this.curr!.add_symbol(logic);
            if (debug) console.log(`${dtag}   add_reg(${name}) to ctx '${this.curr!.name}'`);
        }
    }

    private add_variable(kind: string, ctx: antlr4.ParserRuleContext, type: any): void {
        let vars = util.find_all(type, ctx);
        for (let va of vars) {
            let name = va;
            let variable = new Variable(name, kind, ctx, this.source.get_source(ctx.start.tokenIndex), this.curr!);
            this.curr!.add_symbol(variable);
            if (debug) console.log(`${dtag}   add_variable(${name}) to ctx '${this.curr!.name}'`);
        }
    }

    private add_modu_ref(modu: InstanceGroup) : void {
        this.curr!.references.push(modu);
        if (debug) console.log(`${dtag}   add_modu_ref(${modu.name}) to ctx '${this.curr!.name}'`);
    }

    private add_id_ref(ctx: v.IdentifierContext|v.Hierarchical_identifierContext|undefined): Id|undefined {
        if (!ctx) return undefined;
        let name = ctx;
        let id = new Id(name, ctx, this.source.get_source(ctx.start.tokenIndex), this.curr!);
        id.port_modu = this.curr_port_modu;
        id.port_name = this.curr_port_name;
        this.curr!.references.push(id);
        if (debug) console.log(`${dtag}   add_id_ref(${name}) to ctx '${this.curr!.name}'`);
        return id;
    }

    /*
     * source file
     */

    enterSource_text(ctx: v.Source_textContext): void {
        if (ctx.exception) return;
        this.root = new Root(ctx, this.source.get_source(ctx.start.tokenIndex), this.modu_provider);
        this.curr = this.root;
        if (debug) console.log(`${dtag} enterSource_text()`);
    }

    /*
     * module declaration
     */
    enterModule_declaration(ctx: v.Module_declarationContext): void {
        if (ctx.exception) return;
        if (!ctx.module_identifier()) return;
        let name = ctx.module_identifier();
        let module = new Module(name, ctx, this.source.get_source(ctx.start.tokenIndex), this.curr!);
        module.add_symbol(module);
        this.push_context(module);
        this.root!.modules[module.name] = module;
        if (debug) console.log(`${dtag} enterModule_declaration(${name})`);
    }

    exitModule_declaration(ctx: v.Module_declarationContext): void {
        if (ctx.exception) return;
        this.pop_context();
        if (debug) console.log(`${dtag} exitModule_declaration()`);
    }

    enterInput_declaration(ctx: v.Input_declarationContext): void {
        if (ctx.exception) return;
        this.add_port(ctx, 'input');
        if (debug) console.log(`${dtag} enterInput_declaration()`);
    }

    enterInout_declaration(ctx: v.Inout_declarationContext): void {
        if (ctx.exception) return;
        this.add_port(ctx, 'inout');
        if (debug) console.log(`${dtag} enterInout_declaration()`);
    }

    enterOutput_declaration(ctx: v.Output_declarationContext): void {
        if (ctx.exception) return;
        this.add_port(ctx, 'output');
        if (debug) console.log(`${dtag} enterOutput_declaration()`);
    }

    /*
     * model instantiation
     */
    enterModule_instantiation(ctx: v.Module_instantiationContext): void {
        if (ctx.exception) return;
        let name = ctx.module_identifier();
        let group = new InstanceGroup(name, ctx, this.source.get_source(ctx.start.tokenIndex), this.curr!);
        this.add_modu_ref(group);
        this.push_context(group);
        if (debug) console.log(`${dtag} enterModule_instantiation(${name})`);
    }

    exitModule_instantiation(ctx: v.Module_instantiationContext): void {
        if (ctx.exception) return;
        this.pop_context();
        if (debug) console.log(`${dtag} exitModule_instantiation()`);
    }

    enterModule_instance(ctx: v.Module_instanceContext): void {
        if (ctx.exception) return;
        let name = ctx.name_of_module_instance();
        let instance = new Instance(name, ctx, this.source.get_source(ctx.start.tokenIndex), this.curr!);
        this.curr!.parent?.add_symbol(instance);
        this.root!.instances[instance.name] = instance;
        this.push_context(instance);
        if (debug) console.log(`${dtag} enterModule_instance(${name})`);
    }

    exitModule_instance(ctx: v.Module_instanceContext): void {
        if (ctx.exception) return;
        this.pop_context();
        if (debug) console.log(`${dtag} exitModule_instance()`);
    }

    enterNamed_port_connection(ctx: v.Named_port_connectionContext): void {
        if (ctx.exception) return;
        if (!ctx.port_identifier()) return;
        if (!(this.curr! instanceof Instance)) return;
        let name = ctx.port_identifier();
        let inst = this.curr! as Instance;
        let modu = inst.parent as InstanceGroup;
        let connector = new Connector(name, modu.name, ctx, this.source.get_source(ctx.start.tokenIndex));
        connector.width_value = calc.width(ctx.expression(), this.curr!);
        inst.connectors.push(connector);
        this.curr_port_modu = modu.name;
        this.curr_port_name = connector.name;
        if (debug) console.log(`${dtag} enterNamed_port_connection(${name})`);
    }

    exitNamed_port_connection(ctx: v.Named_port_connectionContext): void {
        if (ctx.exception) return;
        this.curr_port_name = undefined;
        this.curr_port_modu = undefined;
    }

    /*
     * function and task declaration
     */
    private width_range(rng?: v.Range_Context): number|undefined {
        if (!rng) return 1;
        try {
            return eval(rng.msb_constant_expression().getText()) - eval(rng.lsb_constant_expression().getText()) + 1;
        }
        catch (e) {}
        return undefined;
    }

    private width_func(fn: v.Function_range_or_typeContext): number|undefined {
        if (fn.range_()) return this.width_range(fn.range_());
        else if (fn.SHORTINT()) return 16;
        else if (fn.LONGINT()) return 64;
        else return 32;
    }

    enterFunction_declaration(ctx: v.Function_declarationContext): void {
        if (ctx.exception || ctx.EXPORT()) return;
        let name = ctx.function_identifier();
        let func = new Func(name, ctx, this.source.get_source(ctx.start.tokenIndex), this.curr!);
        func.width_symbol = this.width_func(ctx.function_range_or_type());
        this.curr!.add_symbol(func);
        this.push_context(func);
        if (debug) console.log(`${dtag} enterFunction_declaration(${name})`);
    }

    exitFunction_declaration(ctx: v.Function_declarationContext): void {
        if (ctx.exception || ctx.EXPORT()) return;
        this.pop_context();
        if (debug) console.log(`${dtag} exitFunction_declaration()`);
    }

    enterTask_declaration(ctx: v.Task_declarationContext): void {
        if (ctx.exception || ctx.EXPORT()) return;
        let name = ctx.task_identifier();
        let task = new Task(name, ctx, this.source.get_source(ctx.start.tokenIndex), this.curr!);
        this.curr!.add_symbol(task);
        this.push_context(task);
        if (debug) console.log(`${dtag} enterTask_declaration(${name})`);
    }

    exitTask_declaration(ctx: v.Task_declarationContext): void {
        if (ctx.exception || ctx.EXPORT()) return;
        this.pop_context();
        if (debug) console.log(`${dtag} exitTask_declaration()`);
    }

    enterTf_input_declaration(ctx: v.Tf_input_declarationContext): void {
        if (ctx.exception) return;
        this.add_port(ctx, "input");
    }

    enterTf_inout_declaration(ctx: v.Tf_inout_declarationContext): void {
        if (ctx.exception) return;
        this.add_port(ctx, "inout");
    }

    enterTf_output_declaration(ctx: v.Tf_output_declarationContext): void {
        if (ctx.exception) return;
        this.add_port(ctx, "output");
    }

    /*
     * parameter and localparameter
     */
    enterParameter_declaration(ctx: v.Parameter_declarationContext): void {
        if (ctx.exception) return;
        if (debug) console.log(`${dtag} enterParameter_declaration()`);
        this.add_param(ctx);
    }

    enterLocal_parameter_declaration(ctx: v.Local_parameter_declarationContext): void {
        if (ctx.exception) return;
        if (debug) console.log(`${dtag} enterLocal_parameter_declaration()`);
        this.add_param(ctx);
    }

    /*
     * net and reg
     */
    enterNet_declaration(ctx: v.Net_declarationContext): void {
        if (ctx.exception) return;
        this.add_net(ctx);
        if (debug) console.log(`${dtag} enterNet_declaration()`);
    }

    enterReg_declaration(ctx: v.Reg_declarationContext): void {
        if (ctx.exception) return;
        this.add_reg(ctx);
        if (debug) console.log(`${dtag} enterReg_declaration()`);
    }

    /*
     * variables
     */
    enterGenvar_declaration(ctx: v.Genvar_declarationContext): void {
        if (ctx.exception) return;
        this.add_variable('genvar', ctx, v.Genvar_identifierContext);
        if (debug) console.log(`${dtag} enterGenvar_declaration()`);
    }

    enterInteger_declaration(ctx: v.Integer_declarationContext): void {
        if (ctx.exception) return;
        this.add_variable('integer', ctx, v.Variable_identifierContext);
        if (debug) console.log(`${dtag} enterInteger_declaration()`);
    }

    enterString_declaration(ctx: v.String_declarationContext): void {
        if (ctx.exception) return;
        this.add_variable('string', ctx, v.Variable_identifierContext);
        if (debug) console.log(`${dtag} enterString_declaration()`);
    }

    enterReal_declaration(ctx: v.Real_declarationContext): void {
        if (ctx.exception) return;
        this.add_variable('real', ctx, v.Real_identifierContext);
        if (debug) console.log(`${dtag} enterReal_declaration()`);
    }

    enterTime_declaration(ctx: v.Time_declarationContext): void {
        if (ctx.exception) return;
        this.add_variable('time', ctx, v.Variable_identifierContext);
        if (debug) console.log(`${dtag} enterTime_declaration()`);
    }

    enterRealtime_declaration(ctx: v.Realtime_declarationContext): void {
        if (ctx.exception) return;
        this.add_variable('realtime', ctx, v.Real_identifierContext);
        if (debug) console.log(`${dtag} enterRealtime_declaration()`);
    }

    /*
     * references
     */
    enterPrimary(ctx: v.PrimaryContext): void {
        if (ctx.exception) return;
        if (ctx.hierarchical_identifier()) this.add_id_ref(ctx.hierarchical_identifier());
        else if (ctx.function_call()) this.add_id_ref(ctx.function_call().hierarchical_function_identifier().hierarchical_identifier());
        if (debug) console.log(`${dtag} enterPrimary()`);
    }

    enterConstant_primary(ctx: v.Constant_primaryContext): void {
        if (ctx.exception) return;
        let id = ctx.parameter_identifier()?.identifier();
        if (!id) id = ctx.specparam_identifier()?.identifier();
        if (!id) id = ctx.constant_function_call()?.function_identifier().identifier();
        this.add_id_ref(id);
        if (debug) console.log(`${dtag} enterConstant_primary()`);
    }

    enterVariable_lvalue(ctx: v.Variable_lvalueContext): void {
        if (ctx.exception) return;
        this.add_id_ref(ctx.hierarchical_variable_identifier()?.hierarchical_identifier());
        if (debug) console.log(`${dtag} enterVariable_lvalue()`);
    }

    enterNet_lvalue(ctx: v.Net_lvalueContext): void {
        if (ctx.exception) return;
        this.add_id_ref(ctx.hierarchical_net_identifier()?.hierarchical_identifier());
        if (debug) console.log(`${dtag} enterNet_lvalue()`);
    }

    enterGenvar_initialization(ctx: v.Genvar_initializationContext): void {
        if (ctx.exception) return;
        this.add_id_ref(ctx.genvar_identifier().identifier());
        if (debug) console.log(`${dtag} enterGenvar_initialization()`);
    }

    enterGenvar_iteration(ctx: v.Genvar_iterationContext): void {
        if (ctx.exception) return;
        this.add_id_ref(ctx.genvar_identifier().identifier());
        if (debug) console.log(`${dtag} enterGenvar_iteration()`);
    }

    /*
     * block begin: M   // generate block identifier
     */
    enterGenerate_block(ctx: v.Generate_blockContext): void {
        if (ctx.exception) return;
        let name: antlr4.ParserRuleContext|string = `block-${ctx.start.line}`;
        if (ctx.generate_block_identifier()) {
            name = ctx.generate_block_identifier().identifier();
        }
        let block = new Block(name, ctx, this.source.get_source(ctx.start.tokenIndex), this.curr!);
        if (ctx.generate_block_identifier()) {
            this.curr!.add_symbol(block);
        }
        this.push_context(block);
        if (debug) console.log(`${dtag} enterGenerate_block()`);
    }

    exitGenerate_block(ctx: v.Generate_blockContext): void {
        if (ctx.exception) return;
        this.pop_context();
        if (debug) console.log(`${dtag} exitGenerate_block()`);
    }

}