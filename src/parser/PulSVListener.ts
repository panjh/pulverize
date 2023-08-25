import * as sv from "../sv/SVParser";
import * as util from "../util";
import SVParserListener from "../sv/SVParserListener";
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
import { Always } from "./entity/Always";
import { Initial } from "./entity/Initial";
import { Source } from "./entity/Source";

let debug = false;
let dtag = "[PulSVListener]";

export class PulSVListener extends SVParserListener {

    private source: Source;
    private root?: Root;
    private curr?: Context;
    private curr_port_name?: string;
    private curr_port_modu?: string;

    constructor(source: Source) {
        super();
        this.source = source;
    }

    get_root(): Root|undefined {
        return this.root;
    }

    private push_context(ctx: Context): void {
        if (this.curr) this.curr.childs.push(ctx);
        this.curr = ctx;
    }

    private pop_context(): void {
        if (this.curr && this.curr.parent) this.curr = this.curr.parent as Context;
    }

    private add_port(ctx: sv.Ansi_port_declarationContext|sv.Tf_port_itemContext): void {
        let dir = util.find_one<sv.Port_directionContext>(sv.Port_directionContext, ctx)?.getText() || "";
        let width = util.find_one<sv.Unpacked_dimensionContext>(sv.Unpacked_dimensionContext, ctx)?.getText() || "";
        let ports = util.find_all<sv.Port_identifierContext>(sv.Port_identifierContext, ctx);
        let modu = this.curr! as Module;
        for (let port of ports) {
            let name = port.getText();
            let _port = new Port(name, "", width, dir, ctx, this.source.get_source(ctx.start.tokenIndex));
            this.curr!.add_symbol(_port);
            modu.ports.push(_port);
        }
    }

    private add_param(ctx: sv.List_of_param_assignmentsContext): void {
        for (let param of ctx.param_assignment_list()) {
            if (!param.parameter_identifier() || !param.constant_param_expression()) continue;
            let name = param.parameter_identifier().getText();
            let value = param.constant_param_expression().getText();
            let parameter = new Parameter(name, value, ctx, this.source.get_source(ctx.start.tokenIndex));
            this.curr!.add_symbol(parameter);
        }
    }

    private add_net(ctx: sv.Net_declarationContext): void {
        if (!ctx.net_type()) return;
        let type = ctx.net_type().getText();
        let width = util.find_one<sv.Packed_dimensionContext>(sv.Packed_dimensionContext, ctx)?.getText() || "";
        let nets = util.find_all(sv.Net_identifierContext, ctx) as sv.Net_identifierContext[];
        for (let net of nets) {
            let name = net.identifier().getText();
            let logic = new Logic(name, type, width, ctx, this.source.get_source(ctx.start.tokenIndex));
            this.curr!.add_symbol(logic);
            if (debug) console.log(`${dtag}   add_net(${type}, ${name})`);
        }
    }

    private add_data(type: string, ctx: sv.Data_declarationContext): void {
        let width = util.find_one<sv.Packed_dimensionContext>(sv.Packed_dimensionContext, ctx)?.getText() || "";
        let datas = util.find_all<sv.Variable_identifierContext>(sv.Variable_identifierContext, ctx);
        for (let data of datas) {
            let name = data.identifier().getText();
            let logic = new Logic(name, type, width, ctx, this.source.get_source(ctx.start.tokenIndex));
            this.curr!.add_symbol(logic);
            if (debug) console.log(`${dtag}   add_data(${type}, ${name})`);
        }
    }

    private add_genvar(ctx: sv.Genvar_declarationContext): void {
        let vars = util.find_all<sv.Genvar_identifierContext>(sv.Genvar_identifierContext, ctx);
        for (let va of vars) {
            let name = va.getText();
            let variable = new Variable(name, "genvar", ctx, this.source.get_source(ctx.start.tokenIndex));
            this.curr!.add_symbol(variable);
            if (debug) console.log(`${dtag}   add_genvar(${name})`);
        }
    }

    private add_ref(ctx: sv.IdentifierContext): void {
        let name = ctx.getText();
        let id = new Id(name, ctx, this.source.get_source(ctx.start.tokenIndex));
        id.port_modu = this.curr_port_modu;
        id.port_name = this.curr_port_name;
        this.curr!.references.push(id);
        if (debug) console.log(`${dtag}   add_ref(${name})`);
    }

    /*
     * source file
     */
    enterSource_text(ctx: sv.Source_textContext): void {
        this.root = new Root(ctx, this.source.get_source(ctx.start.tokenIndex));
        this.curr = this.root;
        if (debug) console.log(`${dtag} enterSource_text()`);
    }

    /*
     * module declaration
     */
    enterModule_declaration(ctx: sv.Module_declarationContext): void {
        let name: string|undefined;
        if (ctx.module_keyword()) name = ctx.module_identifier(0).identifier().getText();
        else if (ctx.module_nonansi_header()) name = ctx.module_nonansi_header().module_identifier().identifier().getText();
        else if (ctx.module_ansi_header()) name = ctx.module_ansi_header().module_identifier().identifier().getText();
        else return;
        let module = new Module(name, ctx, this.source.get_source(ctx.start.tokenIndex), this.curr!);
        this.push_context(module);
        this.root!.modules[name] = module;
        if (debug) console.log(`${dtag} enterModule_declaration(${name})`);
    }

    exitModule_declaration(ctx: sv.Module_declarationContext): void {
        this.pop_context();
        if (debug) console.log(`${dtag} exitModule_declaration()`);
    }

    enterAnsi_port_declaration(ctx: sv.Ansi_port_declarationContext): void {
        this.add_port(ctx);
        if (debug) console.log(`${dtag} enterAnsi_port_declaration()`);
    }

    /*
     * module type
     */
    enterModule_instantiation(ctx: sv.Module_instantiationContext): void {
        let name = ctx.module_identifier().getText();
        let group = new InstanceGroup(name, ctx, this.source.get_source(ctx.start.tokenIndex), this.curr!);
        this.push_context(group);
        if (debug) console.log(`${dtag} enterModule_instantiation(${name})`);
    }

    exitModule_instantiation(ctx: sv.Module_instantiationContext): void {
        this.pop_context();
        if (debug) console.log(`${dtag} exitModule_instantiation()`);
    }

    /*
     * module instance
     */
    enterHierarchical_instance(ctx: sv.Hierarchical_instanceContext): void {
        let name = ctx.name_of_instance().instance_identifier().identifier().getText();
        let instance = new Instance(name, ctx, this.source.get_source(ctx.start.tokenIndex), this.curr!);
        this.curr!.add_symbol(instance);
        this.root!.instances[name] = instance;
        this.push_context(instance);
        if (debug) console.log(`${dtag} enterHierarchical_instance(${name})`);
    }

    exitHierarchical_instance(ctx: sv.Hierarchical_instanceContext): void {
        this.pop_context();
        if (debug) console.log(`${dtag} Hierarchical_instance()`);
    }

    enterNamed_port_connection(ctx: sv.Named_port_connectionContext): void {
        if (!ctx.port_identifier()) return;
        let name = ctx.port_identifier().getText();
        let inst = this.curr! as Instance;
        let modu = inst.parent as InstanceGroup;
        let connector = new Connector(name, ctx, this.source.get_source(ctx.start.tokenIndex));
        inst.connectors.push(connector);
        this.curr_port_modu = modu.name;
        this.curr_port_name = name;
        if (debug) console.log(`${dtag} enterNamed_port_connection(${name})`);
    }

    exitNamed_port_connection(ctx: sv.Named_port_connectionContext): void {
        this.curr_port_name = undefined;
        this.curr_port_modu = undefined;
    }

    /*
     * function and task declaration
     */
    enterFunction_declaration(ctx: sv.Function_declarationContext): void {
        let name = ctx.function_body_declaration().function_identifier(0).getText();
        let func = new Func(name, ctx, this.source.get_source(ctx.start.tokenIndex), this.curr!);
        this.curr!.add_symbol(func);
        if (debug) console.log(`${dtag} enterFunction_declaration(${name})`);
    }

    enterTask_declaration(ctx: sv.Task_declarationContext): void {
        let name = ctx.task_body_declaration().task_identifier(0).getText();
        let task = new Task(name, ctx, this.source.get_source(ctx.start.tokenIndex), this.curr!);
        this.curr!.add_symbol(task);
        if (debug) console.log(`${dtag} enterTask_declaration(${name})`);
    }

    enterTf_port_item(ctx: sv.Tf_port_itemContext): void {
        this.add_port(ctx);
        if (debug) console.log(`${dtag} enterTf_port_item()`);
    }

    /*
     * parameter and localparameter
     */
    enterParameter_declaration(ctx: sv.Parameter_declarationContext): void {
        if (!ctx.data_type_or_implicit()) return;
        if (debug) console.log(`${dtag} enterParameter_declaration()`);
        this.add_param(ctx.list_of_param_assignments());
    }

    enterLocal_parameter_declaration(ctx: sv.Local_parameter_declarationContext): void {
        if (!ctx.data_type_or_implicit()) return;
        if (debug) console.log(`${dtag} enterLocal_parameter_declaration()`);
        this.add_param(ctx.list_of_param_assignments());
    }

    /*
     * net: wire
     */
    enterNet_declaration(ctx: sv.Net_declarationContext): void {
        this.add_net(ctx);
        if (debug) console.log(`${dtag} enterNet_declaration()`);
    }

    /*
     * data: reg, bit, logic, byte, integer, int, shortint, longint, time, real, shortreal, timereal, string
     */
    enterData_declaration(ctx: sv.Data_declarationContext): void {
        let data = ctx.data_type_or_implicit()?.data_type();
        if (!data) return;
        let type = (data.integer_vector_type() || data.integer_atom_type() || data.non_integer_type() || data.STRING())?.getText();
        if (!type) return;
        this.add_data(type, ctx);
        if (debug) console.log(`${dtag} enterData_declaration(${type})`);
    }

    /*
     * variables
     */
    enterGenvar_declaration(ctx: sv.Genvar_declarationContext): void {
        this.add_genvar(ctx);
        if (debug) console.log(`${dtag} enterGenvar_declaration()`);
    }

    /*
     * identifier
     */
    enterPrimary(ctx: sv.PrimaryContext): void {
        let id = ctx.hierarchical_identifier()?.identifier(0);
        if (!id) id = ctx.tf_call()?.ps_or_hierarchical_tf_identifier().tf_identifier()?.identifier();
        if (!id) id = ctx.tf_call()?.ps_or_hierarchical_tf_identifier().hierarchical_tf_identifier()?.hierarchical_identifier().identifier(0);
        if (!id) return;
        this.add_ref(id);
        if (debug) console.log(`${dtag} enterPrimary()`);
    }

    enterConstant_primary(ctx: sv.Constant_primaryContext): void {
        let id = ctx.ps_parameter_identifier()?.parameter_identifier().identifier();
        if (!id) id = ctx.specparam_identifier()?.identifier();
        if (!id) id = ctx.genvar_identifier()?.identifier();
        if (!id) id = ctx.formal_port_identifier()?.identifier();
        if (!id) id = ctx.tf_call()?.ps_or_hierarchical_tf_identifier().tf_identifier()?.identifier();
        if (!id) id = ctx.tf_call()?.ps_or_hierarchical_tf_identifier().hierarchical_tf_identifier()?.hierarchical_identifier().identifier(0);
        if (!id) return;
        this.add_ref(id);
        if (debug) console.log(`${dtag} enterConstant_primary()`);
    }

    enterVariable_lvalue(ctx: sv.Variable_lvalueContext): void {
        let id = ctx.hierarchical_variable_identifier()?.hierarchical_identifier().identifier(0);
        if (!id) return;
        this.add_ref(id);
        if (debug) console.log(`${dtag} enterVariable_lvalue()`);
    }

    enterNet_lvalue(ctx: sv.Net_lvalueContext): void {
        let id = ctx.ps_or_hierarchical_net_identifier()?.hierarchical_net_identifier()?.hierarchical_identifier().identifier(0);
        if (!id) return;
        this.add_ref(id);
        if (debug) console.log(`${dtag} enterNet_lvalue()`);
    }

    /*
     * always
     */
    enterAlways_construct(ctx: sv.Always_constructContext): void {
        let always = new Always(ctx, this.source.get_source(ctx.start.tokenIndex), this.curr!);
        this.push_context(always);
        if (debug) console.log(`${dtag} enterAlways_construct()`);
    }

    exitAlways_construct(ctx: sv.Always_constructContext): void {
        this.pop_context();
        if (debug) console.log(`${dtag} exitAlways_construct()`);
    }

    /*
     * initial
     */
    enterInitial_construct(ctx: sv.Initial_constructContext): void {
        let initial = new Initial(ctx, this.source.get_source(ctx.start.tokenIndex), this.curr!);
        this.push_context(initial);
        if (debug) console.log(`${dtag} enterInitial_construct()`);
    }

    exitInitial_construct(ctx: sv.Initial_constructContext): void {
        this.pop_context();
        if (debug) console.log(`${dtag} exitInitial_construct()`);
    }
}