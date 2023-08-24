// Generated from antlr/verilog/VParser.g4 by ANTLR 4.13.0

import {ParseTreeListener} from "../antlr4";


import { ParseContext } from "./VParser";
import { Source_textContext } from "./VParser";
import { DescriptionContext } from "./VParser";
import { Module_declarationContext } from "./VParser";
import { Module_keywordContext } from "./VParser";
import { Module_parameter_port_listContext } from "./VParser";
import { List_of_portsContext } from "./VParser";
import { List_of_port_declarationsContext } from "./VParser";
import { PortContext } from "./VParser";
import { Port_expressionContext } from "./VParser";
import { Port_referenceContext } from "./VParser";
import { Port_declarationContext } from "./VParser";
import { Module_itemContext } from "./VParser";
import { Module_or_generate_itemContext } from "./VParser";
import { Module_or_generate_item_declarationContext } from "./VParser";
import { Non_port_module_itemContext } from "./VParser";
import { Parameter_overrideContext } from "./VParser";
import { Local_parameter_declarationContext } from "./VParser";
import { Parameter_declarationContext } from "./VParser";
import { Specparam_declarationContext } from "./VParser";
import { Parameter_typeContext } from "./VParser";
import { Inout_declarationContext } from "./VParser";
import { Input_declarationContext } from "./VParser";
import { Output_declarationContext } from "./VParser";
import { Event_declarationContext } from "./VParser";
import { String_declarationContext } from "./VParser";
import { Integer_typeContext } from "./VParser";
import { Integer_declarationContext } from "./VParser";
import { Net_declarationContext } from "./VParser";
import { Real_declarationContext } from "./VParser";
import { Realtime_declarationContext } from "./VParser";
import { Reg_typeContext } from "./VParser";
import { Reg_declarationContext } from "./VParser";
import { Time_declarationContext } from "./VParser";
import { Net_typeContext } from "./VParser";
import { Output_variable_typeContext } from "./VParser";
import { Real_typeContext } from "./VParser";
import { Variable_typeContext } from "./VParser";
import { Drive_strengthContext } from "./VParser";
import { Strength0Context } from "./VParser";
import { Strength1Context } from "./VParser";
import { Charge_strengthContext } from "./VParser";
import { Delay3Context } from "./VParser";
import { Delay2Context } from "./VParser";
import { Delay_valueContext } from "./VParser";
import { List_of_defparam_assignmentsContext } from "./VParser";
import { List_of_event_identifiersContext } from "./VParser";
import { List_of_net_decl_assignmentsContext } from "./VParser";
import { List_of_net_identifiersContext } from "./VParser";
import { List_of_param_assignmentsContext } from "./VParser";
import { List_of_port_identifiersContext } from "./VParser";
import { List_of_real_identifiersContext } from "./VParser";
import { List_of_specparam_assignmentsContext } from "./VParser";
import { List_of_variable_identifiersContext } from "./VParser";
import { List_of_variable_port_identifiersContext } from "./VParser";
import { Defparam_assignmentContext } from "./VParser";
import { Net_decl_assignmentContext } from "./VParser";
import { Param_assignmentContext } from "./VParser";
import { Specparam_assignmentContext } from "./VParser";
import { Pulse_control_specparamContext } from "./VParser";
import { Error_limit_valueContext } from "./VParser";
import { Reject_limit_valueContext } from "./VParser";
import { Limit_valueContext } from "./VParser";
import { DimensionContext } from "./VParser";
import { Range_Context } from "./VParser";
import { Function_declarationContext } from "./VParser";
import { Function_range_or_typeContext } from "./VParser";
import { Task_declarationContext } from "./VParser";
import { Task_item_declarationContext } from "./VParser";
import { Task_port_listContext } from "./VParser";
import { Task_port_itemContext } from "./VParser";
import { Tf_input_declarationContext } from "./VParser";
import { Tf_output_declarationContext } from "./VParser";
import { Tf_inout_declarationContext } from "./VParser";
import { Task_port_typeContext } from "./VParser";
import { Block_item_declarationContext } from "./VParser";
import { List_of_block_variable_identifiersContext } from "./VParser";
import { List_of_block_real_identifiersContext } from "./VParser";
import { Block_variable_typeContext } from "./VParser";
import { Block_real_typeContext } from "./VParser";
import { Gate_instantiationContext } from "./VParser";
import { Cmos_switch_instanceContext } from "./VParser";
import { Enable_gate_instanceContext } from "./VParser";
import { Mos_switch_instanceContext } from "./VParser";
import { N_input_gate_instanceContext } from "./VParser";
import { N_output_gate_instanceContext } from "./VParser";
import { Pass_switch_instanceContext } from "./VParser";
import { Pass_enable_switch_instanceContext } from "./VParser";
import { Pull_gate_instanceContext } from "./VParser";
import { Name_of_gate_instanceContext } from "./VParser";
import { Pulldown_strengthContext } from "./VParser";
import { Pullup_strengthContext } from "./VParser";
import { Enable_terminalContext } from "./VParser";
import { Inout_terminalContext } from "./VParser";
import { Input_terminalContext } from "./VParser";
import { Ncontrol_terminalContext } from "./VParser";
import { Output_terminalContext } from "./VParser";
import { Pcontrol_terminalContext } from "./VParser";
import { Cmos_switchtypeContext } from "./VParser";
import { Enable_gatetypeContext } from "./VParser";
import { Mos_switchtypeContext } from "./VParser";
import { N_input_gatetypeContext } from "./VParser";
import { N_output_gatetypeContext } from "./VParser";
import { Pass_en_switchtypeContext } from "./VParser";
import { Pass_switchtypeContext } from "./VParser";
import { Module_instantiationContext } from "./VParser";
import { Parameter_value_assignmentContext } from "./VParser";
import { List_of_parameter_assignmentsContext } from "./VParser";
import { Ordered_parameter_assignmentContext } from "./VParser";
import { Named_parameter_assignmentContext } from "./VParser";
import { Module_instanceContext } from "./VParser";
import { Name_of_module_instanceContext } from "./VParser";
import { List_of_port_connectionsContext } from "./VParser";
import { Ordered_port_connectionContext } from "./VParser";
import { Named_port_connectionContext } from "./VParser";
import { Generate_regionContext } from "./VParser";
import { Genvar_declarationContext } from "./VParser";
import { List_of_genvar_identifiersContext } from "./VParser";
import { Loop_generate_constructContext } from "./VParser";
import { Genvar_initializationContext } from "./VParser";
import { Genvar_expressionContext } from "./VParser";
import { Genvar_iterationContext } from "./VParser";
import { Genvar_primaryContext } from "./VParser";
import { Conditional_generate_constructContext } from "./VParser";
import { If_generate_constructContext } from "./VParser";
import { Case_generate_constructContext } from "./VParser";
import { Case_generate_itemContext } from "./VParser";
import { Generate_blockContext } from "./VParser";
import { Generate_block_or_nullContext } from "./VParser";
import { Continuous_assignContext } from "./VParser";
import { List_of_net_assignmentsContext } from "./VParser";
import { Net_assignmentContext } from "./VParser";
import { Initial_constructContext } from "./VParser";
import { Always_constructContext } from "./VParser";
import { Blocking_assignmentContext } from "./VParser";
import { Nonblocking_assignmentContext } from "./VParser";
import { Procedural_continuous_assignmentsContext } from "./VParser";
import { Variable_assignmentContext } from "./VParser";
import { Par_blockContext } from "./VParser";
import { Seq_blockContext } from "./VParser";
import { StatementContext } from "./VParser";
import { Statement_or_nullContext } from "./VParser";
import { Function_statementContext } from "./VParser";
import { Delay_controlContext } from "./VParser";
import { Delay_or_event_controlContext } from "./VParser";
import { Disable_statementContext } from "./VParser";
import { Event_controlContext } from "./VParser";
import { Event_triggerContext } from "./VParser";
import { Edge_typeContext } from "./VParser";
import { Event_expressionContext } from "./VParser";
import { Procedural_timing_controlContext } from "./VParser";
import { Procedural_timing_control_statementContext } from "./VParser";
import { Wait_statementContext } from "./VParser";
import { Conditional_statementContext } from "./VParser";
import { Case_statementContext } from "./VParser";
import { Case_itemContext } from "./VParser";
import { Loop_statementContext } from "./VParser";
import { System_task_enableContext } from "./VParser";
import { Task_enableContext } from "./VParser";
import { Specify_blockContext } from "./VParser";
import { Specify_itemContext } from "./VParser";
import { Pulsestyle_declarationContext } from "./VParser";
import { Showcancelled_declarationContext } from "./VParser";
import { Path_declarationContext } from "./VParser";
import { Simple_path_declarationContext } from "./VParser";
import { Parallel_path_descriptionContext } from "./VParser";
import { Full_path_descriptionContext } from "./VParser";
import { List_of_path_inputsContext } from "./VParser";
import { List_of_path_outputsContext } from "./VParser";
import { Specify_input_terminal_descriptorContext } from "./VParser";
import { Specify_output_terminal_descriptorContext } from "./VParser";
import { Input_identifierContext } from "./VParser";
import { Output_identifierContext } from "./VParser";
import { Path_delay_valueContext } from "./VParser";
import { List_of_path_delay_expressionsContext } from "./VParser";
import { T_path_delay_expressionContext } from "./VParser";
import { Trise_path_delay_expressionContext } from "./VParser";
import { Tfall_path_delay_expressionContext } from "./VParser";
import { Tz_path_delay_expressionContext } from "./VParser";
import { T01_path_delay_expressionContext } from "./VParser";
import { T10_path_delay_expressionContext } from "./VParser";
import { T0z_path_delay_expressionContext } from "./VParser";
import { Tz1_path_delay_expressionContext } from "./VParser";
import { T1z_path_delay_expressionContext } from "./VParser";
import { Tz0_path_delay_expressionContext } from "./VParser";
import { T0x_path_delay_expressionContext } from "./VParser";
import { Tx1_path_delay_expressionContext } from "./VParser";
import { T1x_path_delay_expressionContext } from "./VParser";
import { Tx0_path_delay_expressionContext } from "./VParser";
import { Txz_path_delay_expressionContext } from "./VParser";
import { Tzx_path_delay_expressionContext } from "./VParser";
import { Path_delay_expressionContext } from "./VParser";
import { Edge_sensitive_path_declarationContext } from "./VParser";
import { Parallel_edge_sensitive_path_descriptionContext } from "./VParser";
import { Full_edge_sensitive_path_descriptionContext } from "./VParser";
import { Data_source_expressionContext } from "./VParser";
import { Edge_identifierContext } from "./VParser";
import { State_dependent_path_declarationContext } from "./VParser";
import { Polarity_operatorContext } from "./VParser";
import { System_timing_checkContext } from "./VParser";
import { Setup_timing_checkContext } from "./VParser";
import { Hold_timing_checkContext } from "./VParser";
import { Setuphold_timing_checkContext } from "./VParser";
import { Recovery_timing_checkContext } from "./VParser";
import { Removal_timing_checkContext } from "./VParser";
import { Recrem_timing_checkContext } from "./VParser";
import { Skew_timing_checkContext } from "./VParser";
import { Timeskew_timing_checkContext } from "./VParser";
import { Fullskew_timing_checkContext } from "./VParser";
import { Period_timing_checkContext } from "./VParser";
import { Width_timing_checkContext } from "./VParser";
import { Nochange_timing_checkContext } from "./VParser";
import { Checktime_conditionContext } from "./VParser";
import { Controlled_reference_eventContext } from "./VParser";
import { Data_eventContext } from "./VParser";
import { Delayed_dataContext } from "./VParser";
import { Delayed_referenceContext } from "./VParser";
import { End_edge_offsetContext } from "./VParser";
import { Event_based_flagContext } from "./VParser";
import { NotifierContext } from "./VParser";
import { Reference_eventContext } from "./VParser";
import { Remain_active_flagContext } from "./VParser";
import { Stamptime_conditionContext } from "./VParser";
import { Start_edge_offsetContext } from "./VParser";
import { ThresholdContext } from "./VParser";
import { Timing_check_limitContext } from "./VParser";
import { Timing_check_eventContext } from "./VParser";
import { Controlled_timing_check_eventContext } from "./VParser";
import { Timing_check_event_controlContext } from "./VParser";
import { Specify_terminal_descriptorContext } from "./VParser";
import { Timing_check_conditionContext } from "./VParser";
import { Scalar_timing_check_conditionContext } from "./VParser";
import { Scalar_constantContext } from "./VParser";
import { ConcatenationContext } from "./VParser";
import { Constant_concatenationContext } from "./VParser";
import { Constant_multiple_concatenationContext } from "./VParser";
import { Module_path_concatenationContext } from "./VParser";
import { Module_path_multiple_concatenationContext } from "./VParser";
import { Multiple_concatenationContext } from "./VParser";
import { Constant_function_callContext } from "./VParser";
import { Constant_system_function_callContext } from "./VParser";
import { Function_callContext } from "./VParser";
import { System_function_callContext } from "./VParser";
import { Base_expressionContext } from "./VParser";
import { Constant_base_expressionContext } from "./VParser";
import { Constant_expressionContext } from "./VParser";
import { Constant_mintypmax_expressionContext } from "./VParser";
import { Constant_range_expressionContext } from "./VParser";
import { Dimension_constant_expressionContext } from "./VParser";
import { ExpressionContext } from "./VParser";
import { Lsb_constant_expressionContext } from "./VParser";
import { Mintypmax_expressionContext } from "./VParser";
import { Module_path_expressionContext } from "./VParser";
import { Module_path_mintypmax_expressionContext } from "./VParser";
import { Msb_constant_expressionContext } from "./VParser";
import { Range_expressionContext } from "./VParser";
import { Width_constant_expressionContext } from "./VParser";
import { Constant_primaryContext } from "./VParser";
import { Module_path_primaryContext } from "./VParser";
import { PrimaryContext } from "./VParser";
import { Net_lvalueContext } from "./VParser";
import { Variable_lvalueContext } from "./VParser";
import { Unary_operatorContext } from "./VParser";
import { Binary_operatorContext } from "./VParser";
import { Unary_module_path_operatorContext } from "./VParser";
import { Binary_module_path_operatorContext } from "./VParser";
import { NumberContext } from "./VParser";
import { Real_numberContext } from "./VParser";
import { Decimal_numberContext } from "./VParser";
import { Binary_numberContext } from "./VParser";
import { Octal_numberContext } from "./VParser";
import { Hex_numberContext } from "./VParser";
import { Unsigned_numberContext } from "./VParser";
import { String_Context } from "./VParser";
import { Attribute_instanceContext } from "./VParser";
import { Attr_specContext } from "./VParser";
import { Attr_nameContext } from "./VParser";
import { Block_identifierContext } from "./VParser";
import { Cell_identifierContext } from "./VParser";
import { Escaped_identifierContext } from "./VParser";
import { Event_identifierContext } from "./VParser";
import { Function_identifierContext } from "./VParser";
import { Gate_instance_identifierContext } from "./VParser";
import { Generate_block_identifierContext } from "./VParser";
import { Genvar_identifierContext } from "./VParser";
import { Hierarchical_block_identifierContext } from "./VParser";
import { Hierarchical_event_identifierContext } from "./VParser";
import { Hierarchical_function_identifierContext } from "./VParser";
import { Hierarchical_identifierContext } from "./VParser";
import { Hierarchical_net_identifierContext } from "./VParser";
import { Hierarchical_parameter_identifierContext } from "./VParser";
import { Hierarchical_variable_identifierContext } from "./VParser";
import { Hierarchical_task_identifierContext } from "./VParser";
import { IdentifierContext } from "./VParser";
import { Inout_port_identifierContext } from "./VParser";
import { Input_port_identifierContext } from "./VParser";
import { Instance_identifierContext } from "./VParser";
import { Module_identifierContext } from "./VParser";
import { Module_instance_identifierContext } from "./VParser";
import { Net_identifierContext } from "./VParser";
import { Output_port_identifierContext } from "./VParser";
import { Parameter_identifierContext } from "./VParser";
import { Port_identifierContext } from "./VParser";
import { Real_identifierContext } from "./VParser";
import { Simple_identifierContext } from "./VParser";
import { Specparam_identifierContext } from "./VParser";
import { System_function_identifierContext } from "./VParser";
import { System_task_identifierContext } from "./VParser";
import { Task_identifierContext } from "./VParser";
import { Terminal_identifierContext } from "./VParser";
import { Text_macro_identifierContext } from "./VParser";
import { Topmodule_identifierContext } from "./VParser";
import { Udp_identifierContext } from "./VParser";
import { Udp_instance_identifierContext } from "./VParser";
import { Variable_identifierContext } from "./VParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `VParser`.
 */
export default class VParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `VParser.parse`.
	 * @param ctx the parse tree
	 */
	enterParse?(ctx: ParseContext): void;
	/**
	 * Exit a parse tree produced by `VParser.parse`.
	 * @param ctx the parse tree
	 */
	exitParse?(ctx: ParseContext): void;
	/**
	 * Enter a parse tree produced by `VParser.source_text`.
	 * @param ctx the parse tree
	 */
	enterSource_text?(ctx: Source_textContext): void;
	/**
	 * Exit a parse tree produced by `VParser.source_text`.
	 * @param ctx the parse tree
	 */
	exitSource_text?(ctx: Source_textContext): void;
	/**
	 * Enter a parse tree produced by `VParser.description`.
	 * @param ctx the parse tree
	 */
	enterDescription?(ctx: DescriptionContext): void;
	/**
	 * Exit a parse tree produced by `VParser.description`.
	 * @param ctx the parse tree
	 */
	exitDescription?(ctx: DescriptionContext): void;
	/**
	 * Enter a parse tree produced by `VParser.module_declaration`.
	 * @param ctx the parse tree
	 */
	enterModule_declaration?(ctx: Module_declarationContext): void;
	/**
	 * Exit a parse tree produced by `VParser.module_declaration`.
	 * @param ctx the parse tree
	 */
	exitModule_declaration?(ctx: Module_declarationContext): void;
	/**
	 * Enter a parse tree produced by `VParser.module_keyword`.
	 * @param ctx the parse tree
	 */
	enterModule_keyword?(ctx: Module_keywordContext): void;
	/**
	 * Exit a parse tree produced by `VParser.module_keyword`.
	 * @param ctx the parse tree
	 */
	exitModule_keyword?(ctx: Module_keywordContext): void;
	/**
	 * Enter a parse tree produced by `VParser.module_parameter_port_list`.
	 * @param ctx the parse tree
	 */
	enterModule_parameter_port_list?(ctx: Module_parameter_port_listContext): void;
	/**
	 * Exit a parse tree produced by `VParser.module_parameter_port_list`.
	 * @param ctx the parse tree
	 */
	exitModule_parameter_port_list?(ctx: Module_parameter_port_listContext): void;
	/**
	 * Enter a parse tree produced by `VParser.list_of_ports`.
	 * @param ctx the parse tree
	 */
	enterList_of_ports?(ctx: List_of_portsContext): void;
	/**
	 * Exit a parse tree produced by `VParser.list_of_ports`.
	 * @param ctx the parse tree
	 */
	exitList_of_ports?(ctx: List_of_portsContext): void;
	/**
	 * Enter a parse tree produced by `VParser.list_of_port_declarations`.
	 * @param ctx the parse tree
	 */
	enterList_of_port_declarations?(ctx: List_of_port_declarationsContext): void;
	/**
	 * Exit a parse tree produced by `VParser.list_of_port_declarations`.
	 * @param ctx the parse tree
	 */
	exitList_of_port_declarations?(ctx: List_of_port_declarationsContext): void;
	/**
	 * Enter a parse tree produced by `VParser.port`.
	 * @param ctx the parse tree
	 */
	enterPort?(ctx: PortContext): void;
	/**
	 * Exit a parse tree produced by `VParser.port`.
	 * @param ctx the parse tree
	 */
	exitPort?(ctx: PortContext): void;
	/**
	 * Enter a parse tree produced by `VParser.port_expression`.
	 * @param ctx the parse tree
	 */
	enterPort_expression?(ctx: Port_expressionContext): void;
	/**
	 * Exit a parse tree produced by `VParser.port_expression`.
	 * @param ctx the parse tree
	 */
	exitPort_expression?(ctx: Port_expressionContext): void;
	/**
	 * Enter a parse tree produced by `VParser.port_reference`.
	 * @param ctx the parse tree
	 */
	enterPort_reference?(ctx: Port_referenceContext): void;
	/**
	 * Exit a parse tree produced by `VParser.port_reference`.
	 * @param ctx the parse tree
	 */
	exitPort_reference?(ctx: Port_referenceContext): void;
	/**
	 * Enter a parse tree produced by `VParser.port_declaration`.
	 * @param ctx the parse tree
	 */
	enterPort_declaration?(ctx: Port_declarationContext): void;
	/**
	 * Exit a parse tree produced by `VParser.port_declaration`.
	 * @param ctx the parse tree
	 */
	exitPort_declaration?(ctx: Port_declarationContext): void;
	/**
	 * Enter a parse tree produced by `VParser.module_item`.
	 * @param ctx the parse tree
	 */
	enterModule_item?(ctx: Module_itemContext): void;
	/**
	 * Exit a parse tree produced by `VParser.module_item`.
	 * @param ctx the parse tree
	 */
	exitModule_item?(ctx: Module_itemContext): void;
	/**
	 * Enter a parse tree produced by `VParser.module_or_generate_item`.
	 * @param ctx the parse tree
	 */
	enterModule_or_generate_item?(ctx: Module_or_generate_itemContext): void;
	/**
	 * Exit a parse tree produced by `VParser.module_or_generate_item`.
	 * @param ctx the parse tree
	 */
	exitModule_or_generate_item?(ctx: Module_or_generate_itemContext): void;
	/**
	 * Enter a parse tree produced by `VParser.module_or_generate_item_declaration`.
	 * @param ctx the parse tree
	 */
	enterModule_or_generate_item_declaration?(ctx: Module_or_generate_item_declarationContext): void;
	/**
	 * Exit a parse tree produced by `VParser.module_or_generate_item_declaration`.
	 * @param ctx the parse tree
	 */
	exitModule_or_generate_item_declaration?(ctx: Module_or_generate_item_declarationContext): void;
	/**
	 * Enter a parse tree produced by `VParser.non_port_module_item`.
	 * @param ctx the parse tree
	 */
	enterNon_port_module_item?(ctx: Non_port_module_itemContext): void;
	/**
	 * Exit a parse tree produced by `VParser.non_port_module_item`.
	 * @param ctx the parse tree
	 */
	exitNon_port_module_item?(ctx: Non_port_module_itemContext): void;
	/**
	 * Enter a parse tree produced by `VParser.parameter_override`.
	 * @param ctx the parse tree
	 */
	enterParameter_override?(ctx: Parameter_overrideContext): void;
	/**
	 * Exit a parse tree produced by `VParser.parameter_override`.
	 * @param ctx the parse tree
	 */
	exitParameter_override?(ctx: Parameter_overrideContext): void;
	/**
	 * Enter a parse tree produced by `VParser.local_parameter_declaration`.
	 * @param ctx the parse tree
	 */
	enterLocal_parameter_declaration?(ctx: Local_parameter_declarationContext): void;
	/**
	 * Exit a parse tree produced by `VParser.local_parameter_declaration`.
	 * @param ctx the parse tree
	 */
	exitLocal_parameter_declaration?(ctx: Local_parameter_declarationContext): void;
	/**
	 * Enter a parse tree produced by `VParser.parameter_declaration`.
	 * @param ctx the parse tree
	 */
	enterParameter_declaration?(ctx: Parameter_declarationContext): void;
	/**
	 * Exit a parse tree produced by `VParser.parameter_declaration`.
	 * @param ctx the parse tree
	 */
	exitParameter_declaration?(ctx: Parameter_declarationContext): void;
	/**
	 * Enter a parse tree produced by `VParser.specparam_declaration`.
	 * @param ctx the parse tree
	 */
	enterSpecparam_declaration?(ctx: Specparam_declarationContext): void;
	/**
	 * Exit a parse tree produced by `VParser.specparam_declaration`.
	 * @param ctx the parse tree
	 */
	exitSpecparam_declaration?(ctx: Specparam_declarationContext): void;
	/**
	 * Enter a parse tree produced by `VParser.parameter_type`.
	 * @param ctx the parse tree
	 */
	enterParameter_type?(ctx: Parameter_typeContext): void;
	/**
	 * Exit a parse tree produced by `VParser.parameter_type`.
	 * @param ctx the parse tree
	 */
	exitParameter_type?(ctx: Parameter_typeContext): void;
	/**
	 * Enter a parse tree produced by `VParser.inout_declaration`.
	 * @param ctx the parse tree
	 */
	enterInout_declaration?(ctx: Inout_declarationContext): void;
	/**
	 * Exit a parse tree produced by `VParser.inout_declaration`.
	 * @param ctx the parse tree
	 */
	exitInout_declaration?(ctx: Inout_declarationContext): void;
	/**
	 * Enter a parse tree produced by `VParser.input_declaration`.
	 * @param ctx the parse tree
	 */
	enterInput_declaration?(ctx: Input_declarationContext): void;
	/**
	 * Exit a parse tree produced by `VParser.input_declaration`.
	 * @param ctx the parse tree
	 */
	exitInput_declaration?(ctx: Input_declarationContext): void;
	/**
	 * Enter a parse tree produced by `VParser.output_declaration`.
	 * @param ctx the parse tree
	 */
	enterOutput_declaration?(ctx: Output_declarationContext): void;
	/**
	 * Exit a parse tree produced by `VParser.output_declaration`.
	 * @param ctx the parse tree
	 */
	exitOutput_declaration?(ctx: Output_declarationContext): void;
	/**
	 * Enter a parse tree produced by `VParser.event_declaration`.
	 * @param ctx the parse tree
	 */
	enterEvent_declaration?(ctx: Event_declarationContext): void;
	/**
	 * Exit a parse tree produced by `VParser.event_declaration`.
	 * @param ctx the parse tree
	 */
	exitEvent_declaration?(ctx: Event_declarationContext): void;
	/**
	 * Enter a parse tree produced by `VParser.string_declaration`.
	 * @param ctx the parse tree
	 */
	enterString_declaration?(ctx: String_declarationContext): void;
	/**
	 * Exit a parse tree produced by `VParser.string_declaration`.
	 * @param ctx the parse tree
	 */
	exitString_declaration?(ctx: String_declarationContext): void;
	/**
	 * Enter a parse tree produced by `VParser.integer_type`.
	 * @param ctx the parse tree
	 */
	enterInteger_type?(ctx: Integer_typeContext): void;
	/**
	 * Exit a parse tree produced by `VParser.integer_type`.
	 * @param ctx the parse tree
	 */
	exitInteger_type?(ctx: Integer_typeContext): void;
	/**
	 * Enter a parse tree produced by `VParser.integer_declaration`.
	 * @param ctx the parse tree
	 */
	enterInteger_declaration?(ctx: Integer_declarationContext): void;
	/**
	 * Exit a parse tree produced by `VParser.integer_declaration`.
	 * @param ctx the parse tree
	 */
	exitInteger_declaration?(ctx: Integer_declarationContext): void;
	/**
	 * Enter a parse tree produced by `VParser.net_declaration`.
	 * @param ctx the parse tree
	 */
	enterNet_declaration?(ctx: Net_declarationContext): void;
	/**
	 * Exit a parse tree produced by `VParser.net_declaration`.
	 * @param ctx the parse tree
	 */
	exitNet_declaration?(ctx: Net_declarationContext): void;
	/**
	 * Enter a parse tree produced by `VParser.real_declaration`.
	 * @param ctx the parse tree
	 */
	enterReal_declaration?(ctx: Real_declarationContext): void;
	/**
	 * Exit a parse tree produced by `VParser.real_declaration`.
	 * @param ctx the parse tree
	 */
	exitReal_declaration?(ctx: Real_declarationContext): void;
	/**
	 * Enter a parse tree produced by `VParser.realtime_declaration`.
	 * @param ctx the parse tree
	 */
	enterRealtime_declaration?(ctx: Realtime_declarationContext): void;
	/**
	 * Exit a parse tree produced by `VParser.realtime_declaration`.
	 * @param ctx the parse tree
	 */
	exitRealtime_declaration?(ctx: Realtime_declarationContext): void;
	/**
	 * Enter a parse tree produced by `VParser.reg_type`.
	 * @param ctx the parse tree
	 */
	enterReg_type?(ctx: Reg_typeContext): void;
	/**
	 * Exit a parse tree produced by `VParser.reg_type`.
	 * @param ctx the parse tree
	 */
	exitReg_type?(ctx: Reg_typeContext): void;
	/**
	 * Enter a parse tree produced by `VParser.reg_declaration`.
	 * @param ctx the parse tree
	 */
	enterReg_declaration?(ctx: Reg_declarationContext): void;
	/**
	 * Exit a parse tree produced by `VParser.reg_declaration`.
	 * @param ctx the parse tree
	 */
	exitReg_declaration?(ctx: Reg_declarationContext): void;
	/**
	 * Enter a parse tree produced by `VParser.time_declaration`.
	 * @param ctx the parse tree
	 */
	enterTime_declaration?(ctx: Time_declarationContext): void;
	/**
	 * Exit a parse tree produced by `VParser.time_declaration`.
	 * @param ctx the parse tree
	 */
	exitTime_declaration?(ctx: Time_declarationContext): void;
	/**
	 * Enter a parse tree produced by `VParser.net_type`.
	 * @param ctx the parse tree
	 */
	enterNet_type?(ctx: Net_typeContext): void;
	/**
	 * Exit a parse tree produced by `VParser.net_type`.
	 * @param ctx the parse tree
	 */
	exitNet_type?(ctx: Net_typeContext): void;
	/**
	 * Enter a parse tree produced by `VParser.output_variable_type`.
	 * @param ctx the parse tree
	 */
	enterOutput_variable_type?(ctx: Output_variable_typeContext): void;
	/**
	 * Exit a parse tree produced by `VParser.output_variable_type`.
	 * @param ctx the parse tree
	 */
	exitOutput_variable_type?(ctx: Output_variable_typeContext): void;
	/**
	 * Enter a parse tree produced by `VParser.real_type`.
	 * @param ctx the parse tree
	 */
	enterReal_type?(ctx: Real_typeContext): void;
	/**
	 * Exit a parse tree produced by `VParser.real_type`.
	 * @param ctx the parse tree
	 */
	exitReal_type?(ctx: Real_typeContext): void;
	/**
	 * Enter a parse tree produced by `VParser.variable_type`.
	 * @param ctx the parse tree
	 */
	enterVariable_type?(ctx: Variable_typeContext): void;
	/**
	 * Exit a parse tree produced by `VParser.variable_type`.
	 * @param ctx the parse tree
	 */
	exitVariable_type?(ctx: Variable_typeContext): void;
	/**
	 * Enter a parse tree produced by `VParser.drive_strength`.
	 * @param ctx the parse tree
	 */
	enterDrive_strength?(ctx: Drive_strengthContext): void;
	/**
	 * Exit a parse tree produced by `VParser.drive_strength`.
	 * @param ctx the parse tree
	 */
	exitDrive_strength?(ctx: Drive_strengthContext): void;
	/**
	 * Enter a parse tree produced by `VParser.strength0`.
	 * @param ctx the parse tree
	 */
	enterStrength0?(ctx: Strength0Context): void;
	/**
	 * Exit a parse tree produced by `VParser.strength0`.
	 * @param ctx the parse tree
	 */
	exitStrength0?(ctx: Strength0Context): void;
	/**
	 * Enter a parse tree produced by `VParser.strength1`.
	 * @param ctx the parse tree
	 */
	enterStrength1?(ctx: Strength1Context): void;
	/**
	 * Exit a parse tree produced by `VParser.strength1`.
	 * @param ctx the parse tree
	 */
	exitStrength1?(ctx: Strength1Context): void;
	/**
	 * Enter a parse tree produced by `VParser.charge_strength`.
	 * @param ctx the parse tree
	 */
	enterCharge_strength?(ctx: Charge_strengthContext): void;
	/**
	 * Exit a parse tree produced by `VParser.charge_strength`.
	 * @param ctx the parse tree
	 */
	exitCharge_strength?(ctx: Charge_strengthContext): void;
	/**
	 * Enter a parse tree produced by `VParser.delay3`.
	 * @param ctx the parse tree
	 */
	enterDelay3?(ctx: Delay3Context): void;
	/**
	 * Exit a parse tree produced by `VParser.delay3`.
	 * @param ctx the parse tree
	 */
	exitDelay3?(ctx: Delay3Context): void;
	/**
	 * Enter a parse tree produced by `VParser.delay2`.
	 * @param ctx the parse tree
	 */
	enterDelay2?(ctx: Delay2Context): void;
	/**
	 * Exit a parse tree produced by `VParser.delay2`.
	 * @param ctx the parse tree
	 */
	exitDelay2?(ctx: Delay2Context): void;
	/**
	 * Enter a parse tree produced by `VParser.delay_value`.
	 * @param ctx the parse tree
	 */
	enterDelay_value?(ctx: Delay_valueContext): void;
	/**
	 * Exit a parse tree produced by `VParser.delay_value`.
	 * @param ctx the parse tree
	 */
	exitDelay_value?(ctx: Delay_valueContext): void;
	/**
	 * Enter a parse tree produced by `VParser.list_of_defparam_assignments`.
	 * @param ctx the parse tree
	 */
	enterList_of_defparam_assignments?(ctx: List_of_defparam_assignmentsContext): void;
	/**
	 * Exit a parse tree produced by `VParser.list_of_defparam_assignments`.
	 * @param ctx the parse tree
	 */
	exitList_of_defparam_assignments?(ctx: List_of_defparam_assignmentsContext): void;
	/**
	 * Enter a parse tree produced by `VParser.list_of_event_identifiers`.
	 * @param ctx the parse tree
	 */
	enterList_of_event_identifiers?(ctx: List_of_event_identifiersContext): void;
	/**
	 * Exit a parse tree produced by `VParser.list_of_event_identifiers`.
	 * @param ctx the parse tree
	 */
	exitList_of_event_identifiers?(ctx: List_of_event_identifiersContext): void;
	/**
	 * Enter a parse tree produced by `VParser.list_of_net_decl_assignments`.
	 * @param ctx the parse tree
	 */
	enterList_of_net_decl_assignments?(ctx: List_of_net_decl_assignmentsContext): void;
	/**
	 * Exit a parse tree produced by `VParser.list_of_net_decl_assignments`.
	 * @param ctx the parse tree
	 */
	exitList_of_net_decl_assignments?(ctx: List_of_net_decl_assignmentsContext): void;
	/**
	 * Enter a parse tree produced by `VParser.list_of_net_identifiers`.
	 * @param ctx the parse tree
	 */
	enterList_of_net_identifiers?(ctx: List_of_net_identifiersContext): void;
	/**
	 * Exit a parse tree produced by `VParser.list_of_net_identifiers`.
	 * @param ctx the parse tree
	 */
	exitList_of_net_identifiers?(ctx: List_of_net_identifiersContext): void;
	/**
	 * Enter a parse tree produced by `VParser.list_of_param_assignments`.
	 * @param ctx the parse tree
	 */
	enterList_of_param_assignments?(ctx: List_of_param_assignmentsContext): void;
	/**
	 * Exit a parse tree produced by `VParser.list_of_param_assignments`.
	 * @param ctx the parse tree
	 */
	exitList_of_param_assignments?(ctx: List_of_param_assignmentsContext): void;
	/**
	 * Enter a parse tree produced by `VParser.list_of_port_identifiers`.
	 * @param ctx the parse tree
	 */
	enterList_of_port_identifiers?(ctx: List_of_port_identifiersContext): void;
	/**
	 * Exit a parse tree produced by `VParser.list_of_port_identifiers`.
	 * @param ctx the parse tree
	 */
	exitList_of_port_identifiers?(ctx: List_of_port_identifiersContext): void;
	/**
	 * Enter a parse tree produced by `VParser.list_of_real_identifiers`.
	 * @param ctx the parse tree
	 */
	enterList_of_real_identifiers?(ctx: List_of_real_identifiersContext): void;
	/**
	 * Exit a parse tree produced by `VParser.list_of_real_identifiers`.
	 * @param ctx the parse tree
	 */
	exitList_of_real_identifiers?(ctx: List_of_real_identifiersContext): void;
	/**
	 * Enter a parse tree produced by `VParser.list_of_specparam_assignments`.
	 * @param ctx the parse tree
	 */
	enterList_of_specparam_assignments?(ctx: List_of_specparam_assignmentsContext): void;
	/**
	 * Exit a parse tree produced by `VParser.list_of_specparam_assignments`.
	 * @param ctx the parse tree
	 */
	exitList_of_specparam_assignments?(ctx: List_of_specparam_assignmentsContext): void;
	/**
	 * Enter a parse tree produced by `VParser.list_of_variable_identifiers`.
	 * @param ctx the parse tree
	 */
	enterList_of_variable_identifiers?(ctx: List_of_variable_identifiersContext): void;
	/**
	 * Exit a parse tree produced by `VParser.list_of_variable_identifiers`.
	 * @param ctx the parse tree
	 */
	exitList_of_variable_identifiers?(ctx: List_of_variable_identifiersContext): void;
	/**
	 * Enter a parse tree produced by `VParser.list_of_variable_port_identifiers`.
	 * @param ctx the parse tree
	 */
	enterList_of_variable_port_identifiers?(ctx: List_of_variable_port_identifiersContext): void;
	/**
	 * Exit a parse tree produced by `VParser.list_of_variable_port_identifiers`.
	 * @param ctx the parse tree
	 */
	exitList_of_variable_port_identifiers?(ctx: List_of_variable_port_identifiersContext): void;
	/**
	 * Enter a parse tree produced by `VParser.defparam_assignment`.
	 * @param ctx the parse tree
	 */
	enterDefparam_assignment?(ctx: Defparam_assignmentContext): void;
	/**
	 * Exit a parse tree produced by `VParser.defparam_assignment`.
	 * @param ctx the parse tree
	 */
	exitDefparam_assignment?(ctx: Defparam_assignmentContext): void;
	/**
	 * Enter a parse tree produced by `VParser.net_decl_assignment`.
	 * @param ctx the parse tree
	 */
	enterNet_decl_assignment?(ctx: Net_decl_assignmentContext): void;
	/**
	 * Exit a parse tree produced by `VParser.net_decl_assignment`.
	 * @param ctx the parse tree
	 */
	exitNet_decl_assignment?(ctx: Net_decl_assignmentContext): void;
	/**
	 * Enter a parse tree produced by `VParser.param_assignment`.
	 * @param ctx the parse tree
	 */
	enterParam_assignment?(ctx: Param_assignmentContext): void;
	/**
	 * Exit a parse tree produced by `VParser.param_assignment`.
	 * @param ctx the parse tree
	 */
	exitParam_assignment?(ctx: Param_assignmentContext): void;
	/**
	 * Enter a parse tree produced by `VParser.specparam_assignment`.
	 * @param ctx the parse tree
	 */
	enterSpecparam_assignment?(ctx: Specparam_assignmentContext): void;
	/**
	 * Exit a parse tree produced by `VParser.specparam_assignment`.
	 * @param ctx the parse tree
	 */
	exitSpecparam_assignment?(ctx: Specparam_assignmentContext): void;
	/**
	 * Enter a parse tree produced by `VParser.pulse_control_specparam`.
	 * @param ctx the parse tree
	 */
	enterPulse_control_specparam?(ctx: Pulse_control_specparamContext): void;
	/**
	 * Exit a parse tree produced by `VParser.pulse_control_specparam`.
	 * @param ctx the parse tree
	 */
	exitPulse_control_specparam?(ctx: Pulse_control_specparamContext): void;
	/**
	 * Enter a parse tree produced by `VParser.error_limit_value`.
	 * @param ctx the parse tree
	 */
	enterError_limit_value?(ctx: Error_limit_valueContext): void;
	/**
	 * Exit a parse tree produced by `VParser.error_limit_value`.
	 * @param ctx the parse tree
	 */
	exitError_limit_value?(ctx: Error_limit_valueContext): void;
	/**
	 * Enter a parse tree produced by `VParser.reject_limit_value`.
	 * @param ctx the parse tree
	 */
	enterReject_limit_value?(ctx: Reject_limit_valueContext): void;
	/**
	 * Exit a parse tree produced by `VParser.reject_limit_value`.
	 * @param ctx the parse tree
	 */
	exitReject_limit_value?(ctx: Reject_limit_valueContext): void;
	/**
	 * Enter a parse tree produced by `VParser.limit_value`.
	 * @param ctx the parse tree
	 */
	enterLimit_value?(ctx: Limit_valueContext): void;
	/**
	 * Exit a parse tree produced by `VParser.limit_value`.
	 * @param ctx the parse tree
	 */
	exitLimit_value?(ctx: Limit_valueContext): void;
	/**
	 * Enter a parse tree produced by `VParser.dimension`.
	 * @param ctx the parse tree
	 */
	enterDimension?(ctx: DimensionContext): void;
	/**
	 * Exit a parse tree produced by `VParser.dimension`.
	 * @param ctx the parse tree
	 */
	exitDimension?(ctx: DimensionContext): void;
	/**
	 * Enter a parse tree produced by `VParser.range_`.
	 * @param ctx the parse tree
	 */
	enterRange_?(ctx: Range_Context): void;
	/**
	 * Exit a parse tree produced by `VParser.range_`.
	 * @param ctx the parse tree
	 */
	exitRange_?(ctx: Range_Context): void;
	/**
	 * Enter a parse tree produced by `VParser.function_declaration`.
	 * @param ctx the parse tree
	 */
	enterFunction_declaration?(ctx: Function_declarationContext): void;
	/**
	 * Exit a parse tree produced by `VParser.function_declaration`.
	 * @param ctx the parse tree
	 */
	exitFunction_declaration?(ctx: Function_declarationContext): void;
	/**
	 * Enter a parse tree produced by `VParser.function_range_or_type`.
	 * @param ctx the parse tree
	 */
	enterFunction_range_or_type?(ctx: Function_range_or_typeContext): void;
	/**
	 * Exit a parse tree produced by `VParser.function_range_or_type`.
	 * @param ctx the parse tree
	 */
	exitFunction_range_or_type?(ctx: Function_range_or_typeContext): void;
	/**
	 * Enter a parse tree produced by `VParser.task_declaration`.
	 * @param ctx the parse tree
	 */
	enterTask_declaration?(ctx: Task_declarationContext): void;
	/**
	 * Exit a parse tree produced by `VParser.task_declaration`.
	 * @param ctx the parse tree
	 */
	exitTask_declaration?(ctx: Task_declarationContext): void;
	/**
	 * Enter a parse tree produced by `VParser.task_item_declaration`.
	 * @param ctx the parse tree
	 */
	enterTask_item_declaration?(ctx: Task_item_declarationContext): void;
	/**
	 * Exit a parse tree produced by `VParser.task_item_declaration`.
	 * @param ctx the parse tree
	 */
	exitTask_item_declaration?(ctx: Task_item_declarationContext): void;
	/**
	 * Enter a parse tree produced by `VParser.task_port_list`.
	 * @param ctx the parse tree
	 */
	enterTask_port_list?(ctx: Task_port_listContext): void;
	/**
	 * Exit a parse tree produced by `VParser.task_port_list`.
	 * @param ctx the parse tree
	 */
	exitTask_port_list?(ctx: Task_port_listContext): void;
	/**
	 * Enter a parse tree produced by `VParser.task_port_item`.
	 * @param ctx the parse tree
	 */
	enterTask_port_item?(ctx: Task_port_itemContext): void;
	/**
	 * Exit a parse tree produced by `VParser.task_port_item`.
	 * @param ctx the parse tree
	 */
	exitTask_port_item?(ctx: Task_port_itemContext): void;
	/**
	 * Enter a parse tree produced by `VParser.tf_input_declaration`.
	 * @param ctx the parse tree
	 */
	enterTf_input_declaration?(ctx: Tf_input_declarationContext): void;
	/**
	 * Exit a parse tree produced by `VParser.tf_input_declaration`.
	 * @param ctx the parse tree
	 */
	exitTf_input_declaration?(ctx: Tf_input_declarationContext): void;
	/**
	 * Enter a parse tree produced by `VParser.tf_output_declaration`.
	 * @param ctx the parse tree
	 */
	enterTf_output_declaration?(ctx: Tf_output_declarationContext): void;
	/**
	 * Exit a parse tree produced by `VParser.tf_output_declaration`.
	 * @param ctx the parse tree
	 */
	exitTf_output_declaration?(ctx: Tf_output_declarationContext): void;
	/**
	 * Enter a parse tree produced by `VParser.tf_inout_declaration`.
	 * @param ctx the parse tree
	 */
	enterTf_inout_declaration?(ctx: Tf_inout_declarationContext): void;
	/**
	 * Exit a parse tree produced by `VParser.tf_inout_declaration`.
	 * @param ctx the parse tree
	 */
	exitTf_inout_declaration?(ctx: Tf_inout_declarationContext): void;
	/**
	 * Enter a parse tree produced by `VParser.task_port_type`.
	 * @param ctx the parse tree
	 */
	enterTask_port_type?(ctx: Task_port_typeContext): void;
	/**
	 * Exit a parse tree produced by `VParser.task_port_type`.
	 * @param ctx the parse tree
	 */
	exitTask_port_type?(ctx: Task_port_typeContext): void;
	/**
	 * Enter a parse tree produced by `VParser.block_item_declaration`.
	 * @param ctx the parse tree
	 */
	enterBlock_item_declaration?(ctx: Block_item_declarationContext): void;
	/**
	 * Exit a parse tree produced by `VParser.block_item_declaration`.
	 * @param ctx the parse tree
	 */
	exitBlock_item_declaration?(ctx: Block_item_declarationContext): void;
	/**
	 * Enter a parse tree produced by `VParser.list_of_block_variable_identifiers`.
	 * @param ctx the parse tree
	 */
	enterList_of_block_variable_identifiers?(ctx: List_of_block_variable_identifiersContext): void;
	/**
	 * Exit a parse tree produced by `VParser.list_of_block_variable_identifiers`.
	 * @param ctx the parse tree
	 */
	exitList_of_block_variable_identifiers?(ctx: List_of_block_variable_identifiersContext): void;
	/**
	 * Enter a parse tree produced by `VParser.list_of_block_real_identifiers`.
	 * @param ctx the parse tree
	 */
	enterList_of_block_real_identifiers?(ctx: List_of_block_real_identifiersContext): void;
	/**
	 * Exit a parse tree produced by `VParser.list_of_block_real_identifiers`.
	 * @param ctx the parse tree
	 */
	exitList_of_block_real_identifiers?(ctx: List_of_block_real_identifiersContext): void;
	/**
	 * Enter a parse tree produced by `VParser.block_variable_type`.
	 * @param ctx the parse tree
	 */
	enterBlock_variable_type?(ctx: Block_variable_typeContext): void;
	/**
	 * Exit a parse tree produced by `VParser.block_variable_type`.
	 * @param ctx the parse tree
	 */
	exitBlock_variable_type?(ctx: Block_variable_typeContext): void;
	/**
	 * Enter a parse tree produced by `VParser.block_real_type`.
	 * @param ctx the parse tree
	 */
	enterBlock_real_type?(ctx: Block_real_typeContext): void;
	/**
	 * Exit a parse tree produced by `VParser.block_real_type`.
	 * @param ctx the parse tree
	 */
	exitBlock_real_type?(ctx: Block_real_typeContext): void;
	/**
	 * Enter a parse tree produced by `VParser.gate_instantiation`.
	 * @param ctx the parse tree
	 */
	enterGate_instantiation?(ctx: Gate_instantiationContext): void;
	/**
	 * Exit a parse tree produced by `VParser.gate_instantiation`.
	 * @param ctx the parse tree
	 */
	exitGate_instantiation?(ctx: Gate_instantiationContext): void;
	/**
	 * Enter a parse tree produced by `VParser.cmos_switch_instance`.
	 * @param ctx the parse tree
	 */
	enterCmos_switch_instance?(ctx: Cmos_switch_instanceContext): void;
	/**
	 * Exit a parse tree produced by `VParser.cmos_switch_instance`.
	 * @param ctx the parse tree
	 */
	exitCmos_switch_instance?(ctx: Cmos_switch_instanceContext): void;
	/**
	 * Enter a parse tree produced by `VParser.enable_gate_instance`.
	 * @param ctx the parse tree
	 */
	enterEnable_gate_instance?(ctx: Enable_gate_instanceContext): void;
	/**
	 * Exit a parse tree produced by `VParser.enable_gate_instance`.
	 * @param ctx the parse tree
	 */
	exitEnable_gate_instance?(ctx: Enable_gate_instanceContext): void;
	/**
	 * Enter a parse tree produced by `VParser.mos_switch_instance`.
	 * @param ctx the parse tree
	 */
	enterMos_switch_instance?(ctx: Mos_switch_instanceContext): void;
	/**
	 * Exit a parse tree produced by `VParser.mos_switch_instance`.
	 * @param ctx the parse tree
	 */
	exitMos_switch_instance?(ctx: Mos_switch_instanceContext): void;
	/**
	 * Enter a parse tree produced by `VParser.n_input_gate_instance`.
	 * @param ctx the parse tree
	 */
	enterN_input_gate_instance?(ctx: N_input_gate_instanceContext): void;
	/**
	 * Exit a parse tree produced by `VParser.n_input_gate_instance`.
	 * @param ctx the parse tree
	 */
	exitN_input_gate_instance?(ctx: N_input_gate_instanceContext): void;
	/**
	 * Enter a parse tree produced by `VParser.n_output_gate_instance`.
	 * @param ctx the parse tree
	 */
	enterN_output_gate_instance?(ctx: N_output_gate_instanceContext): void;
	/**
	 * Exit a parse tree produced by `VParser.n_output_gate_instance`.
	 * @param ctx the parse tree
	 */
	exitN_output_gate_instance?(ctx: N_output_gate_instanceContext): void;
	/**
	 * Enter a parse tree produced by `VParser.pass_switch_instance`.
	 * @param ctx the parse tree
	 */
	enterPass_switch_instance?(ctx: Pass_switch_instanceContext): void;
	/**
	 * Exit a parse tree produced by `VParser.pass_switch_instance`.
	 * @param ctx the parse tree
	 */
	exitPass_switch_instance?(ctx: Pass_switch_instanceContext): void;
	/**
	 * Enter a parse tree produced by `VParser.pass_enable_switch_instance`.
	 * @param ctx the parse tree
	 */
	enterPass_enable_switch_instance?(ctx: Pass_enable_switch_instanceContext): void;
	/**
	 * Exit a parse tree produced by `VParser.pass_enable_switch_instance`.
	 * @param ctx the parse tree
	 */
	exitPass_enable_switch_instance?(ctx: Pass_enable_switch_instanceContext): void;
	/**
	 * Enter a parse tree produced by `VParser.pull_gate_instance`.
	 * @param ctx the parse tree
	 */
	enterPull_gate_instance?(ctx: Pull_gate_instanceContext): void;
	/**
	 * Exit a parse tree produced by `VParser.pull_gate_instance`.
	 * @param ctx the parse tree
	 */
	exitPull_gate_instance?(ctx: Pull_gate_instanceContext): void;
	/**
	 * Enter a parse tree produced by `VParser.name_of_gate_instance`.
	 * @param ctx the parse tree
	 */
	enterName_of_gate_instance?(ctx: Name_of_gate_instanceContext): void;
	/**
	 * Exit a parse tree produced by `VParser.name_of_gate_instance`.
	 * @param ctx the parse tree
	 */
	exitName_of_gate_instance?(ctx: Name_of_gate_instanceContext): void;
	/**
	 * Enter a parse tree produced by `VParser.pulldown_strength`.
	 * @param ctx the parse tree
	 */
	enterPulldown_strength?(ctx: Pulldown_strengthContext): void;
	/**
	 * Exit a parse tree produced by `VParser.pulldown_strength`.
	 * @param ctx the parse tree
	 */
	exitPulldown_strength?(ctx: Pulldown_strengthContext): void;
	/**
	 * Enter a parse tree produced by `VParser.pullup_strength`.
	 * @param ctx the parse tree
	 */
	enterPullup_strength?(ctx: Pullup_strengthContext): void;
	/**
	 * Exit a parse tree produced by `VParser.pullup_strength`.
	 * @param ctx the parse tree
	 */
	exitPullup_strength?(ctx: Pullup_strengthContext): void;
	/**
	 * Enter a parse tree produced by `VParser.enable_terminal`.
	 * @param ctx the parse tree
	 */
	enterEnable_terminal?(ctx: Enable_terminalContext): void;
	/**
	 * Exit a parse tree produced by `VParser.enable_terminal`.
	 * @param ctx the parse tree
	 */
	exitEnable_terminal?(ctx: Enable_terminalContext): void;
	/**
	 * Enter a parse tree produced by `VParser.inout_terminal`.
	 * @param ctx the parse tree
	 */
	enterInout_terminal?(ctx: Inout_terminalContext): void;
	/**
	 * Exit a parse tree produced by `VParser.inout_terminal`.
	 * @param ctx the parse tree
	 */
	exitInout_terminal?(ctx: Inout_terminalContext): void;
	/**
	 * Enter a parse tree produced by `VParser.input_terminal`.
	 * @param ctx the parse tree
	 */
	enterInput_terminal?(ctx: Input_terminalContext): void;
	/**
	 * Exit a parse tree produced by `VParser.input_terminal`.
	 * @param ctx the parse tree
	 */
	exitInput_terminal?(ctx: Input_terminalContext): void;
	/**
	 * Enter a parse tree produced by `VParser.ncontrol_terminal`.
	 * @param ctx the parse tree
	 */
	enterNcontrol_terminal?(ctx: Ncontrol_terminalContext): void;
	/**
	 * Exit a parse tree produced by `VParser.ncontrol_terminal`.
	 * @param ctx the parse tree
	 */
	exitNcontrol_terminal?(ctx: Ncontrol_terminalContext): void;
	/**
	 * Enter a parse tree produced by `VParser.output_terminal`.
	 * @param ctx the parse tree
	 */
	enterOutput_terminal?(ctx: Output_terminalContext): void;
	/**
	 * Exit a parse tree produced by `VParser.output_terminal`.
	 * @param ctx the parse tree
	 */
	exitOutput_terminal?(ctx: Output_terminalContext): void;
	/**
	 * Enter a parse tree produced by `VParser.pcontrol_terminal`.
	 * @param ctx the parse tree
	 */
	enterPcontrol_terminal?(ctx: Pcontrol_terminalContext): void;
	/**
	 * Exit a parse tree produced by `VParser.pcontrol_terminal`.
	 * @param ctx the parse tree
	 */
	exitPcontrol_terminal?(ctx: Pcontrol_terminalContext): void;
	/**
	 * Enter a parse tree produced by `VParser.cmos_switchtype`.
	 * @param ctx the parse tree
	 */
	enterCmos_switchtype?(ctx: Cmos_switchtypeContext): void;
	/**
	 * Exit a parse tree produced by `VParser.cmos_switchtype`.
	 * @param ctx the parse tree
	 */
	exitCmos_switchtype?(ctx: Cmos_switchtypeContext): void;
	/**
	 * Enter a parse tree produced by `VParser.enable_gatetype`.
	 * @param ctx the parse tree
	 */
	enterEnable_gatetype?(ctx: Enable_gatetypeContext): void;
	/**
	 * Exit a parse tree produced by `VParser.enable_gatetype`.
	 * @param ctx the parse tree
	 */
	exitEnable_gatetype?(ctx: Enable_gatetypeContext): void;
	/**
	 * Enter a parse tree produced by `VParser.mos_switchtype`.
	 * @param ctx the parse tree
	 */
	enterMos_switchtype?(ctx: Mos_switchtypeContext): void;
	/**
	 * Exit a parse tree produced by `VParser.mos_switchtype`.
	 * @param ctx the parse tree
	 */
	exitMos_switchtype?(ctx: Mos_switchtypeContext): void;
	/**
	 * Enter a parse tree produced by `VParser.n_input_gatetype`.
	 * @param ctx the parse tree
	 */
	enterN_input_gatetype?(ctx: N_input_gatetypeContext): void;
	/**
	 * Exit a parse tree produced by `VParser.n_input_gatetype`.
	 * @param ctx the parse tree
	 */
	exitN_input_gatetype?(ctx: N_input_gatetypeContext): void;
	/**
	 * Enter a parse tree produced by `VParser.n_output_gatetype`.
	 * @param ctx the parse tree
	 */
	enterN_output_gatetype?(ctx: N_output_gatetypeContext): void;
	/**
	 * Exit a parse tree produced by `VParser.n_output_gatetype`.
	 * @param ctx the parse tree
	 */
	exitN_output_gatetype?(ctx: N_output_gatetypeContext): void;
	/**
	 * Enter a parse tree produced by `VParser.pass_en_switchtype`.
	 * @param ctx the parse tree
	 */
	enterPass_en_switchtype?(ctx: Pass_en_switchtypeContext): void;
	/**
	 * Exit a parse tree produced by `VParser.pass_en_switchtype`.
	 * @param ctx the parse tree
	 */
	exitPass_en_switchtype?(ctx: Pass_en_switchtypeContext): void;
	/**
	 * Enter a parse tree produced by `VParser.pass_switchtype`.
	 * @param ctx the parse tree
	 */
	enterPass_switchtype?(ctx: Pass_switchtypeContext): void;
	/**
	 * Exit a parse tree produced by `VParser.pass_switchtype`.
	 * @param ctx the parse tree
	 */
	exitPass_switchtype?(ctx: Pass_switchtypeContext): void;
	/**
	 * Enter a parse tree produced by `VParser.module_instantiation`.
	 * @param ctx the parse tree
	 */
	enterModule_instantiation?(ctx: Module_instantiationContext): void;
	/**
	 * Exit a parse tree produced by `VParser.module_instantiation`.
	 * @param ctx the parse tree
	 */
	exitModule_instantiation?(ctx: Module_instantiationContext): void;
	/**
	 * Enter a parse tree produced by `VParser.parameter_value_assignment`.
	 * @param ctx the parse tree
	 */
	enterParameter_value_assignment?(ctx: Parameter_value_assignmentContext): void;
	/**
	 * Exit a parse tree produced by `VParser.parameter_value_assignment`.
	 * @param ctx the parse tree
	 */
	exitParameter_value_assignment?(ctx: Parameter_value_assignmentContext): void;
	/**
	 * Enter a parse tree produced by `VParser.list_of_parameter_assignments`.
	 * @param ctx the parse tree
	 */
	enterList_of_parameter_assignments?(ctx: List_of_parameter_assignmentsContext): void;
	/**
	 * Exit a parse tree produced by `VParser.list_of_parameter_assignments`.
	 * @param ctx the parse tree
	 */
	exitList_of_parameter_assignments?(ctx: List_of_parameter_assignmentsContext): void;
	/**
	 * Enter a parse tree produced by `VParser.ordered_parameter_assignment`.
	 * @param ctx the parse tree
	 */
	enterOrdered_parameter_assignment?(ctx: Ordered_parameter_assignmentContext): void;
	/**
	 * Exit a parse tree produced by `VParser.ordered_parameter_assignment`.
	 * @param ctx the parse tree
	 */
	exitOrdered_parameter_assignment?(ctx: Ordered_parameter_assignmentContext): void;
	/**
	 * Enter a parse tree produced by `VParser.named_parameter_assignment`.
	 * @param ctx the parse tree
	 */
	enterNamed_parameter_assignment?(ctx: Named_parameter_assignmentContext): void;
	/**
	 * Exit a parse tree produced by `VParser.named_parameter_assignment`.
	 * @param ctx the parse tree
	 */
	exitNamed_parameter_assignment?(ctx: Named_parameter_assignmentContext): void;
	/**
	 * Enter a parse tree produced by `VParser.module_instance`.
	 * @param ctx the parse tree
	 */
	enterModule_instance?(ctx: Module_instanceContext): void;
	/**
	 * Exit a parse tree produced by `VParser.module_instance`.
	 * @param ctx the parse tree
	 */
	exitModule_instance?(ctx: Module_instanceContext): void;
	/**
	 * Enter a parse tree produced by `VParser.name_of_module_instance`.
	 * @param ctx the parse tree
	 */
	enterName_of_module_instance?(ctx: Name_of_module_instanceContext): void;
	/**
	 * Exit a parse tree produced by `VParser.name_of_module_instance`.
	 * @param ctx the parse tree
	 */
	exitName_of_module_instance?(ctx: Name_of_module_instanceContext): void;
	/**
	 * Enter a parse tree produced by `VParser.list_of_port_connections`.
	 * @param ctx the parse tree
	 */
	enterList_of_port_connections?(ctx: List_of_port_connectionsContext): void;
	/**
	 * Exit a parse tree produced by `VParser.list_of_port_connections`.
	 * @param ctx the parse tree
	 */
	exitList_of_port_connections?(ctx: List_of_port_connectionsContext): void;
	/**
	 * Enter a parse tree produced by `VParser.ordered_port_connection`.
	 * @param ctx the parse tree
	 */
	enterOrdered_port_connection?(ctx: Ordered_port_connectionContext): void;
	/**
	 * Exit a parse tree produced by `VParser.ordered_port_connection`.
	 * @param ctx the parse tree
	 */
	exitOrdered_port_connection?(ctx: Ordered_port_connectionContext): void;
	/**
	 * Enter a parse tree produced by `VParser.named_port_connection`.
	 * @param ctx the parse tree
	 */
	enterNamed_port_connection?(ctx: Named_port_connectionContext): void;
	/**
	 * Exit a parse tree produced by `VParser.named_port_connection`.
	 * @param ctx the parse tree
	 */
	exitNamed_port_connection?(ctx: Named_port_connectionContext): void;
	/**
	 * Enter a parse tree produced by `VParser.generate_region`.
	 * @param ctx the parse tree
	 */
	enterGenerate_region?(ctx: Generate_regionContext): void;
	/**
	 * Exit a parse tree produced by `VParser.generate_region`.
	 * @param ctx the parse tree
	 */
	exitGenerate_region?(ctx: Generate_regionContext): void;
	/**
	 * Enter a parse tree produced by `VParser.genvar_declaration`.
	 * @param ctx the parse tree
	 */
	enterGenvar_declaration?(ctx: Genvar_declarationContext): void;
	/**
	 * Exit a parse tree produced by `VParser.genvar_declaration`.
	 * @param ctx the parse tree
	 */
	exitGenvar_declaration?(ctx: Genvar_declarationContext): void;
	/**
	 * Enter a parse tree produced by `VParser.list_of_genvar_identifiers`.
	 * @param ctx the parse tree
	 */
	enterList_of_genvar_identifiers?(ctx: List_of_genvar_identifiersContext): void;
	/**
	 * Exit a parse tree produced by `VParser.list_of_genvar_identifiers`.
	 * @param ctx the parse tree
	 */
	exitList_of_genvar_identifiers?(ctx: List_of_genvar_identifiersContext): void;
	/**
	 * Enter a parse tree produced by `VParser.loop_generate_construct`.
	 * @param ctx the parse tree
	 */
	enterLoop_generate_construct?(ctx: Loop_generate_constructContext): void;
	/**
	 * Exit a parse tree produced by `VParser.loop_generate_construct`.
	 * @param ctx the parse tree
	 */
	exitLoop_generate_construct?(ctx: Loop_generate_constructContext): void;
	/**
	 * Enter a parse tree produced by `VParser.genvar_initialization`.
	 * @param ctx the parse tree
	 */
	enterGenvar_initialization?(ctx: Genvar_initializationContext): void;
	/**
	 * Exit a parse tree produced by `VParser.genvar_initialization`.
	 * @param ctx the parse tree
	 */
	exitGenvar_initialization?(ctx: Genvar_initializationContext): void;
	/**
	 * Enter a parse tree produced by `VParser.genvar_expression`.
	 * @param ctx the parse tree
	 */
	enterGenvar_expression?(ctx: Genvar_expressionContext): void;
	/**
	 * Exit a parse tree produced by `VParser.genvar_expression`.
	 * @param ctx the parse tree
	 */
	exitGenvar_expression?(ctx: Genvar_expressionContext): void;
	/**
	 * Enter a parse tree produced by `VParser.genvar_iteration`.
	 * @param ctx the parse tree
	 */
	enterGenvar_iteration?(ctx: Genvar_iterationContext): void;
	/**
	 * Exit a parse tree produced by `VParser.genvar_iteration`.
	 * @param ctx the parse tree
	 */
	exitGenvar_iteration?(ctx: Genvar_iterationContext): void;
	/**
	 * Enter a parse tree produced by `VParser.genvar_primary`.
	 * @param ctx the parse tree
	 */
	enterGenvar_primary?(ctx: Genvar_primaryContext): void;
	/**
	 * Exit a parse tree produced by `VParser.genvar_primary`.
	 * @param ctx the parse tree
	 */
	exitGenvar_primary?(ctx: Genvar_primaryContext): void;
	/**
	 * Enter a parse tree produced by `VParser.conditional_generate_construct`.
	 * @param ctx the parse tree
	 */
	enterConditional_generate_construct?(ctx: Conditional_generate_constructContext): void;
	/**
	 * Exit a parse tree produced by `VParser.conditional_generate_construct`.
	 * @param ctx the parse tree
	 */
	exitConditional_generate_construct?(ctx: Conditional_generate_constructContext): void;
	/**
	 * Enter a parse tree produced by `VParser.if_generate_construct`.
	 * @param ctx the parse tree
	 */
	enterIf_generate_construct?(ctx: If_generate_constructContext): void;
	/**
	 * Exit a parse tree produced by `VParser.if_generate_construct`.
	 * @param ctx the parse tree
	 */
	exitIf_generate_construct?(ctx: If_generate_constructContext): void;
	/**
	 * Enter a parse tree produced by `VParser.case_generate_construct`.
	 * @param ctx the parse tree
	 */
	enterCase_generate_construct?(ctx: Case_generate_constructContext): void;
	/**
	 * Exit a parse tree produced by `VParser.case_generate_construct`.
	 * @param ctx the parse tree
	 */
	exitCase_generate_construct?(ctx: Case_generate_constructContext): void;
	/**
	 * Enter a parse tree produced by `VParser.case_generate_item`.
	 * @param ctx the parse tree
	 */
	enterCase_generate_item?(ctx: Case_generate_itemContext): void;
	/**
	 * Exit a parse tree produced by `VParser.case_generate_item`.
	 * @param ctx the parse tree
	 */
	exitCase_generate_item?(ctx: Case_generate_itemContext): void;
	/**
	 * Enter a parse tree produced by `VParser.generate_block`.
	 * @param ctx the parse tree
	 */
	enterGenerate_block?(ctx: Generate_blockContext): void;
	/**
	 * Exit a parse tree produced by `VParser.generate_block`.
	 * @param ctx the parse tree
	 */
	exitGenerate_block?(ctx: Generate_blockContext): void;
	/**
	 * Enter a parse tree produced by `VParser.generate_block_or_null`.
	 * @param ctx the parse tree
	 */
	enterGenerate_block_or_null?(ctx: Generate_block_or_nullContext): void;
	/**
	 * Exit a parse tree produced by `VParser.generate_block_or_null`.
	 * @param ctx the parse tree
	 */
	exitGenerate_block_or_null?(ctx: Generate_block_or_nullContext): void;
	/**
	 * Enter a parse tree produced by `VParser.continuous_assign`.
	 * @param ctx the parse tree
	 */
	enterContinuous_assign?(ctx: Continuous_assignContext): void;
	/**
	 * Exit a parse tree produced by `VParser.continuous_assign`.
	 * @param ctx the parse tree
	 */
	exitContinuous_assign?(ctx: Continuous_assignContext): void;
	/**
	 * Enter a parse tree produced by `VParser.list_of_net_assignments`.
	 * @param ctx the parse tree
	 */
	enterList_of_net_assignments?(ctx: List_of_net_assignmentsContext): void;
	/**
	 * Exit a parse tree produced by `VParser.list_of_net_assignments`.
	 * @param ctx the parse tree
	 */
	exitList_of_net_assignments?(ctx: List_of_net_assignmentsContext): void;
	/**
	 * Enter a parse tree produced by `VParser.net_assignment`.
	 * @param ctx the parse tree
	 */
	enterNet_assignment?(ctx: Net_assignmentContext): void;
	/**
	 * Exit a parse tree produced by `VParser.net_assignment`.
	 * @param ctx the parse tree
	 */
	exitNet_assignment?(ctx: Net_assignmentContext): void;
	/**
	 * Enter a parse tree produced by `VParser.initial_construct`.
	 * @param ctx the parse tree
	 */
	enterInitial_construct?(ctx: Initial_constructContext): void;
	/**
	 * Exit a parse tree produced by `VParser.initial_construct`.
	 * @param ctx the parse tree
	 */
	exitInitial_construct?(ctx: Initial_constructContext): void;
	/**
	 * Enter a parse tree produced by `VParser.always_construct`.
	 * @param ctx the parse tree
	 */
	enterAlways_construct?(ctx: Always_constructContext): void;
	/**
	 * Exit a parse tree produced by `VParser.always_construct`.
	 * @param ctx the parse tree
	 */
	exitAlways_construct?(ctx: Always_constructContext): void;
	/**
	 * Enter a parse tree produced by `VParser.blocking_assignment`.
	 * @param ctx the parse tree
	 */
	enterBlocking_assignment?(ctx: Blocking_assignmentContext): void;
	/**
	 * Exit a parse tree produced by `VParser.blocking_assignment`.
	 * @param ctx the parse tree
	 */
	exitBlocking_assignment?(ctx: Blocking_assignmentContext): void;
	/**
	 * Enter a parse tree produced by `VParser.nonblocking_assignment`.
	 * @param ctx the parse tree
	 */
	enterNonblocking_assignment?(ctx: Nonblocking_assignmentContext): void;
	/**
	 * Exit a parse tree produced by `VParser.nonblocking_assignment`.
	 * @param ctx the parse tree
	 */
	exitNonblocking_assignment?(ctx: Nonblocking_assignmentContext): void;
	/**
	 * Enter a parse tree produced by `VParser.procedural_continuous_assignments`.
	 * @param ctx the parse tree
	 */
	enterProcedural_continuous_assignments?(ctx: Procedural_continuous_assignmentsContext): void;
	/**
	 * Exit a parse tree produced by `VParser.procedural_continuous_assignments`.
	 * @param ctx the parse tree
	 */
	exitProcedural_continuous_assignments?(ctx: Procedural_continuous_assignmentsContext): void;
	/**
	 * Enter a parse tree produced by `VParser.variable_assignment`.
	 * @param ctx the parse tree
	 */
	enterVariable_assignment?(ctx: Variable_assignmentContext): void;
	/**
	 * Exit a parse tree produced by `VParser.variable_assignment`.
	 * @param ctx the parse tree
	 */
	exitVariable_assignment?(ctx: Variable_assignmentContext): void;
	/**
	 * Enter a parse tree produced by `VParser.par_block`.
	 * @param ctx the parse tree
	 */
	enterPar_block?(ctx: Par_blockContext): void;
	/**
	 * Exit a parse tree produced by `VParser.par_block`.
	 * @param ctx the parse tree
	 */
	exitPar_block?(ctx: Par_blockContext): void;
	/**
	 * Enter a parse tree produced by `VParser.seq_block`.
	 * @param ctx the parse tree
	 */
	enterSeq_block?(ctx: Seq_blockContext): void;
	/**
	 * Exit a parse tree produced by `VParser.seq_block`.
	 * @param ctx the parse tree
	 */
	exitSeq_block?(ctx: Seq_blockContext): void;
	/**
	 * Enter a parse tree produced by `VParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?(ctx: StatementContext): void;
	/**
	 * Exit a parse tree produced by `VParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?(ctx: StatementContext): void;
	/**
	 * Enter a parse tree produced by `VParser.statement_or_null`.
	 * @param ctx the parse tree
	 */
	enterStatement_or_null?(ctx: Statement_or_nullContext): void;
	/**
	 * Exit a parse tree produced by `VParser.statement_or_null`.
	 * @param ctx the parse tree
	 */
	exitStatement_or_null?(ctx: Statement_or_nullContext): void;
	/**
	 * Enter a parse tree produced by `VParser.function_statement`.
	 * @param ctx the parse tree
	 */
	enterFunction_statement?(ctx: Function_statementContext): void;
	/**
	 * Exit a parse tree produced by `VParser.function_statement`.
	 * @param ctx the parse tree
	 */
	exitFunction_statement?(ctx: Function_statementContext): void;
	/**
	 * Enter a parse tree produced by `VParser.delay_control`.
	 * @param ctx the parse tree
	 */
	enterDelay_control?(ctx: Delay_controlContext): void;
	/**
	 * Exit a parse tree produced by `VParser.delay_control`.
	 * @param ctx the parse tree
	 */
	exitDelay_control?(ctx: Delay_controlContext): void;
	/**
	 * Enter a parse tree produced by `VParser.delay_or_event_control`.
	 * @param ctx the parse tree
	 */
	enterDelay_or_event_control?(ctx: Delay_or_event_controlContext): void;
	/**
	 * Exit a parse tree produced by `VParser.delay_or_event_control`.
	 * @param ctx the parse tree
	 */
	exitDelay_or_event_control?(ctx: Delay_or_event_controlContext): void;
	/**
	 * Enter a parse tree produced by `VParser.disable_statement`.
	 * @param ctx the parse tree
	 */
	enterDisable_statement?(ctx: Disable_statementContext): void;
	/**
	 * Exit a parse tree produced by `VParser.disable_statement`.
	 * @param ctx the parse tree
	 */
	exitDisable_statement?(ctx: Disable_statementContext): void;
	/**
	 * Enter a parse tree produced by `VParser.event_control`.
	 * @param ctx the parse tree
	 */
	enterEvent_control?(ctx: Event_controlContext): void;
	/**
	 * Exit a parse tree produced by `VParser.event_control`.
	 * @param ctx the parse tree
	 */
	exitEvent_control?(ctx: Event_controlContext): void;
	/**
	 * Enter a parse tree produced by `VParser.event_trigger`.
	 * @param ctx the parse tree
	 */
	enterEvent_trigger?(ctx: Event_triggerContext): void;
	/**
	 * Exit a parse tree produced by `VParser.event_trigger`.
	 * @param ctx the parse tree
	 */
	exitEvent_trigger?(ctx: Event_triggerContext): void;
	/**
	 * Enter a parse tree produced by `VParser.edge_type`.
	 * @param ctx the parse tree
	 */
	enterEdge_type?(ctx: Edge_typeContext): void;
	/**
	 * Exit a parse tree produced by `VParser.edge_type`.
	 * @param ctx the parse tree
	 */
	exitEdge_type?(ctx: Edge_typeContext): void;
	/**
	 * Enter a parse tree produced by `VParser.event_expression`.
	 * @param ctx the parse tree
	 */
	enterEvent_expression?(ctx: Event_expressionContext): void;
	/**
	 * Exit a parse tree produced by `VParser.event_expression`.
	 * @param ctx the parse tree
	 */
	exitEvent_expression?(ctx: Event_expressionContext): void;
	/**
	 * Enter a parse tree produced by `VParser.procedural_timing_control`.
	 * @param ctx the parse tree
	 */
	enterProcedural_timing_control?(ctx: Procedural_timing_controlContext): void;
	/**
	 * Exit a parse tree produced by `VParser.procedural_timing_control`.
	 * @param ctx the parse tree
	 */
	exitProcedural_timing_control?(ctx: Procedural_timing_controlContext): void;
	/**
	 * Enter a parse tree produced by `VParser.procedural_timing_control_statement`.
	 * @param ctx the parse tree
	 */
	enterProcedural_timing_control_statement?(ctx: Procedural_timing_control_statementContext): void;
	/**
	 * Exit a parse tree produced by `VParser.procedural_timing_control_statement`.
	 * @param ctx the parse tree
	 */
	exitProcedural_timing_control_statement?(ctx: Procedural_timing_control_statementContext): void;
	/**
	 * Enter a parse tree produced by `VParser.wait_statement`.
	 * @param ctx the parse tree
	 */
	enterWait_statement?(ctx: Wait_statementContext): void;
	/**
	 * Exit a parse tree produced by `VParser.wait_statement`.
	 * @param ctx the parse tree
	 */
	exitWait_statement?(ctx: Wait_statementContext): void;
	/**
	 * Enter a parse tree produced by `VParser.conditional_statement`.
	 * @param ctx the parse tree
	 */
	enterConditional_statement?(ctx: Conditional_statementContext): void;
	/**
	 * Exit a parse tree produced by `VParser.conditional_statement`.
	 * @param ctx the parse tree
	 */
	exitConditional_statement?(ctx: Conditional_statementContext): void;
	/**
	 * Enter a parse tree produced by `VParser.case_statement`.
	 * @param ctx the parse tree
	 */
	enterCase_statement?(ctx: Case_statementContext): void;
	/**
	 * Exit a parse tree produced by `VParser.case_statement`.
	 * @param ctx the parse tree
	 */
	exitCase_statement?(ctx: Case_statementContext): void;
	/**
	 * Enter a parse tree produced by `VParser.case_item`.
	 * @param ctx the parse tree
	 */
	enterCase_item?(ctx: Case_itemContext): void;
	/**
	 * Exit a parse tree produced by `VParser.case_item`.
	 * @param ctx the parse tree
	 */
	exitCase_item?(ctx: Case_itemContext): void;
	/**
	 * Enter a parse tree produced by `VParser.loop_statement`.
	 * @param ctx the parse tree
	 */
	enterLoop_statement?(ctx: Loop_statementContext): void;
	/**
	 * Exit a parse tree produced by `VParser.loop_statement`.
	 * @param ctx the parse tree
	 */
	exitLoop_statement?(ctx: Loop_statementContext): void;
	/**
	 * Enter a parse tree produced by `VParser.system_task_enable`.
	 * @param ctx the parse tree
	 */
	enterSystem_task_enable?(ctx: System_task_enableContext): void;
	/**
	 * Exit a parse tree produced by `VParser.system_task_enable`.
	 * @param ctx the parse tree
	 */
	exitSystem_task_enable?(ctx: System_task_enableContext): void;
	/**
	 * Enter a parse tree produced by `VParser.task_enable`.
	 * @param ctx the parse tree
	 */
	enterTask_enable?(ctx: Task_enableContext): void;
	/**
	 * Exit a parse tree produced by `VParser.task_enable`.
	 * @param ctx the parse tree
	 */
	exitTask_enable?(ctx: Task_enableContext): void;
	/**
	 * Enter a parse tree produced by `VParser.specify_block`.
	 * @param ctx the parse tree
	 */
	enterSpecify_block?(ctx: Specify_blockContext): void;
	/**
	 * Exit a parse tree produced by `VParser.specify_block`.
	 * @param ctx the parse tree
	 */
	exitSpecify_block?(ctx: Specify_blockContext): void;
	/**
	 * Enter a parse tree produced by `VParser.specify_item`.
	 * @param ctx the parse tree
	 */
	enterSpecify_item?(ctx: Specify_itemContext): void;
	/**
	 * Exit a parse tree produced by `VParser.specify_item`.
	 * @param ctx the parse tree
	 */
	exitSpecify_item?(ctx: Specify_itemContext): void;
	/**
	 * Enter a parse tree produced by `VParser.pulsestyle_declaration`.
	 * @param ctx the parse tree
	 */
	enterPulsestyle_declaration?(ctx: Pulsestyle_declarationContext): void;
	/**
	 * Exit a parse tree produced by `VParser.pulsestyle_declaration`.
	 * @param ctx the parse tree
	 */
	exitPulsestyle_declaration?(ctx: Pulsestyle_declarationContext): void;
	/**
	 * Enter a parse tree produced by `VParser.showcancelled_declaration`.
	 * @param ctx the parse tree
	 */
	enterShowcancelled_declaration?(ctx: Showcancelled_declarationContext): void;
	/**
	 * Exit a parse tree produced by `VParser.showcancelled_declaration`.
	 * @param ctx the parse tree
	 */
	exitShowcancelled_declaration?(ctx: Showcancelled_declarationContext): void;
	/**
	 * Enter a parse tree produced by `VParser.path_declaration`.
	 * @param ctx the parse tree
	 */
	enterPath_declaration?(ctx: Path_declarationContext): void;
	/**
	 * Exit a parse tree produced by `VParser.path_declaration`.
	 * @param ctx the parse tree
	 */
	exitPath_declaration?(ctx: Path_declarationContext): void;
	/**
	 * Enter a parse tree produced by `VParser.simple_path_declaration`.
	 * @param ctx the parse tree
	 */
	enterSimple_path_declaration?(ctx: Simple_path_declarationContext): void;
	/**
	 * Exit a parse tree produced by `VParser.simple_path_declaration`.
	 * @param ctx the parse tree
	 */
	exitSimple_path_declaration?(ctx: Simple_path_declarationContext): void;
	/**
	 * Enter a parse tree produced by `VParser.parallel_path_description`.
	 * @param ctx the parse tree
	 */
	enterParallel_path_description?(ctx: Parallel_path_descriptionContext): void;
	/**
	 * Exit a parse tree produced by `VParser.parallel_path_description`.
	 * @param ctx the parse tree
	 */
	exitParallel_path_description?(ctx: Parallel_path_descriptionContext): void;
	/**
	 * Enter a parse tree produced by `VParser.full_path_description`.
	 * @param ctx the parse tree
	 */
	enterFull_path_description?(ctx: Full_path_descriptionContext): void;
	/**
	 * Exit a parse tree produced by `VParser.full_path_description`.
	 * @param ctx the parse tree
	 */
	exitFull_path_description?(ctx: Full_path_descriptionContext): void;
	/**
	 * Enter a parse tree produced by `VParser.list_of_path_inputs`.
	 * @param ctx the parse tree
	 */
	enterList_of_path_inputs?(ctx: List_of_path_inputsContext): void;
	/**
	 * Exit a parse tree produced by `VParser.list_of_path_inputs`.
	 * @param ctx the parse tree
	 */
	exitList_of_path_inputs?(ctx: List_of_path_inputsContext): void;
	/**
	 * Enter a parse tree produced by `VParser.list_of_path_outputs`.
	 * @param ctx the parse tree
	 */
	enterList_of_path_outputs?(ctx: List_of_path_outputsContext): void;
	/**
	 * Exit a parse tree produced by `VParser.list_of_path_outputs`.
	 * @param ctx the parse tree
	 */
	exitList_of_path_outputs?(ctx: List_of_path_outputsContext): void;
	/**
	 * Enter a parse tree produced by `VParser.specify_input_terminal_descriptor`.
	 * @param ctx the parse tree
	 */
	enterSpecify_input_terminal_descriptor?(ctx: Specify_input_terminal_descriptorContext): void;
	/**
	 * Exit a parse tree produced by `VParser.specify_input_terminal_descriptor`.
	 * @param ctx the parse tree
	 */
	exitSpecify_input_terminal_descriptor?(ctx: Specify_input_terminal_descriptorContext): void;
	/**
	 * Enter a parse tree produced by `VParser.specify_output_terminal_descriptor`.
	 * @param ctx the parse tree
	 */
	enterSpecify_output_terminal_descriptor?(ctx: Specify_output_terminal_descriptorContext): void;
	/**
	 * Exit a parse tree produced by `VParser.specify_output_terminal_descriptor`.
	 * @param ctx the parse tree
	 */
	exitSpecify_output_terminal_descriptor?(ctx: Specify_output_terminal_descriptorContext): void;
	/**
	 * Enter a parse tree produced by `VParser.input_identifier`.
	 * @param ctx the parse tree
	 */
	enterInput_identifier?(ctx: Input_identifierContext): void;
	/**
	 * Exit a parse tree produced by `VParser.input_identifier`.
	 * @param ctx the parse tree
	 */
	exitInput_identifier?(ctx: Input_identifierContext): void;
	/**
	 * Enter a parse tree produced by `VParser.output_identifier`.
	 * @param ctx the parse tree
	 */
	enterOutput_identifier?(ctx: Output_identifierContext): void;
	/**
	 * Exit a parse tree produced by `VParser.output_identifier`.
	 * @param ctx the parse tree
	 */
	exitOutput_identifier?(ctx: Output_identifierContext): void;
	/**
	 * Enter a parse tree produced by `VParser.path_delay_value`.
	 * @param ctx the parse tree
	 */
	enterPath_delay_value?(ctx: Path_delay_valueContext): void;
	/**
	 * Exit a parse tree produced by `VParser.path_delay_value`.
	 * @param ctx the parse tree
	 */
	exitPath_delay_value?(ctx: Path_delay_valueContext): void;
	/**
	 * Enter a parse tree produced by `VParser.list_of_path_delay_expressions`.
	 * @param ctx the parse tree
	 */
	enterList_of_path_delay_expressions?(ctx: List_of_path_delay_expressionsContext): void;
	/**
	 * Exit a parse tree produced by `VParser.list_of_path_delay_expressions`.
	 * @param ctx the parse tree
	 */
	exitList_of_path_delay_expressions?(ctx: List_of_path_delay_expressionsContext): void;
	/**
	 * Enter a parse tree produced by `VParser.t_path_delay_expression`.
	 * @param ctx the parse tree
	 */
	enterT_path_delay_expression?(ctx: T_path_delay_expressionContext): void;
	/**
	 * Exit a parse tree produced by `VParser.t_path_delay_expression`.
	 * @param ctx the parse tree
	 */
	exitT_path_delay_expression?(ctx: T_path_delay_expressionContext): void;
	/**
	 * Enter a parse tree produced by `VParser.trise_path_delay_expression`.
	 * @param ctx the parse tree
	 */
	enterTrise_path_delay_expression?(ctx: Trise_path_delay_expressionContext): void;
	/**
	 * Exit a parse tree produced by `VParser.trise_path_delay_expression`.
	 * @param ctx the parse tree
	 */
	exitTrise_path_delay_expression?(ctx: Trise_path_delay_expressionContext): void;
	/**
	 * Enter a parse tree produced by `VParser.tfall_path_delay_expression`.
	 * @param ctx the parse tree
	 */
	enterTfall_path_delay_expression?(ctx: Tfall_path_delay_expressionContext): void;
	/**
	 * Exit a parse tree produced by `VParser.tfall_path_delay_expression`.
	 * @param ctx the parse tree
	 */
	exitTfall_path_delay_expression?(ctx: Tfall_path_delay_expressionContext): void;
	/**
	 * Enter a parse tree produced by `VParser.tz_path_delay_expression`.
	 * @param ctx the parse tree
	 */
	enterTz_path_delay_expression?(ctx: Tz_path_delay_expressionContext): void;
	/**
	 * Exit a parse tree produced by `VParser.tz_path_delay_expression`.
	 * @param ctx the parse tree
	 */
	exitTz_path_delay_expression?(ctx: Tz_path_delay_expressionContext): void;
	/**
	 * Enter a parse tree produced by `VParser.t01_path_delay_expression`.
	 * @param ctx the parse tree
	 */
	enterT01_path_delay_expression?(ctx: T01_path_delay_expressionContext): void;
	/**
	 * Exit a parse tree produced by `VParser.t01_path_delay_expression`.
	 * @param ctx the parse tree
	 */
	exitT01_path_delay_expression?(ctx: T01_path_delay_expressionContext): void;
	/**
	 * Enter a parse tree produced by `VParser.t10_path_delay_expression`.
	 * @param ctx the parse tree
	 */
	enterT10_path_delay_expression?(ctx: T10_path_delay_expressionContext): void;
	/**
	 * Exit a parse tree produced by `VParser.t10_path_delay_expression`.
	 * @param ctx the parse tree
	 */
	exitT10_path_delay_expression?(ctx: T10_path_delay_expressionContext): void;
	/**
	 * Enter a parse tree produced by `VParser.t0z_path_delay_expression`.
	 * @param ctx the parse tree
	 */
	enterT0z_path_delay_expression?(ctx: T0z_path_delay_expressionContext): void;
	/**
	 * Exit a parse tree produced by `VParser.t0z_path_delay_expression`.
	 * @param ctx the parse tree
	 */
	exitT0z_path_delay_expression?(ctx: T0z_path_delay_expressionContext): void;
	/**
	 * Enter a parse tree produced by `VParser.tz1_path_delay_expression`.
	 * @param ctx the parse tree
	 */
	enterTz1_path_delay_expression?(ctx: Tz1_path_delay_expressionContext): void;
	/**
	 * Exit a parse tree produced by `VParser.tz1_path_delay_expression`.
	 * @param ctx the parse tree
	 */
	exitTz1_path_delay_expression?(ctx: Tz1_path_delay_expressionContext): void;
	/**
	 * Enter a parse tree produced by `VParser.t1z_path_delay_expression`.
	 * @param ctx the parse tree
	 */
	enterT1z_path_delay_expression?(ctx: T1z_path_delay_expressionContext): void;
	/**
	 * Exit a parse tree produced by `VParser.t1z_path_delay_expression`.
	 * @param ctx the parse tree
	 */
	exitT1z_path_delay_expression?(ctx: T1z_path_delay_expressionContext): void;
	/**
	 * Enter a parse tree produced by `VParser.tz0_path_delay_expression`.
	 * @param ctx the parse tree
	 */
	enterTz0_path_delay_expression?(ctx: Tz0_path_delay_expressionContext): void;
	/**
	 * Exit a parse tree produced by `VParser.tz0_path_delay_expression`.
	 * @param ctx the parse tree
	 */
	exitTz0_path_delay_expression?(ctx: Tz0_path_delay_expressionContext): void;
	/**
	 * Enter a parse tree produced by `VParser.t0x_path_delay_expression`.
	 * @param ctx the parse tree
	 */
	enterT0x_path_delay_expression?(ctx: T0x_path_delay_expressionContext): void;
	/**
	 * Exit a parse tree produced by `VParser.t0x_path_delay_expression`.
	 * @param ctx the parse tree
	 */
	exitT0x_path_delay_expression?(ctx: T0x_path_delay_expressionContext): void;
	/**
	 * Enter a parse tree produced by `VParser.tx1_path_delay_expression`.
	 * @param ctx the parse tree
	 */
	enterTx1_path_delay_expression?(ctx: Tx1_path_delay_expressionContext): void;
	/**
	 * Exit a parse tree produced by `VParser.tx1_path_delay_expression`.
	 * @param ctx the parse tree
	 */
	exitTx1_path_delay_expression?(ctx: Tx1_path_delay_expressionContext): void;
	/**
	 * Enter a parse tree produced by `VParser.t1x_path_delay_expression`.
	 * @param ctx the parse tree
	 */
	enterT1x_path_delay_expression?(ctx: T1x_path_delay_expressionContext): void;
	/**
	 * Exit a parse tree produced by `VParser.t1x_path_delay_expression`.
	 * @param ctx the parse tree
	 */
	exitT1x_path_delay_expression?(ctx: T1x_path_delay_expressionContext): void;
	/**
	 * Enter a parse tree produced by `VParser.tx0_path_delay_expression`.
	 * @param ctx the parse tree
	 */
	enterTx0_path_delay_expression?(ctx: Tx0_path_delay_expressionContext): void;
	/**
	 * Exit a parse tree produced by `VParser.tx0_path_delay_expression`.
	 * @param ctx the parse tree
	 */
	exitTx0_path_delay_expression?(ctx: Tx0_path_delay_expressionContext): void;
	/**
	 * Enter a parse tree produced by `VParser.txz_path_delay_expression`.
	 * @param ctx the parse tree
	 */
	enterTxz_path_delay_expression?(ctx: Txz_path_delay_expressionContext): void;
	/**
	 * Exit a parse tree produced by `VParser.txz_path_delay_expression`.
	 * @param ctx the parse tree
	 */
	exitTxz_path_delay_expression?(ctx: Txz_path_delay_expressionContext): void;
	/**
	 * Enter a parse tree produced by `VParser.tzx_path_delay_expression`.
	 * @param ctx the parse tree
	 */
	enterTzx_path_delay_expression?(ctx: Tzx_path_delay_expressionContext): void;
	/**
	 * Exit a parse tree produced by `VParser.tzx_path_delay_expression`.
	 * @param ctx the parse tree
	 */
	exitTzx_path_delay_expression?(ctx: Tzx_path_delay_expressionContext): void;
	/**
	 * Enter a parse tree produced by `VParser.path_delay_expression`.
	 * @param ctx the parse tree
	 */
	enterPath_delay_expression?(ctx: Path_delay_expressionContext): void;
	/**
	 * Exit a parse tree produced by `VParser.path_delay_expression`.
	 * @param ctx the parse tree
	 */
	exitPath_delay_expression?(ctx: Path_delay_expressionContext): void;
	/**
	 * Enter a parse tree produced by `VParser.edge_sensitive_path_declaration`.
	 * @param ctx the parse tree
	 */
	enterEdge_sensitive_path_declaration?(ctx: Edge_sensitive_path_declarationContext): void;
	/**
	 * Exit a parse tree produced by `VParser.edge_sensitive_path_declaration`.
	 * @param ctx the parse tree
	 */
	exitEdge_sensitive_path_declaration?(ctx: Edge_sensitive_path_declarationContext): void;
	/**
	 * Enter a parse tree produced by `VParser.parallel_edge_sensitive_path_description`.
	 * @param ctx the parse tree
	 */
	enterParallel_edge_sensitive_path_description?(ctx: Parallel_edge_sensitive_path_descriptionContext): void;
	/**
	 * Exit a parse tree produced by `VParser.parallel_edge_sensitive_path_description`.
	 * @param ctx the parse tree
	 */
	exitParallel_edge_sensitive_path_description?(ctx: Parallel_edge_sensitive_path_descriptionContext): void;
	/**
	 * Enter a parse tree produced by `VParser.full_edge_sensitive_path_description`.
	 * @param ctx the parse tree
	 */
	enterFull_edge_sensitive_path_description?(ctx: Full_edge_sensitive_path_descriptionContext): void;
	/**
	 * Exit a parse tree produced by `VParser.full_edge_sensitive_path_description`.
	 * @param ctx the parse tree
	 */
	exitFull_edge_sensitive_path_description?(ctx: Full_edge_sensitive_path_descriptionContext): void;
	/**
	 * Enter a parse tree produced by `VParser.data_source_expression`.
	 * @param ctx the parse tree
	 */
	enterData_source_expression?(ctx: Data_source_expressionContext): void;
	/**
	 * Exit a parse tree produced by `VParser.data_source_expression`.
	 * @param ctx the parse tree
	 */
	exitData_source_expression?(ctx: Data_source_expressionContext): void;
	/**
	 * Enter a parse tree produced by `VParser.edge_identifier`.
	 * @param ctx the parse tree
	 */
	enterEdge_identifier?(ctx: Edge_identifierContext): void;
	/**
	 * Exit a parse tree produced by `VParser.edge_identifier`.
	 * @param ctx the parse tree
	 */
	exitEdge_identifier?(ctx: Edge_identifierContext): void;
	/**
	 * Enter a parse tree produced by `VParser.state_dependent_path_declaration`.
	 * @param ctx the parse tree
	 */
	enterState_dependent_path_declaration?(ctx: State_dependent_path_declarationContext): void;
	/**
	 * Exit a parse tree produced by `VParser.state_dependent_path_declaration`.
	 * @param ctx the parse tree
	 */
	exitState_dependent_path_declaration?(ctx: State_dependent_path_declarationContext): void;
	/**
	 * Enter a parse tree produced by `VParser.polarity_operator`.
	 * @param ctx the parse tree
	 */
	enterPolarity_operator?(ctx: Polarity_operatorContext): void;
	/**
	 * Exit a parse tree produced by `VParser.polarity_operator`.
	 * @param ctx the parse tree
	 */
	exitPolarity_operator?(ctx: Polarity_operatorContext): void;
	/**
	 * Enter a parse tree produced by `VParser.system_timing_check`.
	 * @param ctx the parse tree
	 */
	enterSystem_timing_check?(ctx: System_timing_checkContext): void;
	/**
	 * Exit a parse tree produced by `VParser.system_timing_check`.
	 * @param ctx the parse tree
	 */
	exitSystem_timing_check?(ctx: System_timing_checkContext): void;
	/**
	 * Enter a parse tree produced by `VParser.setup_timing_check`.
	 * @param ctx the parse tree
	 */
	enterSetup_timing_check?(ctx: Setup_timing_checkContext): void;
	/**
	 * Exit a parse tree produced by `VParser.setup_timing_check`.
	 * @param ctx the parse tree
	 */
	exitSetup_timing_check?(ctx: Setup_timing_checkContext): void;
	/**
	 * Enter a parse tree produced by `VParser.hold_timing_check`.
	 * @param ctx the parse tree
	 */
	enterHold_timing_check?(ctx: Hold_timing_checkContext): void;
	/**
	 * Exit a parse tree produced by `VParser.hold_timing_check`.
	 * @param ctx the parse tree
	 */
	exitHold_timing_check?(ctx: Hold_timing_checkContext): void;
	/**
	 * Enter a parse tree produced by `VParser.setuphold_timing_check`.
	 * @param ctx the parse tree
	 */
	enterSetuphold_timing_check?(ctx: Setuphold_timing_checkContext): void;
	/**
	 * Exit a parse tree produced by `VParser.setuphold_timing_check`.
	 * @param ctx the parse tree
	 */
	exitSetuphold_timing_check?(ctx: Setuphold_timing_checkContext): void;
	/**
	 * Enter a parse tree produced by `VParser.recovery_timing_check`.
	 * @param ctx the parse tree
	 */
	enterRecovery_timing_check?(ctx: Recovery_timing_checkContext): void;
	/**
	 * Exit a parse tree produced by `VParser.recovery_timing_check`.
	 * @param ctx the parse tree
	 */
	exitRecovery_timing_check?(ctx: Recovery_timing_checkContext): void;
	/**
	 * Enter a parse tree produced by `VParser.removal_timing_check`.
	 * @param ctx the parse tree
	 */
	enterRemoval_timing_check?(ctx: Removal_timing_checkContext): void;
	/**
	 * Exit a parse tree produced by `VParser.removal_timing_check`.
	 * @param ctx the parse tree
	 */
	exitRemoval_timing_check?(ctx: Removal_timing_checkContext): void;
	/**
	 * Enter a parse tree produced by `VParser.recrem_timing_check`.
	 * @param ctx the parse tree
	 */
	enterRecrem_timing_check?(ctx: Recrem_timing_checkContext): void;
	/**
	 * Exit a parse tree produced by `VParser.recrem_timing_check`.
	 * @param ctx the parse tree
	 */
	exitRecrem_timing_check?(ctx: Recrem_timing_checkContext): void;
	/**
	 * Enter a parse tree produced by `VParser.skew_timing_check`.
	 * @param ctx the parse tree
	 */
	enterSkew_timing_check?(ctx: Skew_timing_checkContext): void;
	/**
	 * Exit a parse tree produced by `VParser.skew_timing_check`.
	 * @param ctx the parse tree
	 */
	exitSkew_timing_check?(ctx: Skew_timing_checkContext): void;
	/**
	 * Enter a parse tree produced by `VParser.timeskew_timing_check`.
	 * @param ctx the parse tree
	 */
	enterTimeskew_timing_check?(ctx: Timeskew_timing_checkContext): void;
	/**
	 * Exit a parse tree produced by `VParser.timeskew_timing_check`.
	 * @param ctx the parse tree
	 */
	exitTimeskew_timing_check?(ctx: Timeskew_timing_checkContext): void;
	/**
	 * Enter a parse tree produced by `VParser.fullskew_timing_check`.
	 * @param ctx the parse tree
	 */
	enterFullskew_timing_check?(ctx: Fullskew_timing_checkContext): void;
	/**
	 * Exit a parse tree produced by `VParser.fullskew_timing_check`.
	 * @param ctx the parse tree
	 */
	exitFullskew_timing_check?(ctx: Fullskew_timing_checkContext): void;
	/**
	 * Enter a parse tree produced by `VParser.period_timing_check`.
	 * @param ctx the parse tree
	 */
	enterPeriod_timing_check?(ctx: Period_timing_checkContext): void;
	/**
	 * Exit a parse tree produced by `VParser.period_timing_check`.
	 * @param ctx the parse tree
	 */
	exitPeriod_timing_check?(ctx: Period_timing_checkContext): void;
	/**
	 * Enter a parse tree produced by `VParser.width_timing_check`.
	 * @param ctx the parse tree
	 */
	enterWidth_timing_check?(ctx: Width_timing_checkContext): void;
	/**
	 * Exit a parse tree produced by `VParser.width_timing_check`.
	 * @param ctx the parse tree
	 */
	exitWidth_timing_check?(ctx: Width_timing_checkContext): void;
	/**
	 * Enter a parse tree produced by `VParser.nochange_timing_check`.
	 * @param ctx the parse tree
	 */
	enterNochange_timing_check?(ctx: Nochange_timing_checkContext): void;
	/**
	 * Exit a parse tree produced by `VParser.nochange_timing_check`.
	 * @param ctx the parse tree
	 */
	exitNochange_timing_check?(ctx: Nochange_timing_checkContext): void;
	/**
	 * Enter a parse tree produced by `VParser.checktime_condition`.
	 * @param ctx the parse tree
	 */
	enterChecktime_condition?(ctx: Checktime_conditionContext): void;
	/**
	 * Exit a parse tree produced by `VParser.checktime_condition`.
	 * @param ctx the parse tree
	 */
	exitChecktime_condition?(ctx: Checktime_conditionContext): void;
	/**
	 * Enter a parse tree produced by `VParser.controlled_reference_event`.
	 * @param ctx the parse tree
	 */
	enterControlled_reference_event?(ctx: Controlled_reference_eventContext): void;
	/**
	 * Exit a parse tree produced by `VParser.controlled_reference_event`.
	 * @param ctx the parse tree
	 */
	exitControlled_reference_event?(ctx: Controlled_reference_eventContext): void;
	/**
	 * Enter a parse tree produced by `VParser.data_event`.
	 * @param ctx the parse tree
	 */
	enterData_event?(ctx: Data_eventContext): void;
	/**
	 * Exit a parse tree produced by `VParser.data_event`.
	 * @param ctx the parse tree
	 */
	exitData_event?(ctx: Data_eventContext): void;
	/**
	 * Enter a parse tree produced by `VParser.delayed_data`.
	 * @param ctx the parse tree
	 */
	enterDelayed_data?(ctx: Delayed_dataContext): void;
	/**
	 * Exit a parse tree produced by `VParser.delayed_data`.
	 * @param ctx the parse tree
	 */
	exitDelayed_data?(ctx: Delayed_dataContext): void;
	/**
	 * Enter a parse tree produced by `VParser.delayed_reference`.
	 * @param ctx the parse tree
	 */
	enterDelayed_reference?(ctx: Delayed_referenceContext): void;
	/**
	 * Exit a parse tree produced by `VParser.delayed_reference`.
	 * @param ctx the parse tree
	 */
	exitDelayed_reference?(ctx: Delayed_referenceContext): void;
	/**
	 * Enter a parse tree produced by `VParser.end_edge_offset`.
	 * @param ctx the parse tree
	 */
	enterEnd_edge_offset?(ctx: End_edge_offsetContext): void;
	/**
	 * Exit a parse tree produced by `VParser.end_edge_offset`.
	 * @param ctx the parse tree
	 */
	exitEnd_edge_offset?(ctx: End_edge_offsetContext): void;
	/**
	 * Enter a parse tree produced by `VParser.event_based_flag`.
	 * @param ctx the parse tree
	 */
	enterEvent_based_flag?(ctx: Event_based_flagContext): void;
	/**
	 * Exit a parse tree produced by `VParser.event_based_flag`.
	 * @param ctx the parse tree
	 */
	exitEvent_based_flag?(ctx: Event_based_flagContext): void;
	/**
	 * Enter a parse tree produced by `VParser.notifier`.
	 * @param ctx the parse tree
	 */
	enterNotifier?(ctx: NotifierContext): void;
	/**
	 * Exit a parse tree produced by `VParser.notifier`.
	 * @param ctx the parse tree
	 */
	exitNotifier?(ctx: NotifierContext): void;
	/**
	 * Enter a parse tree produced by `VParser.reference_event`.
	 * @param ctx the parse tree
	 */
	enterReference_event?(ctx: Reference_eventContext): void;
	/**
	 * Exit a parse tree produced by `VParser.reference_event`.
	 * @param ctx the parse tree
	 */
	exitReference_event?(ctx: Reference_eventContext): void;
	/**
	 * Enter a parse tree produced by `VParser.remain_active_flag`.
	 * @param ctx the parse tree
	 */
	enterRemain_active_flag?(ctx: Remain_active_flagContext): void;
	/**
	 * Exit a parse tree produced by `VParser.remain_active_flag`.
	 * @param ctx the parse tree
	 */
	exitRemain_active_flag?(ctx: Remain_active_flagContext): void;
	/**
	 * Enter a parse tree produced by `VParser.stamptime_condition`.
	 * @param ctx the parse tree
	 */
	enterStamptime_condition?(ctx: Stamptime_conditionContext): void;
	/**
	 * Exit a parse tree produced by `VParser.stamptime_condition`.
	 * @param ctx the parse tree
	 */
	exitStamptime_condition?(ctx: Stamptime_conditionContext): void;
	/**
	 * Enter a parse tree produced by `VParser.start_edge_offset`.
	 * @param ctx the parse tree
	 */
	enterStart_edge_offset?(ctx: Start_edge_offsetContext): void;
	/**
	 * Exit a parse tree produced by `VParser.start_edge_offset`.
	 * @param ctx the parse tree
	 */
	exitStart_edge_offset?(ctx: Start_edge_offsetContext): void;
	/**
	 * Enter a parse tree produced by `VParser.threshold`.
	 * @param ctx the parse tree
	 */
	enterThreshold?(ctx: ThresholdContext): void;
	/**
	 * Exit a parse tree produced by `VParser.threshold`.
	 * @param ctx the parse tree
	 */
	exitThreshold?(ctx: ThresholdContext): void;
	/**
	 * Enter a parse tree produced by `VParser.timing_check_limit`.
	 * @param ctx the parse tree
	 */
	enterTiming_check_limit?(ctx: Timing_check_limitContext): void;
	/**
	 * Exit a parse tree produced by `VParser.timing_check_limit`.
	 * @param ctx the parse tree
	 */
	exitTiming_check_limit?(ctx: Timing_check_limitContext): void;
	/**
	 * Enter a parse tree produced by `VParser.timing_check_event`.
	 * @param ctx the parse tree
	 */
	enterTiming_check_event?(ctx: Timing_check_eventContext): void;
	/**
	 * Exit a parse tree produced by `VParser.timing_check_event`.
	 * @param ctx the parse tree
	 */
	exitTiming_check_event?(ctx: Timing_check_eventContext): void;
	/**
	 * Enter a parse tree produced by `VParser.controlled_timing_check_event`.
	 * @param ctx the parse tree
	 */
	enterControlled_timing_check_event?(ctx: Controlled_timing_check_eventContext): void;
	/**
	 * Exit a parse tree produced by `VParser.controlled_timing_check_event`.
	 * @param ctx the parse tree
	 */
	exitControlled_timing_check_event?(ctx: Controlled_timing_check_eventContext): void;
	/**
	 * Enter a parse tree produced by `VParser.timing_check_event_control`.
	 * @param ctx the parse tree
	 */
	enterTiming_check_event_control?(ctx: Timing_check_event_controlContext): void;
	/**
	 * Exit a parse tree produced by `VParser.timing_check_event_control`.
	 * @param ctx the parse tree
	 */
	exitTiming_check_event_control?(ctx: Timing_check_event_controlContext): void;
	/**
	 * Enter a parse tree produced by `VParser.specify_terminal_descriptor`.
	 * @param ctx the parse tree
	 */
	enterSpecify_terminal_descriptor?(ctx: Specify_terminal_descriptorContext): void;
	/**
	 * Exit a parse tree produced by `VParser.specify_terminal_descriptor`.
	 * @param ctx the parse tree
	 */
	exitSpecify_terminal_descriptor?(ctx: Specify_terminal_descriptorContext): void;
	/**
	 * Enter a parse tree produced by `VParser.timing_check_condition`.
	 * @param ctx the parse tree
	 */
	enterTiming_check_condition?(ctx: Timing_check_conditionContext): void;
	/**
	 * Exit a parse tree produced by `VParser.timing_check_condition`.
	 * @param ctx the parse tree
	 */
	exitTiming_check_condition?(ctx: Timing_check_conditionContext): void;
	/**
	 * Enter a parse tree produced by `VParser.scalar_timing_check_condition`.
	 * @param ctx the parse tree
	 */
	enterScalar_timing_check_condition?(ctx: Scalar_timing_check_conditionContext): void;
	/**
	 * Exit a parse tree produced by `VParser.scalar_timing_check_condition`.
	 * @param ctx the parse tree
	 */
	exitScalar_timing_check_condition?(ctx: Scalar_timing_check_conditionContext): void;
	/**
	 * Enter a parse tree produced by `VParser.scalar_constant`.
	 * @param ctx the parse tree
	 */
	enterScalar_constant?(ctx: Scalar_constantContext): void;
	/**
	 * Exit a parse tree produced by `VParser.scalar_constant`.
	 * @param ctx the parse tree
	 */
	exitScalar_constant?(ctx: Scalar_constantContext): void;
	/**
	 * Enter a parse tree produced by `VParser.concatenation`.
	 * @param ctx the parse tree
	 */
	enterConcatenation?(ctx: ConcatenationContext): void;
	/**
	 * Exit a parse tree produced by `VParser.concatenation`.
	 * @param ctx the parse tree
	 */
	exitConcatenation?(ctx: ConcatenationContext): void;
	/**
	 * Enter a parse tree produced by `VParser.constant_concatenation`.
	 * @param ctx the parse tree
	 */
	enterConstant_concatenation?(ctx: Constant_concatenationContext): void;
	/**
	 * Exit a parse tree produced by `VParser.constant_concatenation`.
	 * @param ctx the parse tree
	 */
	exitConstant_concatenation?(ctx: Constant_concatenationContext): void;
	/**
	 * Enter a parse tree produced by `VParser.constant_multiple_concatenation`.
	 * @param ctx the parse tree
	 */
	enterConstant_multiple_concatenation?(ctx: Constant_multiple_concatenationContext): void;
	/**
	 * Exit a parse tree produced by `VParser.constant_multiple_concatenation`.
	 * @param ctx the parse tree
	 */
	exitConstant_multiple_concatenation?(ctx: Constant_multiple_concatenationContext): void;
	/**
	 * Enter a parse tree produced by `VParser.module_path_concatenation`.
	 * @param ctx the parse tree
	 */
	enterModule_path_concatenation?(ctx: Module_path_concatenationContext): void;
	/**
	 * Exit a parse tree produced by `VParser.module_path_concatenation`.
	 * @param ctx the parse tree
	 */
	exitModule_path_concatenation?(ctx: Module_path_concatenationContext): void;
	/**
	 * Enter a parse tree produced by `VParser.module_path_multiple_concatenation`.
	 * @param ctx the parse tree
	 */
	enterModule_path_multiple_concatenation?(ctx: Module_path_multiple_concatenationContext): void;
	/**
	 * Exit a parse tree produced by `VParser.module_path_multiple_concatenation`.
	 * @param ctx the parse tree
	 */
	exitModule_path_multiple_concatenation?(ctx: Module_path_multiple_concatenationContext): void;
	/**
	 * Enter a parse tree produced by `VParser.multiple_concatenation`.
	 * @param ctx the parse tree
	 */
	enterMultiple_concatenation?(ctx: Multiple_concatenationContext): void;
	/**
	 * Exit a parse tree produced by `VParser.multiple_concatenation`.
	 * @param ctx the parse tree
	 */
	exitMultiple_concatenation?(ctx: Multiple_concatenationContext): void;
	/**
	 * Enter a parse tree produced by `VParser.constant_function_call`.
	 * @param ctx the parse tree
	 */
	enterConstant_function_call?(ctx: Constant_function_callContext): void;
	/**
	 * Exit a parse tree produced by `VParser.constant_function_call`.
	 * @param ctx the parse tree
	 */
	exitConstant_function_call?(ctx: Constant_function_callContext): void;
	/**
	 * Enter a parse tree produced by `VParser.constant_system_function_call`.
	 * @param ctx the parse tree
	 */
	enterConstant_system_function_call?(ctx: Constant_system_function_callContext): void;
	/**
	 * Exit a parse tree produced by `VParser.constant_system_function_call`.
	 * @param ctx the parse tree
	 */
	exitConstant_system_function_call?(ctx: Constant_system_function_callContext): void;
	/**
	 * Enter a parse tree produced by `VParser.function_call`.
	 * @param ctx the parse tree
	 */
	enterFunction_call?(ctx: Function_callContext): void;
	/**
	 * Exit a parse tree produced by `VParser.function_call`.
	 * @param ctx the parse tree
	 */
	exitFunction_call?(ctx: Function_callContext): void;
	/**
	 * Enter a parse tree produced by `VParser.system_function_call`.
	 * @param ctx the parse tree
	 */
	enterSystem_function_call?(ctx: System_function_callContext): void;
	/**
	 * Exit a parse tree produced by `VParser.system_function_call`.
	 * @param ctx the parse tree
	 */
	exitSystem_function_call?(ctx: System_function_callContext): void;
	/**
	 * Enter a parse tree produced by `VParser.base_expression`.
	 * @param ctx the parse tree
	 */
	enterBase_expression?(ctx: Base_expressionContext): void;
	/**
	 * Exit a parse tree produced by `VParser.base_expression`.
	 * @param ctx the parse tree
	 */
	exitBase_expression?(ctx: Base_expressionContext): void;
	/**
	 * Enter a parse tree produced by `VParser.constant_base_expression`.
	 * @param ctx the parse tree
	 */
	enterConstant_base_expression?(ctx: Constant_base_expressionContext): void;
	/**
	 * Exit a parse tree produced by `VParser.constant_base_expression`.
	 * @param ctx the parse tree
	 */
	exitConstant_base_expression?(ctx: Constant_base_expressionContext): void;
	/**
	 * Enter a parse tree produced by `VParser.constant_expression`.
	 * @param ctx the parse tree
	 */
	enterConstant_expression?(ctx: Constant_expressionContext): void;
	/**
	 * Exit a parse tree produced by `VParser.constant_expression`.
	 * @param ctx the parse tree
	 */
	exitConstant_expression?(ctx: Constant_expressionContext): void;
	/**
	 * Enter a parse tree produced by `VParser.constant_mintypmax_expression`.
	 * @param ctx the parse tree
	 */
	enterConstant_mintypmax_expression?(ctx: Constant_mintypmax_expressionContext): void;
	/**
	 * Exit a parse tree produced by `VParser.constant_mintypmax_expression`.
	 * @param ctx the parse tree
	 */
	exitConstant_mintypmax_expression?(ctx: Constant_mintypmax_expressionContext): void;
	/**
	 * Enter a parse tree produced by `VParser.constant_range_expression`.
	 * @param ctx the parse tree
	 */
	enterConstant_range_expression?(ctx: Constant_range_expressionContext): void;
	/**
	 * Exit a parse tree produced by `VParser.constant_range_expression`.
	 * @param ctx the parse tree
	 */
	exitConstant_range_expression?(ctx: Constant_range_expressionContext): void;
	/**
	 * Enter a parse tree produced by `VParser.dimension_constant_expression`.
	 * @param ctx the parse tree
	 */
	enterDimension_constant_expression?(ctx: Dimension_constant_expressionContext): void;
	/**
	 * Exit a parse tree produced by `VParser.dimension_constant_expression`.
	 * @param ctx the parse tree
	 */
	exitDimension_constant_expression?(ctx: Dimension_constant_expressionContext): void;
	/**
	 * Enter a parse tree produced by `VParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?(ctx: ExpressionContext): void;
	/**
	 * Exit a parse tree produced by `VParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?(ctx: ExpressionContext): void;
	/**
	 * Enter a parse tree produced by `VParser.lsb_constant_expression`.
	 * @param ctx the parse tree
	 */
	enterLsb_constant_expression?(ctx: Lsb_constant_expressionContext): void;
	/**
	 * Exit a parse tree produced by `VParser.lsb_constant_expression`.
	 * @param ctx the parse tree
	 */
	exitLsb_constant_expression?(ctx: Lsb_constant_expressionContext): void;
	/**
	 * Enter a parse tree produced by `VParser.mintypmax_expression`.
	 * @param ctx the parse tree
	 */
	enterMintypmax_expression?(ctx: Mintypmax_expressionContext): void;
	/**
	 * Exit a parse tree produced by `VParser.mintypmax_expression`.
	 * @param ctx the parse tree
	 */
	exitMintypmax_expression?(ctx: Mintypmax_expressionContext): void;
	/**
	 * Enter a parse tree produced by `VParser.module_path_expression`.
	 * @param ctx the parse tree
	 */
	enterModule_path_expression?(ctx: Module_path_expressionContext): void;
	/**
	 * Exit a parse tree produced by `VParser.module_path_expression`.
	 * @param ctx the parse tree
	 */
	exitModule_path_expression?(ctx: Module_path_expressionContext): void;
	/**
	 * Enter a parse tree produced by `VParser.module_path_mintypmax_expression`.
	 * @param ctx the parse tree
	 */
	enterModule_path_mintypmax_expression?(ctx: Module_path_mintypmax_expressionContext): void;
	/**
	 * Exit a parse tree produced by `VParser.module_path_mintypmax_expression`.
	 * @param ctx the parse tree
	 */
	exitModule_path_mintypmax_expression?(ctx: Module_path_mintypmax_expressionContext): void;
	/**
	 * Enter a parse tree produced by `VParser.msb_constant_expression`.
	 * @param ctx the parse tree
	 */
	enterMsb_constant_expression?(ctx: Msb_constant_expressionContext): void;
	/**
	 * Exit a parse tree produced by `VParser.msb_constant_expression`.
	 * @param ctx the parse tree
	 */
	exitMsb_constant_expression?(ctx: Msb_constant_expressionContext): void;
	/**
	 * Enter a parse tree produced by `VParser.range_expression`.
	 * @param ctx the parse tree
	 */
	enterRange_expression?(ctx: Range_expressionContext): void;
	/**
	 * Exit a parse tree produced by `VParser.range_expression`.
	 * @param ctx the parse tree
	 */
	exitRange_expression?(ctx: Range_expressionContext): void;
	/**
	 * Enter a parse tree produced by `VParser.width_constant_expression`.
	 * @param ctx the parse tree
	 */
	enterWidth_constant_expression?(ctx: Width_constant_expressionContext): void;
	/**
	 * Exit a parse tree produced by `VParser.width_constant_expression`.
	 * @param ctx the parse tree
	 */
	exitWidth_constant_expression?(ctx: Width_constant_expressionContext): void;
	/**
	 * Enter a parse tree produced by `VParser.constant_primary`.
	 * @param ctx the parse tree
	 */
	enterConstant_primary?(ctx: Constant_primaryContext): void;
	/**
	 * Exit a parse tree produced by `VParser.constant_primary`.
	 * @param ctx the parse tree
	 */
	exitConstant_primary?(ctx: Constant_primaryContext): void;
	/**
	 * Enter a parse tree produced by `VParser.module_path_primary`.
	 * @param ctx the parse tree
	 */
	enterModule_path_primary?(ctx: Module_path_primaryContext): void;
	/**
	 * Exit a parse tree produced by `VParser.module_path_primary`.
	 * @param ctx the parse tree
	 */
	exitModule_path_primary?(ctx: Module_path_primaryContext): void;
	/**
	 * Enter a parse tree produced by `VParser.primary`.
	 * @param ctx the parse tree
	 */
	enterPrimary?(ctx: PrimaryContext): void;
	/**
	 * Exit a parse tree produced by `VParser.primary`.
	 * @param ctx the parse tree
	 */
	exitPrimary?(ctx: PrimaryContext): void;
	/**
	 * Enter a parse tree produced by `VParser.net_lvalue`.
	 * @param ctx the parse tree
	 */
	enterNet_lvalue?(ctx: Net_lvalueContext): void;
	/**
	 * Exit a parse tree produced by `VParser.net_lvalue`.
	 * @param ctx the parse tree
	 */
	exitNet_lvalue?(ctx: Net_lvalueContext): void;
	/**
	 * Enter a parse tree produced by `VParser.variable_lvalue`.
	 * @param ctx the parse tree
	 */
	enterVariable_lvalue?(ctx: Variable_lvalueContext): void;
	/**
	 * Exit a parse tree produced by `VParser.variable_lvalue`.
	 * @param ctx the parse tree
	 */
	exitVariable_lvalue?(ctx: Variable_lvalueContext): void;
	/**
	 * Enter a parse tree produced by `VParser.unary_operator`.
	 * @param ctx the parse tree
	 */
	enterUnary_operator?(ctx: Unary_operatorContext): void;
	/**
	 * Exit a parse tree produced by `VParser.unary_operator`.
	 * @param ctx the parse tree
	 */
	exitUnary_operator?(ctx: Unary_operatorContext): void;
	/**
	 * Enter a parse tree produced by `VParser.binary_operator`.
	 * @param ctx the parse tree
	 */
	enterBinary_operator?(ctx: Binary_operatorContext): void;
	/**
	 * Exit a parse tree produced by `VParser.binary_operator`.
	 * @param ctx the parse tree
	 */
	exitBinary_operator?(ctx: Binary_operatorContext): void;
	/**
	 * Enter a parse tree produced by `VParser.unary_module_path_operator`.
	 * @param ctx the parse tree
	 */
	enterUnary_module_path_operator?(ctx: Unary_module_path_operatorContext): void;
	/**
	 * Exit a parse tree produced by `VParser.unary_module_path_operator`.
	 * @param ctx the parse tree
	 */
	exitUnary_module_path_operator?(ctx: Unary_module_path_operatorContext): void;
	/**
	 * Enter a parse tree produced by `VParser.binary_module_path_operator`.
	 * @param ctx the parse tree
	 */
	enterBinary_module_path_operator?(ctx: Binary_module_path_operatorContext): void;
	/**
	 * Exit a parse tree produced by `VParser.binary_module_path_operator`.
	 * @param ctx the parse tree
	 */
	exitBinary_module_path_operator?(ctx: Binary_module_path_operatorContext): void;
	/**
	 * Enter a parse tree produced by `VParser.number`.
	 * @param ctx the parse tree
	 */
	enterNumber?(ctx: NumberContext): void;
	/**
	 * Exit a parse tree produced by `VParser.number`.
	 * @param ctx the parse tree
	 */
	exitNumber?(ctx: NumberContext): void;
	/**
	 * Enter a parse tree produced by `VParser.real_number`.
	 * @param ctx the parse tree
	 */
	enterReal_number?(ctx: Real_numberContext): void;
	/**
	 * Exit a parse tree produced by `VParser.real_number`.
	 * @param ctx the parse tree
	 */
	exitReal_number?(ctx: Real_numberContext): void;
	/**
	 * Enter a parse tree produced by `VParser.decimal_number`.
	 * @param ctx the parse tree
	 */
	enterDecimal_number?(ctx: Decimal_numberContext): void;
	/**
	 * Exit a parse tree produced by `VParser.decimal_number`.
	 * @param ctx the parse tree
	 */
	exitDecimal_number?(ctx: Decimal_numberContext): void;
	/**
	 * Enter a parse tree produced by `VParser.binary_number`.
	 * @param ctx the parse tree
	 */
	enterBinary_number?(ctx: Binary_numberContext): void;
	/**
	 * Exit a parse tree produced by `VParser.binary_number`.
	 * @param ctx the parse tree
	 */
	exitBinary_number?(ctx: Binary_numberContext): void;
	/**
	 * Enter a parse tree produced by `VParser.octal_number`.
	 * @param ctx the parse tree
	 */
	enterOctal_number?(ctx: Octal_numberContext): void;
	/**
	 * Exit a parse tree produced by `VParser.octal_number`.
	 * @param ctx the parse tree
	 */
	exitOctal_number?(ctx: Octal_numberContext): void;
	/**
	 * Enter a parse tree produced by `VParser.hex_number`.
	 * @param ctx the parse tree
	 */
	enterHex_number?(ctx: Hex_numberContext): void;
	/**
	 * Exit a parse tree produced by `VParser.hex_number`.
	 * @param ctx the parse tree
	 */
	exitHex_number?(ctx: Hex_numberContext): void;
	/**
	 * Enter a parse tree produced by `VParser.unsigned_number`.
	 * @param ctx the parse tree
	 */
	enterUnsigned_number?(ctx: Unsigned_numberContext): void;
	/**
	 * Exit a parse tree produced by `VParser.unsigned_number`.
	 * @param ctx the parse tree
	 */
	exitUnsigned_number?(ctx: Unsigned_numberContext): void;
	/**
	 * Enter a parse tree produced by `VParser.string_`.
	 * @param ctx the parse tree
	 */
	enterString_?(ctx: String_Context): void;
	/**
	 * Exit a parse tree produced by `VParser.string_`.
	 * @param ctx the parse tree
	 */
	exitString_?(ctx: String_Context): void;
	/**
	 * Enter a parse tree produced by `VParser.attribute_instance`.
	 * @param ctx the parse tree
	 */
	enterAttribute_instance?(ctx: Attribute_instanceContext): void;
	/**
	 * Exit a parse tree produced by `VParser.attribute_instance`.
	 * @param ctx the parse tree
	 */
	exitAttribute_instance?(ctx: Attribute_instanceContext): void;
	/**
	 * Enter a parse tree produced by `VParser.attr_spec`.
	 * @param ctx the parse tree
	 */
	enterAttr_spec?(ctx: Attr_specContext): void;
	/**
	 * Exit a parse tree produced by `VParser.attr_spec`.
	 * @param ctx the parse tree
	 */
	exitAttr_spec?(ctx: Attr_specContext): void;
	/**
	 * Enter a parse tree produced by `VParser.attr_name`.
	 * @param ctx the parse tree
	 */
	enterAttr_name?(ctx: Attr_nameContext): void;
	/**
	 * Exit a parse tree produced by `VParser.attr_name`.
	 * @param ctx the parse tree
	 */
	exitAttr_name?(ctx: Attr_nameContext): void;
	/**
	 * Enter a parse tree produced by `VParser.block_identifier`.
	 * @param ctx the parse tree
	 */
	enterBlock_identifier?(ctx: Block_identifierContext): void;
	/**
	 * Exit a parse tree produced by `VParser.block_identifier`.
	 * @param ctx the parse tree
	 */
	exitBlock_identifier?(ctx: Block_identifierContext): void;
	/**
	 * Enter a parse tree produced by `VParser.cell_identifier`.
	 * @param ctx the parse tree
	 */
	enterCell_identifier?(ctx: Cell_identifierContext): void;
	/**
	 * Exit a parse tree produced by `VParser.cell_identifier`.
	 * @param ctx the parse tree
	 */
	exitCell_identifier?(ctx: Cell_identifierContext): void;
	/**
	 * Enter a parse tree produced by `VParser.escaped_identifier`.
	 * @param ctx the parse tree
	 */
	enterEscaped_identifier?(ctx: Escaped_identifierContext): void;
	/**
	 * Exit a parse tree produced by `VParser.escaped_identifier`.
	 * @param ctx the parse tree
	 */
	exitEscaped_identifier?(ctx: Escaped_identifierContext): void;
	/**
	 * Enter a parse tree produced by `VParser.event_identifier`.
	 * @param ctx the parse tree
	 */
	enterEvent_identifier?(ctx: Event_identifierContext): void;
	/**
	 * Exit a parse tree produced by `VParser.event_identifier`.
	 * @param ctx the parse tree
	 */
	exitEvent_identifier?(ctx: Event_identifierContext): void;
	/**
	 * Enter a parse tree produced by `VParser.function_identifier`.
	 * @param ctx the parse tree
	 */
	enterFunction_identifier?(ctx: Function_identifierContext): void;
	/**
	 * Exit a parse tree produced by `VParser.function_identifier`.
	 * @param ctx the parse tree
	 */
	exitFunction_identifier?(ctx: Function_identifierContext): void;
	/**
	 * Enter a parse tree produced by `VParser.gate_instance_identifier`.
	 * @param ctx the parse tree
	 */
	enterGate_instance_identifier?(ctx: Gate_instance_identifierContext): void;
	/**
	 * Exit a parse tree produced by `VParser.gate_instance_identifier`.
	 * @param ctx the parse tree
	 */
	exitGate_instance_identifier?(ctx: Gate_instance_identifierContext): void;
	/**
	 * Enter a parse tree produced by `VParser.generate_block_identifier`.
	 * @param ctx the parse tree
	 */
	enterGenerate_block_identifier?(ctx: Generate_block_identifierContext): void;
	/**
	 * Exit a parse tree produced by `VParser.generate_block_identifier`.
	 * @param ctx the parse tree
	 */
	exitGenerate_block_identifier?(ctx: Generate_block_identifierContext): void;
	/**
	 * Enter a parse tree produced by `VParser.genvar_identifier`.
	 * @param ctx the parse tree
	 */
	enterGenvar_identifier?(ctx: Genvar_identifierContext): void;
	/**
	 * Exit a parse tree produced by `VParser.genvar_identifier`.
	 * @param ctx the parse tree
	 */
	exitGenvar_identifier?(ctx: Genvar_identifierContext): void;
	/**
	 * Enter a parse tree produced by `VParser.hierarchical_block_identifier`.
	 * @param ctx the parse tree
	 */
	enterHierarchical_block_identifier?(ctx: Hierarchical_block_identifierContext): void;
	/**
	 * Exit a parse tree produced by `VParser.hierarchical_block_identifier`.
	 * @param ctx the parse tree
	 */
	exitHierarchical_block_identifier?(ctx: Hierarchical_block_identifierContext): void;
	/**
	 * Enter a parse tree produced by `VParser.hierarchical_event_identifier`.
	 * @param ctx the parse tree
	 */
	enterHierarchical_event_identifier?(ctx: Hierarchical_event_identifierContext): void;
	/**
	 * Exit a parse tree produced by `VParser.hierarchical_event_identifier`.
	 * @param ctx the parse tree
	 */
	exitHierarchical_event_identifier?(ctx: Hierarchical_event_identifierContext): void;
	/**
	 * Enter a parse tree produced by `VParser.hierarchical_function_identifier`.
	 * @param ctx the parse tree
	 */
	enterHierarchical_function_identifier?(ctx: Hierarchical_function_identifierContext): void;
	/**
	 * Exit a parse tree produced by `VParser.hierarchical_function_identifier`.
	 * @param ctx the parse tree
	 */
	exitHierarchical_function_identifier?(ctx: Hierarchical_function_identifierContext): void;
	/**
	 * Enter a parse tree produced by `VParser.hierarchical_identifier`.
	 * @param ctx the parse tree
	 */
	enterHierarchical_identifier?(ctx: Hierarchical_identifierContext): void;
	/**
	 * Exit a parse tree produced by `VParser.hierarchical_identifier`.
	 * @param ctx the parse tree
	 */
	exitHierarchical_identifier?(ctx: Hierarchical_identifierContext): void;
	/**
	 * Enter a parse tree produced by `VParser.hierarchical_net_identifier`.
	 * @param ctx the parse tree
	 */
	enterHierarchical_net_identifier?(ctx: Hierarchical_net_identifierContext): void;
	/**
	 * Exit a parse tree produced by `VParser.hierarchical_net_identifier`.
	 * @param ctx the parse tree
	 */
	exitHierarchical_net_identifier?(ctx: Hierarchical_net_identifierContext): void;
	/**
	 * Enter a parse tree produced by `VParser.hierarchical_parameter_identifier`.
	 * @param ctx the parse tree
	 */
	enterHierarchical_parameter_identifier?(ctx: Hierarchical_parameter_identifierContext): void;
	/**
	 * Exit a parse tree produced by `VParser.hierarchical_parameter_identifier`.
	 * @param ctx the parse tree
	 */
	exitHierarchical_parameter_identifier?(ctx: Hierarchical_parameter_identifierContext): void;
	/**
	 * Enter a parse tree produced by `VParser.hierarchical_variable_identifier`.
	 * @param ctx the parse tree
	 */
	enterHierarchical_variable_identifier?(ctx: Hierarchical_variable_identifierContext): void;
	/**
	 * Exit a parse tree produced by `VParser.hierarchical_variable_identifier`.
	 * @param ctx the parse tree
	 */
	exitHierarchical_variable_identifier?(ctx: Hierarchical_variable_identifierContext): void;
	/**
	 * Enter a parse tree produced by `VParser.hierarchical_task_identifier`.
	 * @param ctx the parse tree
	 */
	enterHierarchical_task_identifier?(ctx: Hierarchical_task_identifierContext): void;
	/**
	 * Exit a parse tree produced by `VParser.hierarchical_task_identifier`.
	 * @param ctx the parse tree
	 */
	exitHierarchical_task_identifier?(ctx: Hierarchical_task_identifierContext): void;
	/**
	 * Enter a parse tree produced by `VParser.identifier`.
	 * @param ctx the parse tree
	 */
	enterIdentifier?(ctx: IdentifierContext): void;
	/**
	 * Exit a parse tree produced by `VParser.identifier`.
	 * @param ctx the parse tree
	 */
	exitIdentifier?(ctx: IdentifierContext): void;
	/**
	 * Enter a parse tree produced by `VParser.inout_port_identifier`.
	 * @param ctx the parse tree
	 */
	enterInout_port_identifier?(ctx: Inout_port_identifierContext): void;
	/**
	 * Exit a parse tree produced by `VParser.inout_port_identifier`.
	 * @param ctx the parse tree
	 */
	exitInout_port_identifier?(ctx: Inout_port_identifierContext): void;
	/**
	 * Enter a parse tree produced by `VParser.input_port_identifier`.
	 * @param ctx the parse tree
	 */
	enterInput_port_identifier?(ctx: Input_port_identifierContext): void;
	/**
	 * Exit a parse tree produced by `VParser.input_port_identifier`.
	 * @param ctx the parse tree
	 */
	exitInput_port_identifier?(ctx: Input_port_identifierContext): void;
	/**
	 * Enter a parse tree produced by `VParser.instance_identifier`.
	 * @param ctx the parse tree
	 */
	enterInstance_identifier?(ctx: Instance_identifierContext): void;
	/**
	 * Exit a parse tree produced by `VParser.instance_identifier`.
	 * @param ctx the parse tree
	 */
	exitInstance_identifier?(ctx: Instance_identifierContext): void;
	/**
	 * Enter a parse tree produced by `VParser.module_identifier`.
	 * @param ctx the parse tree
	 */
	enterModule_identifier?(ctx: Module_identifierContext): void;
	/**
	 * Exit a parse tree produced by `VParser.module_identifier`.
	 * @param ctx the parse tree
	 */
	exitModule_identifier?(ctx: Module_identifierContext): void;
	/**
	 * Enter a parse tree produced by `VParser.module_instance_identifier`.
	 * @param ctx the parse tree
	 */
	enterModule_instance_identifier?(ctx: Module_instance_identifierContext): void;
	/**
	 * Exit a parse tree produced by `VParser.module_instance_identifier`.
	 * @param ctx the parse tree
	 */
	exitModule_instance_identifier?(ctx: Module_instance_identifierContext): void;
	/**
	 * Enter a parse tree produced by `VParser.net_identifier`.
	 * @param ctx the parse tree
	 */
	enterNet_identifier?(ctx: Net_identifierContext): void;
	/**
	 * Exit a parse tree produced by `VParser.net_identifier`.
	 * @param ctx the parse tree
	 */
	exitNet_identifier?(ctx: Net_identifierContext): void;
	/**
	 * Enter a parse tree produced by `VParser.output_port_identifier`.
	 * @param ctx the parse tree
	 */
	enterOutput_port_identifier?(ctx: Output_port_identifierContext): void;
	/**
	 * Exit a parse tree produced by `VParser.output_port_identifier`.
	 * @param ctx the parse tree
	 */
	exitOutput_port_identifier?(ctx: Output_port_identifierContext): void;
	/**
	 * Enter a parse tree produced by `VParser.parameter_identifier`.
	 * @param ctx the parse tree
	 */
	enterParameter_identifier?(ctx: Parameter_identifierContext): void;
	/**
	 * Exit a parse tree produced by `VParser.parameter_identifier`.
	 * @param ctx the parse tree
	 */
	exitParameter_identifier?(ctx: Parameter_identifierContext): void;
	/**
	 * Enter a parse tree produced by `VParser.port_identifier`.
	 * @param ctx the parse tree
	 */
	enterPort_identifier?(ctx: Port_identifierContext): void;
	/**
	 * Exit a parse tree produced by `VParser.port_identifier`.
	 * @param ctx the parse tree
	 */
	exitPort_identifier?(ctx: Port_identifierContext): void;
	/**
	 * Enter a parse tree produced by `VParser.real_identifier`.
	 * @param ctx the parse tree
	 */
	enterReal_identifier?(ctx: Real_identifierContext): void;
	/**
	 * Exit a parse tree produced by `VParser.real_identifier`.
	 * @param ctx the parse tree
	 */
	exitReal_identifier?(ctx: Real_identifierContext): void;
	/**
	 * Enter a parse tree produced by `VParser.simple_identifier`.
	 * @param ctx the parse tree
	 */
	enterSimple_identifier?(ctx: Simple_identifierContext): void;
	/**
	 * Exit a parse tree produced by `VParser.simple_identifier`.
	 * @param ctx the parse tree
	 */
	exitSimple_identifier?(ctx: Simple_identifierContext): void;
	/**
	 * Enter a parse tree produced by `VParser.specparam_identifier`.
	 * @param ctx the parse tree
	 */
	enterSpecparam_identifier?(ctx: Specparam_identifierContext): void;
	/**
	 * Exit a parse tree produced by `VParser.specparam_identifier`.
	 * @param ctx the parse tree
	 */
	exitSpecparam_identifier?(ctx: Specparam_identifierContext): void;
	/**
	 * Enter a parse tree produced by `VParser.system_function_identifier`.
	 * @param ctx the parse tree
	 */
	enterSystem_function_identifier?(ctx: System_function_identifierContext): void;
	/**
	 * Exit a parse tree produced by `VParser.system_function_identifier`.
	 * @param ctx the parse tree
	 */
	exitSystem_function_identifier?(ctx: System_function_identifierContext): void;
	/**
	 * Enter a parse tree produced by `VParser.system_task_identifier`.
	 * @param ctx the parse tree
	 */
	enterSystem_task_identifier?(ctx: System_task_identifierContext): void;
	/**
	 * Exit a parse tree produced by `VParser.system_task_identifier`.
	 * @param ctx the parse tree
	 */
	exitSystem_task_identifier?(ctx: System_task_identifierContext): void;
	/**
	 * Enter a parse tree produced by `VParser.task_identifier`.
	 * @param ctx the parse tree
	 */
	enterTask_identifier?(ctx: Task_identifierContext): void;
	/**
	 * Exit a parse tree produced by `VParser.task_identifier`.
	 * @param ctx the parse tree
	 */
	exitTask_identifier?(ctx: Task_identifierContext): void;
	/**
	 * Enter a parse tree produced by `VParser.terminal_identifier`.
	 * @param ctx the parse tree
	 */
	enterTerminal_identifier?(ctx: Terminal_identifierContext): void;
	/**
	 * Exit a parse tree produced by `VParser.terminal_identifier`.
	 * @param ctx the parse tree
	 */
	exitTerminal_identifier?(ctx: Terminal_identifierContext): void;
	/**
	 * Enter a parse tree produced by `VParser.text_macro_identifier`.
	 * @param ctx the parse tree
	 */
	enterText_macro_identifier?(ctx: Text_macro_identifierContext): void;
	/**
	 * Exit a parse tree produced by `VParser.text_macro_identifier`.
	 * @param ctx the parse tree
	 */
	exitText_macro_identifier?(ctx: Text_macro_identifierContext): void;
	/**
	 * Enter a parse tree produced by `VParser.topmodule_identifier`.
	 * @param ctx the parse tree
	 */
	enterTopmodule_identifier?(ctx: Topmodule_identifierContext): void;
	/**
	 * Exit a parse tree produced by `VParser.topmodule_identifier`.
	 * @param ctx the parse tree
	 */
	exitTopmodule_identifier?(ctx: Topmodule_identifierContext): void;
	/**
	 * Enter a parse tree produced by `VParser.udp_identifier`.
	 * @param ctx the parse tree
	 */
	enterUdp_identifier?(ctx: Udp_identifierContext): void;
	/**
	 * Exit a parse tree produced by `VParser.udp_identifier`.
	 * @param ctx the parse tree
	 */
	exitUdp_identifier?(ctx: Udp_identifierContext): void;
	/**
	 * Enter a parse tree produced by `VParser.udp_instance_identifier`.
	 * @param ctx the parse tree
	 */
	enterUdp_instance_identifier?(ctx: Udp_instance_identifierContext): void;
	/**
	 * Exit a parse tree produced by `VParser.udp_instance_identifier`.
	 * @param ctx the parse tree
	 */
	exitUdp_instance_identifier?(ctx: Udp_instance_identifierContext): void;
	/**
	 * Enter a parse tree produced by `VParser.variable_identifier`.
	 * @param ctx the parse tree
	 */
	enterVariable_identifier?(ctx: Variable_identifierContext): void;
	/**
	 * Exit a parse tree produced by `VParser.variable_identifier`.
	 * @param ctx the parse tree
	 */
	exitVariable_identifier?(ctx: Variable_identifierContext): void;
}

