// Generated from antlr/systemverilog/SVParser.g4 by ANTLR 4.13.0

import {ParseTreeListener} from "../antlr4";


import { ParseContext } from "./SVParser";
import { Source_textContext } from "./SVParser";
import { DescriptionContext } from "./SVParser";
import { Module_nonansi_headerContext } from "./SVParser";
import { Module_ansi_headerContext } from "./SVParser";
import { Module_declarationContext } from "./SVParser";
import { Module_keywordContext } from "./SVParser";
import { Interface_declarationContext } from "./SVParser";
import { Interface_nonansi_headerContext } from "./SVParser";
import { Interface_ansi_headerContext } from "./SVParser";
import { Program_declarationContext } from "./SVParser";
import { Program_nonansi_headerContext } from "./SVParser";
import { Program_ansi_headerContext } from "./SVParser";
import { Checker_declarationContext } from "./SVParser";
import { Class_declarationContext } from "./SVParser";
import { Interface_class_typeContext } from "./SVParser";
import { Interface_class_declarationContext } from "./SVParser";
import { Interface_class_itemContext } from "./SVParser";
import { Interface_class_methodContext } from "./SVParser";
import { Package_declarationContext } from "./SVParser";
import { Timeunits_declarationContext } from "./SVParser";
import { Parameter_port_listContext } from "./SVParser";
import { Parameter_port_declarationContext } from "./SVParser";
import { List_of_portsContext } from "./SVParser";
import { List_of_port_declarationsContext } from "./SVParser";
import { Port_declarationContext } from "./SVParser";
import { PortContext } from "./SVParser";
import { Port_expressionContext } from "./SVParser";
import { Port_referenceContext } from "./SVParser";
import { Port_directionContext } from "./SVParser";
import { Net_port_headerContext } from "./SVParser";
import { Variable_port_headerContext } from "./SVParser";
import { Interface_port_headerContext } from "./SVParser";
import { Ansi_port_declarationContext } from "./SVParser";
import { Elaboration_system_taskContext } from "./SVParser";
import { Finish_numberContext } from "./SVParser";
import { Module_common_itemContext } from "./SVParser";
import { Module_itemContext } from "./SVParser";
import { Module_or_generate_itemContext } from "./SVParser";
import { Module_or_generate_item_declarationContext } from "./SVParser";
import { Non_port_module_itemContext } from "./SVParser";
import { Parameter_overrideContext } from "./SVParser";
import { Bind_directiveContext } from "./SVParser";
import { Bind_target_scopeContext } from "./SVParser";
import { Bind_target_instanceContext } from "./SVParser";
import { Bind_target_instance_listContext } from "./SVParser";
import { Bind_instantiationContext } from "./SVParser";
import { Interface_or_generate_itemContext } from "./SVParser";
import { Extern_tf_declarationContext } from "./SVParser";
import { Interface_itemContext } from "./SVParser";
import { Non_port_interface_itemContext } from "./SVParser";
import { Program_itemContext } from "./SVParser";
import { Non_port_program_itemContext } from "./SVParser";
import { Program_generate_itemContext } from "./SVParser";
import { Checker_port_listContext } from "./SVParser";
import { Checker_port_itemContext } from "./SVParser";
import { Checker_port_directionContext } from "./SVParser";
import { Checker_or_generate_itemContext } from "./SVParser";
import { Checker_or_generate_item_declarationContext } from "./SVParser";
import { Checker_generate_itemContext } from "./SVParser";
import { Class_itemContext } from "./SVParser";
import { Class_propertyContext } from "./SVParser";
import { Class_methodContext } from "./SVParser";
import { Class_constructor_prototypeContext } from "./SVParser";
import { Class_constraintContext } from "./SVParser";
import { Class_item_qualifierContext } from "./SVParser";
import { Property_qualifierContext } from "./SVParser";
import { Random_qualifierContext } from "./SVParser";
import { Method_qualifierContext } from "./SVParser";
import { Method_prototypeContext } from "./SVParser";
import { Class_constructor_declarationContext } from "./SVParser";
import { Constraint_declarationContext } from "./SVParser";
import { Constraint_blockContext } from "./SVParser";
import { Constraint_block_itemContext } from "./SVParser";
import { Solve_before_listContext } from "./SVParser";
import { Constraint_primaryContext } from "./SVParser";
import { Constraint_expressionContext } from "./SVParser";
import { Uniqueness_constraintContext } from "./SVParser";
import { Constraint_setContext } from "./SVParser";
import { Dist_listContext } from "./SVParser";
import { Dist_itemContext } from "./SVParser";
import { Dist_weightContext } from "./SVParser";
import { Constraint_prototypeContext } from "./SVParser";
import { Constraint_prototype_qualifierContext } from "./SVParser";
import { Extern_constraint_declarationContext } from "./SVParser";
import { Identifier_listContext } from "./SVParser";
import { Package_itemContext } from "./SVParser";
import { Package_or_generate_item_declarationContext } from "./SVParser";
import { Anonymous_programContext } from "./SVParser";
import { Anonymous_program_itemContext } from "./SVParser";
import { Local_parameter_declarationContext } from "./SVParser";
import { Parameter_declarationContext } from "./SVParser";
import { Specparam_declarationContext } from "./SVParser";
import { Inout_declarationContext } from "./SVParser";
import { Input_declarationContext } from "./SVParser";
import { Output_declarationContext } from "./SVParser";
import { Interface_port_declarationContext } from "./SVParser";
import { Ref_declarationContext } from "./SVParser";
import { Data_declarationContext } from "./SVParser";
import { Package_import_declarationContext } from "./SVParser";
import { Package_import_itemContext } from "./SVParser";
import { Package_export_declarationContext } from "./SVParser";
import { Genvar_declarationContext } from "./SVParser";
import { Net_declarationContext } from "./SVParser";
import { Type_declarationContext } from "./SVParser";
import { Net_type_declarationContext } from "./SVParser";
import { LifetimeContext } from "./SVParser";
import { Data_typeContext } from "./SVParser";
import { Data_type_or_implicitContext } from "./SVParser";
import { Implicit_data_typeContext } from "./SVParser";
import { Enum_base_typeContext } from "./SVParser";
import { Enum_name_declarationContext } from "./SVParser";
import { Class_scopeContext } from "./SVParser";
import { Class_typeContext } from "./SVParser";
import { Integer_typeContext } from "./SVParser";
import { Integer_atom_typeContext } from "./SVParser";
import { Integer_vector_typeContext } from "./SVParser";
import { Non_integer_typeContext } from "./SVParser";
import { Net_typeContext } from "./SVParser";
import { Net_port_typeContext } from "./SVParser";
import { Variable_port_typeContext } from "./SVParser";
import { Var_data_typeContext } from "./SVParser";
import { SigningContext } from "./SVParser";
import { Simple_typeContext } from "./SVParser";
import { Struct_union_memberContext } from "./SVParser";
import { Data_type_or_voidContext } from "./SVParser";
import { Struct_unionContext } from "./SVParser";
import { Type_referenceContext } from "./SVParser";
import { Drive_strengthContext } from "./SVParser";
import { Strength0Context } from "./SVParser";
import { Strength1Context } from "./SVParser";
import { Charge_strengthContext } from "./SVParser";
import { Delay3Context } from "./SVParser";
import { Delay2Context } from "./SVParser";
import { Delay_valueContext } from "./SVParser";
import { List_of_defparam_assignmentsContext } from "./SVParser";
import { List_of_genvar_identifiersContext } from "./SVParser";
import { List_of_interface_identifiersContext } from "./SVParser";
import { List_of_net_decl_assignmentsContext } from "./SVParser";
import { List_of_param_assignmentsContext } from "./SVParser";
import { List_of_port_identifiersContext } from "./SVParser";
import { List_of_specparam_assignmentsContext } from "./SVParser";
import { List_of_tf_variable_identifiersContext } from "./SVParser";
import { List_of_type_assignmentsContext } from "./SVParser";
import { List_of_variable_decl_assignmentsContext } from "./SVParser";
import { List_of_variable_identifiersContext } from "./SVParser";
import { List_of_variable_port_identifiersContext } from "./SVParser";
import { Defparam_assignmentContext } from "./SVParser";
import { Net_decl_assignmentContext } from "./SVParser";
import { Param_assignmentContext } from "./SVParser";
import { Specparam_assignmentContext } from "./SVParser";
import { Type_assignmentContext } from "./SVParser";
import { Pulse_control_specparamContext } from "./SVParser";
import { Error_limit_valueContext } from "./SVParser";
import { Reject_limit_valueContext } from "./SVParser";
import { Limit_valueContext } from "./SVParser";
import { Variable_decl_assignmentContext } from "./SVParser";
import { Class_newContext } from "./SVParser";
import { Dynamic_array_newContext } from "./SVParser";
import { Unpacked_dimensionContext } from "./SVParser";
import { Packed_dimensionContext } from "./SVParser";
import { Associative_dimensionContext } from "./SVParser";
import { Variable_dimensionContext } from "./SVParser";
import { Queue_dimensionContext } from "./SVParser";
import { Unsized_dimensionContext } from "./SVParser";
import { Function_data_type_or_implicitContext } from "./SVParser";
import { Function_declarationContext } from "./SVParser";
import { Function_body_declarationContext } from "./SVParser";
import { Function_prototypeContext } from "./SVParser";
import { Dpi_import_exportContext } from "./SVParser";
import { Dpi_spec_stringContext } from "./SVParser";
import { Dpi_function_import_propertyContext } from "./SVParser";
import { Dpi_task_import_propertyContext } from "./SVParser";
import { Dpi_function_protoContext } from "./SVParser";
import { Dpi_task_protoContext } from "./SVParser";
import { Task_declarationContext } from "./SVParser";
import { Task_body_declarationContext } from "./SVParser";
import { Tf_item_declarationContext } from "./SVParser";
import { Tf_port_listContext } from "./SVParser";
import { Tf_port_itemContext } from "./SVParser";
import { Tf_port_directionContext } from "./SVParser";
import { Tf_port_declarationContext } from "./SVParser";
import { Task_prototypeContext } from "./SVParser";
import { Block_item_declarationContext } from "./SVParser";
import { Modport_declarationContext } from "./SVParser";
import { Modport_itemContext } from "./SVParser";
import { Modport_ports_declarationContext } from "./SVParser";
import { Modport_clocking_declarationContext } from "./SVParser";
import { Modport_simple_ports_declarationContext } from "./SVParser";
import { Modport_simple_portContext } from "./SVParser";
import { Modport_tf_ports_declarationContext } from "./SVParser";
import { Modport_tf_portContext } from "./SVParser";
import { Import_exportContext } from "./SVParser";
import { Concurrent_assertion_itemContext } from "./SVParser";
import { Concurrent_assertion_statementContext } from "./SVParser";
import { Assert_property_statementContext } from "./SVParser";
import { Assume_property_statementContext } from "./SVParser";
import { Cover_property_statementContext } from "./SVParser";
import { Expect_property_statementContext } from "./SVParser";
import { Cover_sequence_statementContext } from "./SVParser";
import { Restrict_property_statementContext } from "./SVParser";
import { Property_instanceContext } from "./SVParser";
import { Property_list_of_argumentsContext } from "./SVParser";
import { Property_actual_argContext } from "./SVParser";
import { Assertion_item_declarationContext } from "./SVParser";
import { Property_declarationContext } from "./SVParser";
import { Property_port_listContext } from "./SVParser";
import { Property_port_itemContext } from "./SVParser";
import { Property_lvar_port_directionContext } from "./SVParser";
import { Property_formal_typeContext } from "./SVParser";
import { Property_specContext } from "./SVParser";
import { Property_exprContext } from "./SVParser";
import { Property_case_itemContext } from "./SVParser";
import { Sequence_declarationContext } from "./SVParser";
import { Sequence_port_listContext } from "./SVParser";
import { Sequence_port_itemContext } from "./SVParser";
import { Sequence_lvar_port_directionContext } from "./SVParser";
import { Sequence_formal_typeContext } from "./SVParser";
import { Sequence_exprContext } from "./SVParser";
import { Cycle_delay_rangeContext } from "./SVParser";
import { Sequence_method_callContext } from "./SVParser";
import { Sequence_match_itemContext } from "./SVParser";
import { Sequence_instanceContext } from "./SVParser";
import { Sequence_list_of_argumentsContext } from "./SVParser";
import { Sequence_actual_argContext } from "./SVParser";
import { Boolean_abbrevContext } from "./SVParser";
import { Sequence_abbrevContext } from "./SVParser";
import { Consecutive_repetitionContext } from "./SVParser";
import { Non_consecutive_repetitionContext } from "./SVParser";
import { Goto_repetitionContext } from "./SVParser";
import { Const_or_range_expressionContext } from "./SVParser";
import { Cycle_delay_const_range_expressionContext } from "./SVParser";
import { Expression_or_distContext } from "./SVParser";
import { Assertion_variable_declarationContext } from "./SVParser";
import { Covergroup_declarationContext } from "./SVParser";
import { Coverage_spec_or_optionContext } from "./SVParser";
import { Coverage_optionContext } from "./SVParser";
import { Coverage_specContext } from "./SVParser";
import { Coverage_eventContext } from "./SVParser";
import { Block_event_expressionContext } from "./SVParser";
import { Hierarchical_btf_identifierContext } from "./SVParser";
import { Cover_pointContext } from "./SVParser";
import { Bins_or_emptyContext } from "./SVParser";
import { Bins_or_optionsContext } from "./SVParser";
import { Bins_keywordContext } from "./SVParser";
import { Trans_listContext } from "./SVParser";
import { Trans_setContext } from "./SVParser";
import { Trans_range_listContext } from "./SVParser";
import { Trans_itemContext } from "./SVParser";
import { Repeat_rangeContext } from "./SVParser";
import { Cover_crossContext } from "./SVParser";
import { List_of_cross_itemsContext } from "./SVParser";
import { Cross_itemContext } from "./SVParser";
import { Cross_bodyContext } from "./SVParser";
import { Cross_body_itemContext } from "./SVParser";
import { Bins_selection_or_optionContext } from "./SVParser";
import { Bins_selectionContext } from "./SVParser";
import { Select_expressionContext } from "./SVParser";
import { Select_conditionContext } from "./SVParser";
import { Bins_expressionContext } from "./SVParser";
import { Covergroup_range_listContext } from "./SVParser";
import { Covergroup_value_rangeContext } from "./SVParser";
import { With_covergroup_expressionContext } from "./SVParser";
import { Set_covergroup_expressionContext } from "./SVParser";
import { Integer_covergroup_expressionContext } from "./SVParser";
import { Cross_set_expressionContext } from "./SVParser";
import { Covergroup_expressionContext } from "./SVParser";
import { Let_declarationContext } from "./SVParser";
import { Let_identifierContext } from "./SVParser";
import { Let_port_listContext } from "./SVParser";
import { Let_port_itemContext } from "./SVParser";
import { Let_formal_typeContext } from "./SVParser";
import { Let_expressionContext } from "./SVParser";
import { Let_list_of_argumentsContext } from "./SVParser";
import { Let_actual_argContext } from "./SVParser";
import { Gate_instantiationContext } from "./SVParser";
import { Cmos_switch_instanceContext } from "./SVParser";
import { Enable_gate_instanceContext } from "./SVParser";
import { Mos_switch_instanceContext } from "./SVParser";
import { N_input_gate_instanceContext } from "./SVParser";
import { N_output_gate_instanceContext } from "./SVParser";
import { Pass_switch_instanceContext } from "./SVParser";
import { Pass_enable_switch_instanceContext } from "./SVParser";
import { Pull_gate_instanceContext } from "./SVParser";
import { Pulldown_strengthContext } from "./SVParser";
import { Pullup_strengthContext } from "./SVParser";
import { Enable_terminalContext } from "./SVParser";
import { Inout_terminalContext } from "./SVParser";
import { Input_terminalContext } from "./SVParser";
import { Ncontrol_terminalContext } from "./SVParser";
import { Output_terminalContext } from "./SVParser";
import { Pcontrol_terminalContext } from "./SVParser";
import { Cmos_switchtypeContext } from "./SVParser";
import { Enable_gatetypeContext } from "./SVParser";
import { Mos_switchtypeContext } from "./SVParser";
import { N_input_gatetypeContext } from "./SVParser";
import { N_output_gatetypeContext } from "./SVParser";
import { Pass_en_switchtypeContext } from "./SVParser";
import { Pass_switchtypeContext } from "./SVParser";
import { Module_instantiationContext } from "./SVParser";
import { Parameter_value_assignmentContext } from "./SVParser";
import { List_of_parameter_assignmentsContext } from "./SVParser";
import { Ordered_parameter_assignmentContext } from "./SVParser";
import { Named_parameter_assignmentContext } from "./SVParser";
import { Hierarchical_instanceContext } from "./SVParser";
import { Name_of_instanceContext } from "./SVParser";
import { List_of_port_connectionsContext } from "./SVParser";
import { Ordered_port_connectionContext } from "./SVParser";
import { Named_port_connectionContext } from "./SVParser";
import { Interface_instantiationContext } from "./SVParser";
import { Program_instantiationContext } from "./SVParser";
import { Checker_instantiationContext } from "./SVParser";
import { List_of_checker_port_connectionsContext } from "./SVParser";
import { Ordered_checker_port_connectionContext } from "./SVParser";
import { Named_checker_port_connectionContext } from "./SVParser";
import { Generate_regionContext } from "./SVParser";
import { Loop_generate_constructContext } from "./SVParser";
import { Genvar_initializationContext } from "./SVParser";
import { Genvar_iterationContext } from "./SVParser";
import { Conditional_generate_constructContext } from "./SVParser";
import { If_generate_constructContext } from "./SVParser";
import { Case_generate_constructContext } from "./SVParser";
import { Case_generate_itemContext } from "./SVParser";
import { Generate_blockContext } from "./SVParser";
import { Generate_itemContext } from "./SVParser";
import { Continuous_assignContext } from "./SVParser";
import { List_of_net_assignmentsContext } from "./SVParser";
import { List_of_variable_assignmentsContext } from "./SVParser";
import { Net_aliasContext } from "./SVParser";
import { Net_assignmentContext } from "./SVParser";
import { Initial_constructContext } from "./SVParser";
import { Always_constructContext } from "./SVParser";
import { Always_keywordContext } from "./SVParser";
import { Final_constructContext } from "./SVParser";
import { Blocking_assignmentContext } from "./SVParser";
import { Operator_assignmentContext } from "./SVParser";
import { Assignment_operatorContext } from "./SVParser";
import { Nonblocking_assignmentContext } from "./SVParser";
import { Procedural_continuous_assignmentContext } from "./SVParser";
import { Variable_assignmentContext } from "./SVParser";
import { Action_blockContext } from "./SVParser";
import { Seq_blockContext } from "./SVParser";
import { Par_blockContext } from "./SVParser";
import { Join_keywordContext } from "./SVParser";
import { Statement_or_nullContext } from "./SVParser";
import { StatementContext } from "./SVParser";
import { Statement_itemContext } from "./SVParser";
import { Function_statementContext } from "./SVParser";
import { Function_statement_or_nullContext } from "./SVParser";
import { Variable_identifier_listContext } from "./SVParser";
import { Procedural_timing_control_statementContext } from "./SVParser";
import { Delay_or_event_controlContext } from "./SVParser";
import { Delay_controlContext } from "./SVParser";
import { Event_controlContext } from "./SVParser";
import { Event_expressionContext } from "./SVParser";
import { Procedural_timing_controlContext } from "./SVParser";
import { Jump_statementContext } from "./SVParser";
import { Wait_statementContext } from "./SVParser";
import { Event_triggerContext } from "./SVParser";
import { Disable_statementContext } from "./SVParser";
import { Conditional_statementContext } from "./SVParser";
import { Unique_priorityContext } from "./SVParser";
import { Cond_predicateContext } from "./SVParser";
import { Expression_or_cond_patternContext } from "./SVParser";
import { Cond_patternContext } from "./SVParser";
import { Case_statementContext } from "./SVParser";
import { Case_keywordContext } from "./SVParser";
import { Case_expressionContext } from "./SVParser";
import { Case_itemContext } from "./SVParser";
import { Case_pattern_itemContext } from "./SVParser";
import { Case_inside_itemContext } from "./SVParser";
import { Case_item_expressionContext } from "./SVParser";
import { Randcase_statementContext } from "./SVParser";
import { Randcase_itemContext } from "./SVParser";
import { Open_range_listContext } from "./SVParser";
import { Open_value_rangeContext } from "./SVParser";
import { PatternContext } from "./SVParser";
import { Assignment_patternContext } from "./SVParser";
import { Structure_pattern_keyContext } from "./SVParser";
import { Array_pattern_keyContext } from "./SVParser";
import { Assignment_pattern_keyContext } from "./SVParser";
import { Assignment_pattern_expressionContext } from "./SVParser";
import { Assignment_pattern_expression_typeContext } from "./SVParser";
import { Constant_assignment_pattern_expressionContext } from "./SVParser";
import { Assignment_pattern_net_lvalueContext } from "./SVParser";
import { Assignment_pattern_variable_lvalueContext } from "./SVParser";
import { Loop_statementContext } from "./SVParser";
import { For_initializationContext } from "./SVParser";
import { For_variable_declarationContext } from "./SVParser";
import { For_stepContext } from "./SVParser";
import { For_step_assignmentContext } from "./SVParser";
import { Loop_variablesContext } from "./SVParser";
import { Subroutine_call_statementContext } from "./SVParser";
import { Assertion_itemContext } from "./SVParser";
import { Deferred_immediate_assertion_itemContext } from "./SVParser";
import { Procedural_assertion_statementContext } from "./SVParser";
import { Immediate_assertion_statementContext } from "./SVParser";
import { Simple_immediate_assertion_statementContext } from "./SVParser";
import { Simple_immediate_assert_statementContext } from "./SVParser";
import { Simple_immediate_assume_statementContext } from "./SVParser";
import { Simple_immediate_cover_statementContext } from "./SVParser";
import { Deferred_immediate_assertion_statementContext } from "./SVParser";
import { Deferred_immediate_assert_statementContext } from "./SVParser";
import { Deferred_immediate_assume_statementContext } from "./SVParser";
import { Deferred_immediate_cover_statementContext } from "./SVParser";
import { Clocking_declarationContext } from "./SVParser";
import { Clocking_eventContext } from "./SVParser";
import { Clocking_itemContext } from "./SVParser";
import { Default_skewContext } from "./SVParser";
import { Clocking_directionContext } from "./SVParser";
import { List_of_clocking_decl_assignContext } from "./SVParser";
import { Clocking_decl_assignContext } from "./SVParser";
import { Clocking_skewContext } from "./SVParser";
import { Clocking_driveContext } from "./SVParser";
import { Cycle_delayContext } from "./SVParser";
import { ClockvarContext } from "./SVParser";
import { Clockvar_expressionContext } from "./SVParser";
import { Randsequence_statementContext } from "./SVParser";
import { ProductionContext } from "./SVParser";
import { Rs_ruleContext } from "./SVParser";
import { Rs_production_listContext } from "./SVParser";
import { Weight_specificationContext } from "./SVParser";
import { Rs_code_blockContext } from "./SVParser";
import { Rs_prodContext } from "./SVParser";
import { Production_itemContext } from "./SVParser";
import { Rs_if_elseContext } from "./SVParser";
import { Rs_repeatContext } from "./SVParser";
import { Rs_caseContext } from "./SVParser";
import { Rs_case_itemContext } from "./SVParser";
import { Specify_blockContext } from "./SVParser";
import { Specify_itemContext } from "./SVParser";
import { Pulsestyle_declarationContext } from "./SVParser";
import { Showcancelled_declarationContext } from "./SVParser";
import { Path_declarationContext } from "./SVParser";
import { Simple_path_declarationContext } from "./SVParser";
import { Parallel_path_descriptionContext } from "./SVParser";
import { Full_path_descriptionContext } from "./SVParser";
import { List_of_path_inputsContext } from "./SVParser";
import { List_of_path_outputsContext } from "./SVParser";
import { Specify_input_terminal_descriptorContext } from "./SVParser";
import { Specify_output_terminal_descriptorContext } from "./SVParser";
import { Input_identifierContext } from "./SVParser";
import { Output_identifierContext } from "./SVParser";
import { Path_delay_valueContext } from "./SVParser";
import { List_of_path_delay_expressionsContext } from "./SVParser";
import { T_path_delay_expressionContext } from "./SVParser";
import { Trise_path_delay_expressionContext } from "./SVParser";
import { Tfall_path_delay_expressionContext } from "./SVParser";
import { Tz_path_delay_expressionContext } from "./SVParser";
import { T01_path_delay_expressionContext } from "./SVParser";
import { T10_path_delay_expressionContext } from "./SVParser";
import { T0z_path_delay_expressionContext } from "./SVParser";
import { Tz1_path_delay_expressionContext } from "./SVParser";
import { T1z_path_delay_expressionContext } from "./SVParser";
import { Tz0_path_delay_expressionContext } from "./SVParser";
import { T0x_path_delay_expressionContext } from "./SVParser";
import { Tx1_path_delay_expressionContext } from "./SVParser";
import { T1x_path_delay_expressionContext } from "./SVParser";
import { Tx0_path_delay_expressionContext } from "./SVParser";
import { Txz_path_delay_expressionContext } from "./SVParser";
import { Tzx_path_delay_expressionContext } from "./SVParser";
import { Path_delay_expressionContext } from "./SVParser";
import { Edge_sensitive_path_declarationContext } from "./SVParser";
import { Parallel_edge_sensitive_path_descriptionContext } from "./SVParser";
import { Full_edge_sensitive_path_descriptionContext } from "./SVParser";
import { Data_source_expressionContext } from "./SVParser";
import { Edge_identifierContext } from "./SVParser";
import { State_dependent_path_declarationContext } from "./SVParser";
import { Polarity_operatorContext } from "./SVParser";
import { System_timing_checkContext } from "./SVParser";
import { Setup_timing_checkContext } from "./SVParser";
import { Hold_timing_checkContext } from "./SVParser";
import { Setuphold_timing_checkContext } from "./SVParser";
import { Recovery_timing_checkContext } from "./SVParser";
import { Removal_timing_checkContext } from "./SVParser";
import { Recrem_timing_checkContext } from "./SVParser";
import { Skew_timing_checkContext } from "./SVParser";
import { Timeskew_timing_checkContext } from "./SVParser";
import { Fullskew_timing_checkContext } from "./SVParser";
import { Period_timing_checkContext } from "./SVParser";
import { Width_timing_checkContext } from "./SVParser";
import { Nochange_timing_checkContext } from "./SVParser";
import { Timecheck_conditionContext } from "./SVParser";
import { Controlled_reference_eventContext } from "./SVParser";
import { Data_eventContext } from "./SVParser";
import { Delayed_dataContext } from "./SVParser";
import { Delayed_referenceContext } from "./SVParser";
import { End_edge_offsetContext } from "./SVParser";
import { Event_based_flagContext } from "./SVParser";
import { NotifierContext } from "./SVParser";
import { Reference_eventContext } from "./SVParser";
import { Remain_active_flagContext } from "./SVParser";
import { Timestamp_conditionContext } from "./SVParser";
import { Start_edge_offsetContext } from "./SVParser";
import { ThresholdContext } from "./SVParser";
import { Timing_check_limitContext } from "./SVParser";
import { Timing_check_eventContext } from "./SVParser";
import { Controlled_timing_check_eventContext } from "./SVParser";
import { Timing_check_event_controlContext } from "./SVParser";
import { Specify_terminal_descriptorContext } from "./SVParser";
import { Timing_check_conditionContext } from "./SVParser";
import { Scalar_timing_check_conditionContext } from "./SVParser";
import { Scalar_constantContext } from "./SVParser";
import { ConcatenationContext } from "./SVParser";
import { Constant_concatenationContext } from "./SVParser";
import { Constant_multiple_concatenationContext } from "./SVParser";
import { Module_path_concatenationContext } from "./SVParser";
import { Module_path_multiple_concatenationContext } from "./SVParser";
import { Multiple_concatenationContext } from "./SVParser";
import { Streaming_concatenationContext } from "./SVParser";
import { Stream_operatorContext } from "./SVParser";
import { Slice_sizeContext } from "./SVParser";
import { Stream_concatenationContext } from "./SVParser";
import { Stream_expressionContext } from "./SVParser";
import { Array_range_expressionContext } from "./SVParser";
import { Empty_unpacked_array_concatenationContext } from "./SVParser";
import { Tf_callContext } from "./SVParser";
import { System_tf_callContext } from "./SVParser";
import { Subroutine_callContext } from "./SVParser";
import { Function_subroutine_callContext } from "./SVParser";
import { List_of_argumentsContext } from "./SVParser";
import { Method_callContext } from "./SVParser";
import { Method_call_bodyContext } from "./SVParser";
import { Built_in_method_callContext } from "./SVParser";
import { Array_manipulation_callContext } from "./SVParser";
import { Randomize_callContext } from "./SVParser";
import { Method_call_rootContext } from "./SVParser";
import { Array_method_nameContext } from "./SVParser";
import { Inc_or_dec_expressionContext } from "./SVParser";
import { Constant_expressionContext } from "./SVParser";
import { Constant_mintypmax_expressionContext } from "./SVParser";
import { Constant_param_expressionContext } from "./SVParser";
import { Param_expressionContext } from "./SVParser";
import { Constant_range_expressionContext } from "./SVParser";
import { Constant_part_select_rangeContext } from "./SVParser";
import { Constant_rangeContext } from "./SVParser";
import { Constant_indexed_rangeContext } from "./SVParser";
import { ExpressionContext } from "./SVParser";
import { Value_rangeContext } from "./SVParser";
import { Mintypmax_expressionContext } from "./SVParser";
import { Module_path_expressionContext } from "./SVParser";
import { Module_path_mintypmax_expressionContext } from "./SVParser";
import { Part_select_rangeContext } from "./SVParser";
import { Indexed_rangeContext } from "./SVParser";
import { Genvar_expressionContext } from "./SVParser";
import { Constant_primaryContext } from "./SVParser";
import { Module_path_primaryContext } from "./SVParser";
import { PrimaryContext } from "./SVParser";
import { Class_qualifierContext } from "./SVParser";
import { Range_expressionContext } from "./SVParser";
import { Primary_literalContext } from "./SVParser";
import { Time_literalContext } from "./SVParser";
import { Implicit_class_handleContext } from "./SVParser";
import { Bit_selectContext } from "./SVParser";
import { Select_Context } from "./SVParser";
import { Nonrange_selectContext } from "./SVParser";
import { Constant_bit_selectContext } from "./SVParser";
import { Constant_selectContext } from "./SVParser";
import { Constant_let_expressionContext } from "./SVParser";
import { Net_lvalueContext } from "./SVParser";
import { Variable_lvalueContext } from "./SVParser";
import { Nonrange_variable_lvalueContext } from "./SVParser";
import { Unary_operatorContext } from "./SVParser";
import { Binary_operatorContext } from "./SVParser";
import { Inc_or_dec_operatorContext } from "./SVParser";
import { Unary_module_path_operatorContext } from "./SVParser";
import { Binary_module_path_operatorContext } from "./SVParser";
import { NumberContext } from "./SVParser";
import { Integral_numberContext } from "./SVParser";
import { Decimal_numberContext } from "./SVParser";
import { Binary_numberContext } from "./SVParser";
import { Octal_numberContext } from "./SVParser";
import { Hex_numberContext } from "./SVParser";
import { Real_numberContext } from "./SVParser";
import { Unsigned_numberContext } from "./SVParser";
import { Unbased_unsized_literalContext } from "./SVParser";
import { String_literalContext } from "./SVParser";
import { Attribute_instanceContext } from "./SVParser";
import { Attr_specContext } from "./SVParser";
import { Attr_nameContext } from "./SVParser";
import { Array_identifierContext } from "./SVParser";
import { Block_identifierContext } from "./SVParser";
import { Bin_identifierContext } from "./SVParser";
import { C_identifierContext } from "./SVParser";
import { Cell_identifierContext } from "./SVParser";
import { Checker_identifierContext } from "./SVParser";
import { Class_identifierContext } from "./SVParser";
import { Class_variable_identifierContext } from "./SVParser";
import { Clocking_identifierContext } from "./SVParser";
import { Const_identifierContext } from "./SVParser";
import { Constraint_identifierContext } from "./SVParser";
import { Covergroup_identifierContext } from "./SVParser";
import { Covergroup_variable_identifierContext } from "./SVParser";
import { Cover_point_identifierContext } from "./SVParser";
import { Cross_identifierContext } from "./SVParser";
import { Dynamic_array_variable_identifierContext } from "./SVParser";
import { Enum_identifierContext } from "./SVParser";
import { Escaped_identifierContext } from "./SVParser";
import { Formal_identifierContext } from "./SVParser";
import { Formal_port_identifierContext } from "./SVParser";
import { Function_identifierContext } from "./SVParser";
import { Generate_block_identifierContext } from "./SVParser";
import { Genvar_identifierContext } from "./SVParser";
import { Hierarchical_array_identifierContext } from "./SVParser";
import { Hierarchical_block_identifierContext } from "./SVParser";
import { Hierarchical_event_identifierContext } from "./SVParser";
import { Hierarchical_identifierContext } from "./SVParser";
import { Hierarchical_net_identifierContext } from "./SVParser";
import { Hierarchical_parameter_identifierContext } from "./SVParser";
import { Hierarchical_property_identifierContext } from "./SVParser";
import { Hierarchical_sequence_identifierContext } from "./SVParser";
import { Hierarchical_task_identifierContext } from "./SVParser";
import { Hierarchical_tf_identifierContext } from "./SVParser";
import { Hierarchical_variable_identifierContext } from "./SVParser";
import { IdentifierContext } from "./SVParser";
import { Index_variable_identifierContext } from "./SVParser";
import { Interface_identifierContext } from "./SVParser";
import { Interface_instance_identifierContext } from "./SVParser";
import { Inout_port_identifierContext } from "./SVParser";
import { Input_port_identifierContext } from "./SVParser";
import { Instance_identifierContext } from "./SVParser";
import { Member_identifierContext } from "./SVParser";
import { Method_identifierContext } from "./SVParser";
import { Modport_identifierContext } from "./SVParser";
import { Module_identifierContext } from "./SVParser";
import { Net_identifierContext } from "./SVParser";
import { Net_type_identifierContext } from "./SVParser";
import { Output_port_identifierContext } from "./SVParser";
import { Package_identifierContext } from "./SVParser";
import { Package_scopeContext } from "./SVParser";
import { Parameter_identifierContext } from "./SVParser";
import { Port_identifierContext } from "./SVParser";
import { Production_identifierContext } from "./SVParser";
import { Program_identifierContext } from "./SVParser";
import { Property_identifierContext } from "./SVParser";
import { Ps_class_identifierContext } from "./SVParser";
import { Ps_covergroup_identifierContext } from "./SVParser";
import { Ps_checker_identifierContext } from "./SVParser";
import { Ps_identifierContext } from "./SVParser";
import { Ps_or_hierarchical_array_identifierContext } from "./SVParser";
import { Ps_or_hierarchical_net_identifierContext } from "./SVParser";
import { Ps_or_hierarchical_property_identifierContext } from "./SVParser";
import { Ps_or_hierarchical_sequence_identifierContext } from "./SVParser";
import { Ps_or_hierarchical_tf_identifierContext } from "./SVParser";
import { Ps_parameter_identifierContext } from "./SVParser";
import { Ps_type_identifierContext } from "./SVParser";
import { Sequence_identifierContext } from "./SVParser";
import { Signal_identifierContext } from "./SVParser";
import { Simple_identifierContext } from "./SVParser";
import { Macro_usage_identifierContext } from "./SVParser";
import { Specparam_identifierContext } from "./SVParser";
import { System_tf_identifierContext } from "./SVParser";
import { Task_identifierContext } from "./SVParser";
import { Tf_identifierContext } from "./SVParser";
import { Terminal_identifierContext } from "./SVParser";
import { Topmodule_identifierContext } from "./SVParser";
import { Type_identifierContext } from "./SVParser";
import { Udp_identifierContext } from "./SVParser";
import { Variable_identifierContext } from "./SVParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `SVParser`.
 */
export default class SVParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `SVParser.parse`.
	 * @param ctx the parse tree
	 */
	enterParse?(ctx: ParseContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.parse`.
	 * @param ctx the parse tree
	 */
	exitParse?(ctx: ParseContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.source_text`.
	 * @param ctx the parse tree
	 */
	enterSource_text?(ctx: Source_textContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.source_text`.
	 * @param ctx the parse tree
	 */
	exitSource_text?(ctx: Source_textContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.description`.
	 * @param ctx the parse tree
	 */
	enterDescription?(ctx: DescriptionContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.description`.
	 * @param ctx the parse tree
	 */
	exitDescription?(ctx: DescriptionContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.module_nonansi_header`.
	 * @param ctx the parse tree
	 */
	enterModule_nonansi_header?(ctx: Module_nonansi_headerContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.module_nonansi_header`.
	 * @param ctx the parse tree
	 */
	exitModule_nonansi_header?(ctx: Module_nonansi_headerContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.module_ansi_header`.
	 * @param ctx the parse tree
	 */
	enterModule_ansi_header?(ctx: Module_ansi_headerContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.module_ansi_header`.
	 * @param ctx the parse tree
	 */
	exitModule_ansi_header?(ctx: Module_ansi_headerContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.module_declaration`.
	 * @param ctx the parse tree
	 */
	enterModule_declaration?(ctx: Module_declarationContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.module_declaration`.
	 * @param ctx the parse tree
	 */
	exitModule_declaration?(ctx: Module_declarationContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.module_keyword`.
	 * @param ctx the parse tree
	 */
	enterModule_keyword?(ctx: Module_keywordContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.module_keyword`.
	 * @param ctx the parse tree
	 */
	exitModule_keyword?(ctx: Module_keywordContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.interface_declaration`.
	 * @param ctx the parse tree
	 */
	enterInterface_declaration?(ctx: Interface_declarationContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.interface_declaration`.
	 * @param ctx the parse tree
	 */
	exitInterface_declaration?(ctx: Interface_declarationContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.interface_nonansi_header`.
	 * @param ctx the parse tree
	 */
	enterInterface_nonansi_header?(ctx: Interface_nonansi_headerContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.interface_nonansi_header`.
	 * @param ctx the parse tree
	 */
	exitInterface_nonansi_header?(ctx: Interface_nonansi_headerContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.interface_ansi_header`.
	 * @param ctx the parse tree
	 */
	enterInterface_ansi_header?(ctx: Interface_ansi_headerContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.interface_ansi_header`.
	 * @param ctx the parse tree
	 */
	exitInterface_ansi_header?(ctx: Interface_ansi_headerContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.program_declaration`.
	 * @param ctx the parse tree
	 */
	enterProgram_declaration?(ctx: Program_declarationContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.program_declaration`.
	 * @param ctx the parse tree
	 */
	exitProgram_declaration?(ctx: Program_declarationContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.program_nonansi_header`.
	 * @param ctx the parse tree
	 */
	enterProgram_nonansi_header?(ctx: Program_nonansi_headerContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.program_nonansi_header`.
	 * @param ctx the parse tree
	 */
	exitProgram_nonansi_header?(ctx: Program_nonansi_headerContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.program_ansi_header`.
	 * @param ctx the parse tree
	 */
	enterProgram_ansi_header?(ctx: Program_ansi_headerContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.program_ansi_header`.
	 * @param ctx the parse tree
	 */
	exitProgram_ansi_header?(ctx: Program_ansi_headerContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.checker_declaration`.
	 * @param ctx the parse tree
	 */
	enterChecker_declaration?(ctx: Checker_declarationContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.checker_declaration`.
	 * @param ctx the parse tree
	 */
	exitChecker_declaration?(ctx: Checker_declarationContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.class_declaration`.
	 * @param ctx the parse tree
	 */
	enterClass_declaration?(ctx: Class_declarationContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.class_declaration`.
	 * @param ctx the parse tree
	 */
	exitClass_declaration?(ctx: Class_declarationContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.interface_class_type`.
	 * @param ctx the parse tree
	 */
	enterInterface_class_type?(ctx: Interface_class_typeContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.interface_class_type`.
	 * @param ctx the parse tree
	 */
	exitInterface_class_type?(ctx: Interface_class_typeContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.interface_class_declaration`.
	 * @param ctx the parse tree
	 */
	enterInterface_class_declaration?(ctx: Interface_class_declarationContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.interface_class_declaration`.
	 * @param ctx the parse tree
	 */
	exitInterface_class_declaration?(ctx: Interface_class_declarationContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.interface_class_item`.
	 * @param ctx the parse tree
	 */
	enterInterface_class_item?(ctx: Interface_class_itemContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.interface_class_item`.
	 * @param ctx the parse tree
	 */
	exitInterface_class_item?(ctx: Interface_class_itemContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.interface_class_method`.
	 * @param ctx the parse tree
	 */
	enterInterface_class_method?(ctx: Interface_class_methodContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.interface_class_method`.
	 * @param ctx the parse tree
	 */
	exitInterface_class_method?(ctx: Interface_class_methodContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.package_declaration`.
	 * @param ctx the parse tree
	 */
	enterPackage_declaration?(ctx: Package_declarationContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.package_declaration`.
	 * @param ctx the parse tree
	 */
	exitPackage_declaration?(ctx: Package_declarationContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.timeunits_declaration`.
	 * @param ctx the parse tree
	 */
	enterTimeunits_declaration?(ctx: Timeunits_declarationContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.timeunits_declaration`.
	 * @param ctx the parse tree
	 */
	exitTimeunits_declaration?(ctx: Timeunits_declarationContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.parameter_port_list`.
	 * @param ctx the parse tree
	 */
	enterParameter_port_list?(ctx: Parameter_port_listContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.parameter_port_list`.
	 * @param ctx the parse tree
	 */
	exitParameter_port_list?(ctx: Parameter_port_listContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.parameter_port_declaration`.
	 * @param ctx the parse tree
	 */
	enterParameter_port_declaration?(ctx: Parameter_port_declarationContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.parameter_port_declaration`.
	 * @param ctx the parse tree
	 */
	exitParameter_port_declaration?(ctx: Parameter_port_declarationContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.list_of_ports`.
	 * @param ctx the parse tree
	 */
	enterList_of_ports?(ctx: List_of_portsContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.list_of_ports`.
	 * @param ctx the parse tree
	 */
	exitList_of_ports?(ctx: List_of_portsContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.list_of_port_declarations`.
	 * @param ctx the parse tree
	 */
	enterList_of_port_declarations?(ctx: List_of_port_declarationsContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.list_of_port_declarations`.
	 * @param ctx the parse tree
	 */
	exitList_of_port_declarations?(ctx: List_of_port_declarationsContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.port_declaration`.
	 * @param ctx the parse tree
	 */
	enterPort_declaration?(ctx: Port_declarationContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.port_declaration`.
	 * @param ctx the parse tree
	 */
	exitPort_declaration?(ctx: Port_declarationContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.port`.
	 * @param ctx the parse tree
	 */
	enterPort?(ctx: PortContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.port`.
	 * @param ctx the parse tree
	 */
	exitPort?(ctx: PortContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.port_expression`.
	 * @param ctx the parse tree
	 */
	enterPort_expression?(ctx: Port_expressionContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.port_expression`.
	 * @param ctx the parse tree
	 */
	exitPort_expression?(ctx: Port_expressionContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.port_reference`.
	 * @param ctx the parse tree
	 */
	enterPort_reference?(ctx: Port_referenceContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.port_reference`.
	 * @param ctx the parse tree
	 */
	exitPort_reference?(ctx: Port_referenceContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.port_direction`.
	 * @param ctx the parse tree
	 */
	enterPort_direction?(ctx: Port_directionContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.port_direction`.
	 * @param ctx the parse tree
	 */
	exitPort_direction?(ctx: Port_directionContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.net_port_header`.
	 * @param ctx the parse tree
	 */
	enterNet_port_header?(ctx: Net_port_headerContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.net_port_header`.
	 * @param ctx the parse tree
	 */
	exitNet_port_header?(ctx: Net_port_headerContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.variable_port_header`.
	 * @param ctx the parse tree
	 */
	enterVariable_port_header?(ctx: Variable_port_headerContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.variable_port_header`.
	 * @param ctx the parse tree
	 */
	exitVariable_port_header?(ctx: Variable_port_headerContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.interface_port_header`.
	 * @param ctx the parse tree
	 */
	enterInterface_port_header?(ctx: Interface_port_headerContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.interface_port_header`.
	 * @param ctx the parse tree
	 */
	exitInterface_port_header?(ctx: Interface_port_headerContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.ansi_port_declaration`.
	 * @param ctx the parse tree
	 */
	enterAnsi_port_declaration?(ctx: Ansi_port_declarationContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.ansi_port_declaration`.
	 * @param ctx the parse tree
	 */
	exitAnsi_port_declaration?(ctx: Ansi_port_declarationContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.elaboration_system_task`.
	 * @param ctx the parse tree
	 */
	enterElaboration_system_task?(ctx: Elaboration_system_taskContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.elaboration_system_task`.
	 * @param ctx the parse tree
	 */
	exitElaboration_system_task?(ctx: Elaboration_system_taskContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.finish_number`.
	 * @param ctx the parse tree
	 */
	enterFinish_number?(ctx: Finish_numberContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.finish_number`.
	 * @param ctx the parse tree
	 */
	exitFinish_number?(ctx: Finish_numberContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.module_common_item`.
	 * @param ctx the parse tree
	 */
	enterModule_common_item?(ctx: Module_common_itemContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.module_common_item`.
	 * @param ctx the parse tree
	 */
	exitModule_common_item?(ctx: Module_common_itemContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.module_item`.
	 * @param ctx the parse tree
	 */
	enterModule_item?(ctx: Module_itemContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.module_item`.
	 * @param ctx the parse tree
	 */
	exitModule_item?(ctx: Module_itemContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.module_or_generate_item`.
	 * @param ctx the parse tree
	 */
	enterModule_or_generate_item?(ctx: Module_or_generate_itemContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.module_or_generate_item`.
	 * @param ctx the parse tree
	 */
	exitModule_or_generate_item?(ctx: Module_or_generate_itemContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.module_or_generate_item_declaration`.
	 * @param ctx the parse tree
	 */
	enterModule_or_generate_item_declaration?(ctx: Module_or_generate_item_declarationContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.module_or_generate_item_declaration`.
	 * @param ctx the parse tree
	 */
	exitModule_or_generate_item_declaration?(ctx: Module_or_generate_item_declarationContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.non_port_module_item`.
	 * @param ctx the parse tree
	 */
	enterNon_port_module_item?(ctx: Non_port_module_itemContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.non_port_module_item`.
	 * @param ctx the parse tree
	 */
	exitNon_port_module_item?(ctx: Non_port_module_itemContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.parameter_override`.
	 * @param ctx the parse tree
	 */
	enterParameter_override?(ctx: Parameter_overrideContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.parameter_override`.
	 * @param ctx the parse tree
	 */
	exitParameter_override?(ctx: Parameter_overrideContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.bind_directive`.
	 * @param ctx the parse tree
	 */
	enterBind_directive?(ctx: Bind_directiveContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.bind_directive`.
	 * @param ctx the parse tree
	 */
	exitBind_directive?(ctx: Bind_directiveContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.bind_target_scope`.
	 * @param ctx the parse tree
	 */
	enterBind_target_scope?(ctx: Bind_target_scopeContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.bind_target_scope`.
	 * @param ctx the parse tree
	 */
	exitBind_target_scope?(ctx: Bind_target_scopeContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.bind_target_instance`.
	 * @param ctx the parse tree
	 */
	enterBind_target_instance?(ctx: Bind_target_instanceContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.bind_target_instance`.
	 * @param ctx the parse tree
	 */
	exitBind_target_instance?(ctx: Bind_target_instanceContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.bind_target_instance_list`.
	 * @param ctx the parse tree
	 */
	enterBind_target_instance_list?(ctx: Bind_target_instance_listContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.bind_target_instance_list`.
	 * @param ctx the parse tree
	 */
	exitBind_target_instance_list?(ctx: Bind_target_instance_listContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.bind_instantiation`.
	 * @param ctx the parse tree
	 */
	enterBind_instantiation?(ctx: Bind_instantiationContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.bind_instantiation`.
	 * @param ctx the parse tree
	 */
	exitBind_instantiation?(ctx: Bind_instantiationContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.interface_or_generate_item`.
	 * @param ctx the parse tree
	 */
	enterInterface_or_generate_item?(ctx: Interface_or_generate_itemContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.interface_or_generate_item`.
	 * @param ctx the parse tree
	 */
	exitInterface_or_generate_item?(ctx: Interface_or_generate_itemContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.extern_tf_declaration`.
	 * @param ctx the parse tree
	 */
	enterExtern_tf_declaration?(ctx: Extern_tf_declarationContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.extern_tf_declaration`.
	 * @param ctx the parse tree
	 */
	exitExtern_tf_declaration?(ctx: Extern_tf_declarationContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.interface_item`.
	 * @param ctx the parse tree
	 */
	enterInterface_item?(ctx: Interface_itemContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.interface_item`.
	 * @param ctx the parse tree
	 */
	exitInterface_item?(ctx: Interface_itemContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.non_port_interface_item`.
	 * @param ctx the parse tree
	 */
	enterNon_port_interface_item?(ctx: Non_port_interface_itemContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.non_port_interface_item`.
	 * @param ctx the parse tree
	 */
	exitNon_port_interface_item?(ctx: Non_port_interface_itemContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.program_item`.
	 * @param ctx the parse tree
	 */
	enterProgram_item?(ctx: Program_itemContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.program_item`.
	 * @param ctx the parse tree
	 */
	exitProgram_item?(ctx: Program_itemContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.non_port_program_item`.
	 * @param ctx the parse tree
	 */
	enterNon_port_program_item?(ctx: Non_port_program_itemContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.non_port_program_item`.
	 * @param ctx the parse tree
	 */
	exitNon_port_program_item?(ctx: Non_port_program_itemContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.program_generate_item`.
	 * @param ctx the parse tree
	 */
	enterProgram_generate_item?(ctx: Program_generate_itemContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.program_generate_item`.
	 * @param ctx the parse tree
	 */
	exitProgram_generate_item?(ctx: Program_generate_itemContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.checker_port_list`.
	 * @param ctx the parse tree
	 */
	enterChecker_port_list?(ctx: Checker_port_listContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.checker_port_list`.
	 * @param ctx the parse tree
	 */
	exitChecker_port_list?(ctx: Checker_port_listContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.checker_port_item`.
	 * @param ctx the parse tree
	 */
	enterChecker_port_item?(ctx: Checker_port_itemContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.checker_port_item`.
	 * @param ctx the parse tree
	 */
	exitChecker_port_item?(ctx: Checker_port_itemContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.checker_port_direction`.
	 * @param ctx the parse tree
	 */
	enterChecker_port_direction?(ctx: Checker_port_directionContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.checker_port_direction`.
	 * @param ctx the parse tree
	 */
	exitChecker_port_direction?(ctx: Checker_port_directionContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.checker_or_generate_item`.
	 * @param ctx the parse tree
	 */
	enterChecker_or_generate_item?(ctx: Checker_or_generate_itemContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.checker_or_generate_item`.
	 * @param ctx the parse tree
	 */
	exitChecker_or_generate_item?(ctx: Checker_or_generate_itemContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.checker_or_generate_item_declaration`.
	 * @param ctx the parse tree
	 */
	enterChecker_or_generate_item_declaration?(ctx: Checker_or_generate_item_declarationContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.checker_or_generate_item_declaration`.
	 * @param ctx the parse tree
	 */
	exitChecker_or_generate_item_declaration?(ctx: Checker_or_generate_item_declarationContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.checker_generate_item`.
	 * @param ctx the parse tree
	 */
	enterChecker_generate_item?(ctx: Checker_generate_itemContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.checker_generate_item`.
	 * @param ctx the parse tree
	 */
	exitChecker_generate_item?(ctx: Checker_generate_itemContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.class_item`.
	 * @param ctx the parse tree
	 */
	enterClass_item?(ctx: Class_itemContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.class_item`.
	 * @param ctx the parse tree
	 */
	exitClass_item?(ctx: Class_itemContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.class_property`.
	 * @param ctx the parse tree
	 */
	enterClass_property?(ctx: Class_propertyContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.class_property`.
	 * @param ctx the parse tree
	 */
	exitClass_property?(ctx: Class_propertyContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.class_method`.
	 * @param ctx the parse tree
	 */
	enterClass_method?(ctx: Class_methodContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.class_method`.
	 * @param ctx the parse tree
	 */
	exitClass_method?(ctx: Class_methodContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.class_constructor_prototype`.
	 * @param ctx the parse tree
	 */
	enterClass_constructor_prototype?(ctx: Class_constructor_prototypeContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.class_constructor_prototype`.
	 * @param ctx the parse tree
	 */
	exitClass_constructor_prototype?(ctx: Class_constructor_prototypeContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.class_constraint`.
	 * @param ctx the parse tree
	 */
	enterClass_constraint?(ctx: Class_constraintContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.class_constraint`.
	 * @param ctx the parse tree
	 */
	exitClass_constraint?(ctx: Class_constraintContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.class_item_qualifier`.
	 * @param ctx the parse tree
	 */
	enterClass_item_qualifier?(ctx: Class_item_qualifierContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.class_item_qualifier`.
	 * @param ctx the parse tree
	 */
	exitClass_item_qualifier?(ctx: Class_item_qualifierContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.property_qualifier`.
	 * @param ctx the parse tree
	 */
	enterProperty_qualifier?(ctx: Property_qualifierContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.property_qualifier`.
	 * @param ctx the parse tree
	 */
	exitProperty_qualifier?(ctx: Property_qualifierContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.random_qualifier`.
	 * @param ctx the parse tree
	 */
	enterRandom_qualifier?(ctx: Random_qualifierContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.random_qualifier`.
	 * @param ctx the parse tree
	 */
	exitRandom_qualifier?(ctx: Random_qualifierContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.method_qualifier`.
	 * @param ctx the parse tree
	 */
	enterMethod_qualifier?(ctx: Method_qualifierContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.method_qualifier`.
	 * @param ctx the parse tree
	 */
	exitMethod_qualifier?(ctx: Method_qualifierContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.method_prototype`.
	 * @param ctx the parse tree
	 */
	enterMethod_prototype?(ctx: Method_prototypeContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.method_prototype`.
	 * @param ctx the parse tree
	 */
	exitMethod_prototype?(ctx: Method_prototypeContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.class_constructor_declaration`.
	 * @param ctx the parse tree
	 */
	enterClass_constructor_declaration?(ctx: Class_constructor_declarationContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.class_constructor_declaration`.
	 * @param ctx the parse tree
	 */
	exitClass_constructor_declaration?(ctx: Class_constructor_declarationContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.constraint_declaration`.
	 * @param ctx the parse tree
	 */
	enterConstraint_declaration?(ctx: Constraint_declarationContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.constraint_declaration`.
	 * @param ctx the parse tree
	 */
	exitConstraint_declaration?(ctx: Constraint_declarationContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.constraint_block`.
	 * @param ctx the parse tree
	 */
	enterConstraint_block?(ctx: Constraint_blockContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.constraint_block`.
	 * @param ctx the parse tree
	 */
	exitConstraint_block?(ctx: Constraint_blockContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.constraint_block_item`.
	 * @param ctx the parse tree
	 */
	enterConstraint_block_item?(ctx: Constraint_block_itemContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.constraint_block_item`.
	 * @param ctx the parse tree
	 */
	exitConstraint_block_item?(ctx: Constraint_block_itemContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.solve_before_list`.
	 * @param ctx the parse tree
	 */
	enterSolve_before_list?(ctx: Solve_before_listContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.solve_before_list`.
	 * @param ctx the parse tree
	 */
	exitSolve_before_list?(ctx: Solve_before_listContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.constraint_primary`.
	 * @param ctx the parse tree
	 */
	enterConstraint_primary?(ctx: Constraint_primaryContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.constraint_primary`.
	 * @param ctx the parse tree
	 */
	exitConstraint_primary?(ctx: Constraint_primaryContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.constraint_expression`.
	 * @param ctx the parse tree
	 */
	enterConstraint_expression?(ctx: Constraint_expressionContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.constraint_expression`.
	 * @param ctx the parse tree
	 */
	exitConstraint_expression?(ctx: Constraint_expressionContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.uniqueness_constraint`.
	 * @param ctx the parse tree
	 */
	enterUniqueness_constraint?(ctx: Uniqueness_constraintContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.uniqueness_constraint`.
	 * @param ctx the parse tree
	 */
	exitUniqueness_constraint?(ctx: Uniqueness_constraintContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.constraint_set`.
	 * @param ctx the parse tree
	 */
	enterConstraint_set?(ctx: Constraint_setContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.constraint_set`.
	 * @param ctx the parse tree
	 */
	exitConstraint_set?(ctx: Constraint_setContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.dist_list`.
	 * @param ctx the parse tree
	 */
	enterDist_list?(ctx: Dist_listContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.dist_list`.
	 * @param ctx the parse tree
	 */
	exitDist_list?(ctx: Dist_listContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.dist_item`.
	 * @param ctx the parse tree
	 */
	enterDist_item?(ctx: Dist_itemContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.dist_item`.
	 * @param ctx the parse tree
	 */
	exitDist_item?(ctx: Dist_itemContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.dist_weight`.
	 * @param ctx the parse tree
	 */
	enterDist_weight?(ctx: Dist_weightContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.dist_weight`.
	 * @param ctx the parse tree
	 */
	exitDist_weight?(ctx: Dist_weightContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.constraint_prototype`.
	 * @param ctx the parse tree
	 */
	enterConstraint_prototype?(ctx: Constraint_prototypeContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.constraint_prototype`.
	 * @param ctx the parse tree
	 */
	exitConstraint_prototype?(ctx: Constraint_prototypeContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.constraint_prototype_qualifier`.
	 * @param ctx the parse tree
	 */
	enterConstraint_prototype_qualifier?(ctx: Constraint_prototype_qualifierContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.constraint_prototype_qualifier`.
	 * @param ctx the parse tree
	 */
	exitConstraint_prototype_qualifier?(ctx: Constraint_prototype_qualifierContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.extern_constraint_declaration`.
	 * @param ctx the parse tree
	 */
	enterExtern_constraint_declaration?(ctx: Extern_constraint_declarationContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.extern_constraint_declaration`.
	 * @param ctx the parse tree
	 */
	exitExtern_constraint_declaration?(ctx: Extern_constraint_declarationContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.identifier_list`.
	 * @param ctx the parse tree
	 */
	enterIdentifier_list?(ctx: Identifier_listContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.identifier_list`.
	 * @param ctx the parse tree
	 */
	exitIdentifier_list?(ctx: Identifier_listContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.package_item`.
	 * @param ctx the parse tree
	 */
	enterPackage_item?(ctx: Package_itemContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.package_item`.
	 * @param ctx the parse tree
	 */
	exitPackage_item?(ctx: Package_itemContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.package_or_generate_item_declaration`.
	 * @param ctx the parse tree
	 */
	enterPackage_or_generate_item_declaration?(ctx: Package_or_generate_item_declarationContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.package_or_generate_item_declaration`.
	 * @param ctx the parse tree
	 */
	exitPackage_or_generate_item_declaration?(ctx: Package_or_generate_item_declarationContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.anonymous_program`.
	 * @param ctx the parse tree
	 */
	enterAnonymous_program?(ctx: Anonymous_programContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.anonymous_program`.
	 * @param ctx the parse tree
	 */
	exitAnonymous_program?(ctx: Anonymous_programContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.anonymous_program_item`.
	 * @param ctx the parse tree
	 */
	enterAnonymous_program_item?(ctx: Anonymous_program_itemContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.anonymous_program_item`.
	 * @param ctx the parse tree
	 */
	exitAnonymous_program_item?(ctx: Anonymous_program_itemContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.local_parameter_declaration`.
	 * @param ctx the parse tree
	 */
	enterLocal_parameter_declaration?(ctx: Local_parameter_declarationContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.local_parameter_declaration`.
	 * @param ctx the parse tree
	 */
	exitLocal_parameter_declaration?(ctx: Local_parameter_declarationContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.parameter_declaration`.
	 * @param ctx the parse tree
	 */
	enterParameter_declaration?(ctx: Parameter_declarationContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.parameter_declaration`.
	 * @param ctx the parse tree
	 */
	exitParameter_declaration?(ctx: Parameter_declarationContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.specparam_declaration`.
	 * @param ctx the parse tree
	 */
	enterSpecparam_declaration?(ctx: Specparam_declarationContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.specparam_declaration`.
	 * @param ctx the parse tree
	 */
	exitSpecparam_declaration?(ctx: Specparam_declarationContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.inout_declaration`.
	 * @param ctx the parse tree
	 */
	enterInout_declaration?(ctx: Inout_declarationContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.inout_declaration`.
	 * @param ctx the parse tree
	 */
	exitInout_declaration?(ctx: Inout_declarationContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.input_declaration`.
	 * @param ctx the parse tree
	 */
	enterInput_declaration?(ctx: Input_declarationContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.input_declaration`.
	 * @param ctx the parse tree
	 */
	exitInput_declaration?(ctx: Input_declarationContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.output_declaration`.
	 * @param ctx the parse tree
	 */
	enterOutput_declaration?(ctx: Output_declarationContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.output_declaration`.
	 * @param ctx the parse tree
	 */
	exitOutput_declaration?(ctx: Output_declarationContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.interface_port_declaration`.
	 * @param ctx the parse tree
	 */
	enterInterface_port_declaration?(ctx: Interface_port_declarationContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.interface_port_declaration`.
	 * @param ctx the parse tree
	 */
	exitInterface_port_declaration?(ctx: Interface_port_declarationContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.ref_declaration`.
	 * @param ctx the parse tree
	 */
	enterRef_declaration?(ctx: Ref_declarationContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.ref_declaration`.
	 * @param ctx the parse tree
	 */
	exitRef_declaration?(ctx: Ref_declarationContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.data_declaration`.
	 * @param ctx the parse tree
	 */
	enterData_declaration?(ctx: Data_declarationContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.data_declaration`.
	 * @param ctx the parse tree
	 */
	exitData_declaration?(ctx: Data_declarationContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.package_import_declaration`.
	 * @param ctx the parse tree
	 */
	enterPackage_import_declaration?(ctx: Package_import_declarationContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.package_import_declaration`.
	 * @param ctx the parse tree
	 */
	exitPackage_import_declaration?(ctx: Package_import_declarationContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.package_import_item`.
	 * @param ctx the parse tree
	 */
	enterPackage_import_item?(ctx: Package_import_itemContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.package_import_item`.
	 * @param ctx the parse tree
	 */
	exitPackage_import_item?(ctx: Package_import_itemContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.package_export_declaration`.
	 * @param ctx the parse tree
	 */
	enterPackage_export_declaration?(ctx: Package_export_declarationContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.package_export_declaration`.
	 * @param ctx the parse tree
	 */
	exitPackage_export_declaration?(ctx: Package_export_declarationContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.genvar_declaration`.
	 * @param ctx the parse tree
	 */
	enterGenvar_declaration?(ctx: Genvar_declarationContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.genvar_declaration`.
	 * @param ctx the parse tree
	 */
	exitGenvar_declaration?(ctx: Genvar_declarationContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.net_declaration`.
	 * @param ctx the parse tree
	 */
	enterNet_declaration?(ctx: Net_declarationContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.net_declaration`.
	 * @param ctx the parse tree
	 */
	exitNet_declaration?(ctx: Net_declarationContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.type_declaration`.
	 * @param ctx the parse tree
	 */
	enterType_declaration?(ctx: Type_declarationContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.type_declaration`.
	 * @param ctx the parse tree
	 */
	exitType_declaration?(ctx: Type_declarationContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.net_type_declaration`.
	 * @param ctx the parse tree
	 */
	enterNet_type_declaration?(ctx: Net_type_declarationContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.net_type_declaration`.
	 * @param ctx the parse tree
	 */
	exitNet_type_declaration?(ctx: Net_type_declarationContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.lifetime`.
	 * @param ctx the parse tree
	 */
	enterLifetime?(ctx: LifetimeContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.lifetime`.
	 * @param ctx the parse tree
	 */
	exitLifetime?(ctx: LifetimeContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.data_type`.
	 * @param ctx the parse tree
	 */
	enterData_type?(ctx: Data_typeContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.data_type`.
	 * @param ctx the parse tree
	 */
	exitData_type?(ctx: Data_typeContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.data_type_or_implicit`.
	 * @param ctx the parse tree
	 */
	enterData_type_or_implicit?(ctx: Data_type_or_implicitContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.data_type_or_implicit`.
	 * @param ctx the parse tree
	 */
	exitData_type_or_implicit?(ctx: Data_type_or_implicitContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.implicit_data_type`.
	 * @param ctx the parse tree
	 */
	enterImplicit_data_type?(ctx: Implicit_data_typeContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.implicit_data_type`.
	 * @param ctx the parse tree
	 */
	exitImplicit_data_type?(ctx: Implicit_data_typeContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.enum_base_type`.
	 * @param ctx the parse tree
	 */
	enterEnum_base_type?(ctx: Enum_base_typeContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.enum_base_type`.
	 * @param ctx the parse tree
	 */
	exitEnum_base_type?(ctx: Enum_base_typeContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.enum_name_declaration`.
	 * @param ctx the parse tree
	 */
	enterEnum_name_declaration?(ctx: Enum_name_declarationContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.enum_name_declaration`.
	 * @param ctx the parse tree
	 */
	exitEnum_name_declaration?(ctx: Enum_name_declarationContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.class_scope`.
	 * @param ctx the parse tree
	 */
	enterClass_scope?(ctx: Class_scopeContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.class_scope`.
	 * @param ctx the parse tree
	 */
	exitClass_scope?(ctx: Class_scopeContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.class_type`.
	 * @param ctx the parse tree
	 */
	enterClass_type?(ctx: Class_typeContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.class_type`.
	 * @param ctx the parse tree
	 */
	exitClass_type?(ctx: Class_typeContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.integer_type`.
	 * @param ctx the parse tree
	 */
	enterInteger_type?(ctx: Integer_typeContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.integer_type`.
	 * @param ctx the parse tree
	 */
	exitInteger_type?(ctx: Integer_typeContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.integer_atom_type`.
	 * @param ctx the parse tree
	 */
	enterInteger_atom_type?(ctx: Integer_atom_typeContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.integer_atom_type`.
	 * @param ctx the parse tree
	 */
	exitInteger_atom_type?(ctx: Integer_atom_typeContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.integer_vector_type`.
	 * @param ctx the parse tree
	 */
	enterInteger_vector_type?(ctx: Integer_vector_typeContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.integer_vector_type`.
	 * @param ctx the parse tree
	 */
	exitInteger_vector_type?(ctx: Integer_vector_typeContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.non_integer_type`.
	 * @param ctx the parse tree
	 */
	enterNon_integer_type?(ctx: Non_integer_typeContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.non_integer_type`.
	 * @param ctx the parse tree
	 */
	exitNon_integer_type?(ctx: Non_integer_typeContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.net_type`.
	 * @param ctx the parse tree
	 */
	enterNet_type?(ctx: Net_typeContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.net_type`.
	 * @param ctx the parse tree
	 */
	exitNet_type?(ctx: Net_typeContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.net_port_type`.
	 * @param ctx the parse tree
	 */
	enterNet_port_type?(ctx: Net_port_typeContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.net_port_type`.
	 * @param ctx the parse tree
	 */
	exitNet_port_type?(ctx: Net_port_typeContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.variable_port_type`.
	 * @param ctx the parse tree
	 */
	enterVariable_port_type?(ctx: Variable_port_typeContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.variable_port_type`.
	 * @param ctx the parse tree
	 */
	exitVariable_port_type?(ctx: Variable_port_typeContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.var_data_type`.
	 * @param ctx the parse tree
	 */
	enterVar_data_type?(ctx: Var_data_typeContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.var_data_type`.
	 * @param ctx the parse tree
	 */
	exitVar_data_type?(ctx: Var_data_typeContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.signing`.
	 * @param ctx the parse tree
	 */
	enterSigning?(ctx: SigningContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.signing`.
	 * @param ctx the parse tree
	 */
	exitSigning?(ctx: SigningContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.simple_type`.
	 * @param ctx the parse tree
	 */
	enterSimple_type?(ctx: Simple_typeContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.simple_type`.
	 * @param ctx the parse tree
	 */
	exitSimple_type?(ctx: Simple_typeContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.struct_union_member`.
	 * @param ctx the parse tree
	 */
	enterStruct_union_member?(ctx: Struct_union_memberContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.struct_union_member`.
	 * @param ctx the parse tree
	 */
	exitStruct_union_member?(ctx: Struct_union_memberContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.data_type_or_void`.
	 * @param ctx the parse tree
	 */
	enterData_type_or_void?(ctx: Data_type_or_voidContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.data_type_or_void`.
	 * @param ctx the parse tree
	 */
	exitData_type_or_void?(ctx: Data_type_or_voidContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.struct_union`.
	 * @param ctx the parse tree
	 */
	enterStruct_union?(ctx: Struct_unionContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.struct_union`.
	 * @param ctx the parse tree
	 */
	exitStruct_union?(ctx: Struct_unionContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.type_reference`.
	 * @param ctx the parse tree
	 */
	enterType_reference?(ctx: Type_referenceContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.type_reference`.
	 * @param ctx the parse tree
	 */
	exitType_reference?(ctx: Type_referenceContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.drive_strength`.
	 * @param ctx the parse tree
	 */
	enterDrive_strength?(ctx: Drive_strengthContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.drive_strength`.
	 * @param ctx the parse tree
	 */
	exitDrive_strength?(ctx: Drive_strengthContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.strength0`.
	 * @param ctx the parse tree
	 */
	enterStrength0?(ctx: Strength0Context): void;
	/**
	 * Exit a parse tree produced by `SVParser.strength0`.
	 * @param ctx the parse tree
	 */
	exitStrength0?(ctx: Strength0Context): void;
	/**
	 * Enter a parse tree produced by `SVParser.strength1`.
	 * @param ctx the parse tree
	 */
	enterStrength1?(ctx: Strength1Context): void;
	/**
	 * Exit a parse tree produced by `SVParser.strength1`.
	 * @param ctx the parse tree
	 */
	exitStrength1?(ctx: Strength1Context): void;
	/**
	 * Enter a parse tree produced by `SVParser.charge_strength`.
	 * @param ctx the parse tree
	 */
	enterCharge_strength?(ctx: Charge_strengthContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.charge_strength`.
	 * @param ctx the parse tree
	 */
	exitCharge_strength?(ctx: Charge_strengthContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.delay3`.
	 * @param ctx the parse tree
	 */
	enterDelay3?(ctx: Delay3Context): void;
	/**
	 * Exit a parse tree produced by `SVParser.delay3`.
	 * @param ctx the parse tree
	 */
	exitDelay3?(ctx: Delay3Context): void;
	/**
	 * Enter a parse tree produced by `SVParser.delay2`.
	 * @param ctx the parse tree
	 */
	enterDelay2?(ctx: Delay2Context): void;
	/**
	 * Exit a parse tree produced by `SVParser.delay2`.
	 * @param ctx the parse tree
	 */
	exitDelay2?(ctx: Delay2Context): void;
	/**
	 * Enter a parse tree produced by `SVParser.delay_value`.
	 * @param ctx the parse tree
	 */
	enterDelay_value?(ctx: Delay_valueContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.delay_value`.
	 * @param ctx the parse tree
	 */
	exitDelay_value?(ctx: Delay_valueContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.list_of_defparam_assignments`.
	 * @param ctx the parse tree
	 */
	enterList_of_defparam_assignments?(ctx: List_of_defparam_assignmentsContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.list_of_defparam_assignments`.
	 * @param ctx the parse tree
	 */
	exitList_of_defparam_assignments?(ctx: List_of_defparam_assignmentsContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.list_of_genvar_identifiers`.
	 * @param ctx the parse tree
	 */
	enterList_of_genvar_identifiers?(ctx: List_of_genvar_identifiersContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.list_of_genvar_identifiers`.
	 * @param ctx the parse tree
	 */
	exitList_of_genvar_identifiers?(ctx: List_of_genvar_identifiersContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.list_of_interface_identifiers`.
	 * @param ctx the parse tree
	 */
	enterList_of_interface_identifiers?(ctx: List_of_interface_identifiersContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.list_of_interface_identifiers`.
	 * @param ctx the parse tree
	 */
	exitList_of_interface_identifiers?(ctx: List_of_interface_identifiersContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.list_of_net_decl_assignments`.
	 * @param ctx the parse tree
	 */
	enterList_of_net_decl_assignments?(ctx: List_of_net_decl_assignmentsContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.list_of_net_decl_assignments`.
	 * @param ctx the parse tree
	 */
	exitList_of_net_decl_assignments?(ctx: List_of_net_decl_assignmentsContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.list_of_param_assignments`.
	 * @param ctx the parse tree
	 */
	enterList_of_param_assignments?(ctx: List_of_param_assignmentsContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.list_of_param_assignments`.
	 * @param ctx the parse tree
	 */
	exitList_of_param_assignments?(ctx: List_of_param_assignmentsContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.list_of_port_identifiers`.
	 * @param ctx the parse tree
	 */
	enterList_of_port_identifiers?(ctx: List_of_port_identifiersContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.list_of_port_identifiers`.
	 * @param ctx the parse tree
	 */
	exitList_of_port_identifiers?(ctx: List_of_port_identifiersContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.list_of_specparam_assignments`.
	 * @param ctx the parse tree
	 */
	enterList_of_specparam_assignments?(ctx: List_of_specparam_assignmentsContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.list_of_specparam_assignments`.
	 * @param ctx the parse tree
	 */
	exitList_of_specparam_assignments?(ctx: List_of_specparam_assignmentsContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.list_of_tf_variable_identifiers`.
	 * @param ctx the parse tree
	 */
	enterList_of_tf_variable_identifiers?(ctx: List_of_tf_variable_identifiersContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.list_of_tf_variable_identifiers`.
	 * @param ctx the parse tree
	 */
	exitList_of_tf_variable_identifiers?(ctx: List_of_tf_variable_identifiersContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.list_of_type_assignments`.
	 * @param ctx the parse tree
	 */
	enterList_of_type_assignments?(ctx: List_of_type_assignmentsContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.list_of_type_assignments`.
	 * @param ctx the parse tree
	 */
	exitList_of_type_assignments?(ctx: List_of_type_assignmentsContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.list_of_variable_decl_assignments`.
	 * @param ctx the parse tree
	 */
	enterList_of_variable_decl_assignments?(ctx: List_of_variable_decl_assignmentsContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.list_of_variable_decl_assignments`.
	 * @param ctx the parse tree
	 */
	exitList_of_variable_decl_assignments?(ctx: List_of_variable_decl_assignmentsContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.list_of_variable_identifiers`.
	 * @param ctx the parse tree
	 */
	enterList_of_variable_identifiers?(ctx: List_of_variable_identifiersContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.list_of_variable_identifiers`.
	 * @param ctx the parse tree
	 */
	exitList_of_variable_identifiers?(ctx: List_of_variable_identifiersContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.list_of_variable_port_identifiers`.
	 * @param ctx the parse tree
	 */
	enterList_of_variable_port_identifiers?(ctx: List_of_variable_port_identifiersContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.list_of_variable_port_identifiers`.
	 * @param ctx the parse tree
	 */
	exitList_of_variable_port_identifiers?(ctx: List_of_variable_port_identifiersContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.defparam_assignment`.
	 * @param ctx the parse tree
	 */
	enterDefparam_assignment?(ctx: Defparam_assignmentContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.defparam_assignment`.
	 * @param ctx the parse tree
	 */
	exitDefparam_assignment?(ctx: Defparam_assignmentContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.net_decl_assignment`.
	 * @param ctx the parse tree
	 */
	enterNet_decl_assignment?(ctx: Net_decl_assignmentContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.net_decl_assignment`.
	 * @param ctx the parse tree
	 */
	exitNet_decl_assignment?(ctx: Net_decl_assignmentContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.param_assignment`.
	 * @param ctx the parse tree
	 */
	enterParam_assignment?(ctx: Param_assignmentContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.param_assignment`.
	 * @param ctx the parse tree
	 */
	exitParam_assignment?(ctx: Param_assignmentContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.specparam_assignment`.
	 * @param ctx the parse tree
	 */
	enterSpecparam_assignment?(ctx: Specparam_assignmentContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.specparam_assignment`.
	 * @param ctx the parse tree
	 */
	exitSpecparam_assignment?(ctx: Specparam_assignmentContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.type_assignment`.
	 * @param ctx the parse tree
	 */
	enterType_assignment?(ctx: Type_assignmentContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.type_assignment`.
	 * @param ctx the parse tree
	 */
	exitType_assignment?(ctx: Type_assignmentContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.pulse_control_specparam`.
	 * @param ctx the parse tree
	 */
	enterPulse_control_specparam?(ctx: Pulse_control_specparamContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.pulse_control_specparam`.
	 * @param ctx the parse tree
	 */
	exitPulse_control_specparam?(ctx: Pulse_control_specparamContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.error_limit_value`.
	 * @param ctx the parse tree
	 */
	enterError_limit_value?(ctx: Error_limit_valueContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.error_limit_value`.
	 * @param ctx the parse tree
	 */
	exitError_limit_value?(ctx: Error_limit_valueContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.reject_limit_value`.
	 * @param ctx the parse tree
	 */
	enterReject_limit_value?(ctx: Reject_limit_valueContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.reject_limit_value`.
	 * @param ctx the parse tree
	 */
	exitReject_limit_value?(ctx: Reject_limit_valueContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.limit_value`.
	 * @param ctx the parse tree
	 */
	enterLimit_value?(ctx: Limit_valueContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.limit_value`.
	 * @param ctx the parse tree
	 */
	exitLimit_value?(ctx: Limit_valueContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.variable_decl_assignment`.
	 * @param ctx the parse tree
	 */
	enterVariable_decl_assignment?(ctx: Variable_decl_assignmentContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.variable_decl_assignment`.
	 * @param ctx the parse tree
	 */
	exitVariable_decl_assignment?(ctx: Variable_decl_assignmentContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.class_new`.
	 * @param ctx the parse tree
	 */
	enterClass_new?(ctx: Class_newContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.class_new`.
	 * @param ctx the parse tree
	 */
	exitClass_new?(ctx: Class_newContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.dynamic_array_new`.
	 * @param ctx the parse tree
	 */
	enterDynamic_array_new?(ctx: Dynamic_array_newContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.dynamic_array_new`.
	 * @param ctx the parse tree
	 */
	exitDynamic_array_new?(ctx: Dynamic_array_newContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.unpacked_dimension`.
	 * @param ctx the parse tree
	 */
	enterUnpacked_dimension?(ctx: Unpacked_dimensionContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.unpacked_dimension`.
	 * @param ctx the parse tree
	 */
	exitUnpacked_dimension?(ctx: Unpacked_dimensionContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.packed_dimension`.
	 * @param ctx the parse tree
	 */
	enterPacked_dimension?(ctx: Packed_dimensionContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.packed_dimension`.
	 * @param ctx the parse tree
	 */
	exitPacked_dimension?(ctx: Packed_dimensionContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.associative_dimension`.
	 * @param ctx the parse tree
	 */
	enterAssociative_dimension?(ctx: Associative_dimensionContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.associative_dimension`.
	 * @param ctx the parse tree
	 */
	exitAssociative_dimension?(ctx: Associative_dimensionContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.variable_dimension`.
	 * @param ctx the parse tree
	 */
	enterVariable_dimension?(ctx: Variable_dimensionContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.variable_dimension`.
	 * @param ctx the parse tree
	 */
	exitVariable_dimension?(ctx: Variable_dimensionContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.queue_dimension`.
	 * @param ctx the parse tree
	 */
	enterQueue_dimension?(ctx: Queue_dimensionContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.queue_dimension`.
	 * @param ctx the parse tree
	 */
	exitQueue_dimension?(ctx: Queue_dimensionContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.unsized_dimension`.
	 * @param ctx the parse tree
	 */
	enterUnsized_dimension?(ctx: Unsized_dimensionContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.unsized_dimension`.
	 * @param ctx the parse tree
	 */
	exitUnsized_dimension?(ctx: Unsized_dimensionContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.function_data_type_or_implicit`.
	 * @param ctx the parse tree
	 */
	enterFunction_data_type_or_implicit?(ctx: Function_data_type_or_implicitContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.function_data_type_or_implicit`.
	 * @param ctx the parse tree
	 */
	exitFunction_data_type_or_implicit?(ctx: Function_data_type_or_implicitContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.function_declaration`.
	 * @param ctx the parse tree
	 */
	enterFunction_declaration?(ctx: Function_declarationContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.function_declaration`.
	 * @param ctx the parse tree
	 */
	exitFunction_declaration?(ctx: Function_declarationContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.function_body_declaration`.
	 * @param ctx the parse tree
	 */
	enterFunction_body_declaration?(ctx: Function_body_declarationContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.function_body_declaration`.
	 * @param ctx the parse tree
	 */
	exitFunction_body_declaration?(ctx: Function_body_declarationContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.function_prototype`.
	 * @param ctx the parse tree
	 */
	enterFunction_prototype?(ctx: Function_prototypeContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.function_prototype`.
	 * @param ctx the parse tree
	 */
	exitFunction_prototype?(ctx: Function_prototypeContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.dpi_import_export`.
	 * @param ctx the parse tree
	 */
	enterDpi_import_export?(ctx: Dpi_import_exportContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.dpi_import_export`.
	 * @param ctx the parse tree
	 */
	exitDpi_import_export?(ctx: Dpi_import_exportContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.dpi_spec_string`.
	 * @param ctx the parse tree
	 */
	enterDpi_spec_string?(ctx: Dpi_spec_stringContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.dpi_spec_string`.
	 * @param ctx the parse tree
	 */
	exitDpi_spec_string?(ctx: Dpi_spec_stringContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.dpi_function_import_property`.
	 * @param ctx the parse tree
	 */
	enterDpi_function_import_property?(ctx: Dpi_function_import_propertyContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.dpi_function_import_property`.
	 * @param ctx the parse tree
	 */
	exitDpi_function_import_property?(ctx: Dpi_function_import_propertyContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.dpi_task_import_property`.
	 * @param ctx the parse tree
	 */
	enterDpi_task_import_property?(ctx: Dpi_task_import_propertyContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.dpi_task_import_property`.
	 * @param ctx the parse tree
	 */
	exitDpi_task_import_property?(ctx: Dpi_task_import_propertyContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.dpi_function_proto`.
	 * @param ctx the parse tree
	 */
	enterDpi_function_proto?(ctx: Dpi_function_protoContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.dpi_function_proto`.
	 * @param ctx the parse tree
	 */
	exitDpi_function_proto?(ctx: Dpi_function_protoContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.dpi_task_proto`.
	 * @param ctx the parse tree
	 */
	enterDpi_task_proto?(ctx: Dpi_task_protoContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.dpi_task_proto`.
	 * @param ctx the parse tree
	 */
	exitDpi_task_proto?(ctx: Dpi_task_protoContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.task_declaration`.
	 * @param ctx the parse tree
	 */
	enterTask_declaration?(ctx: Task_declarationContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.task_declaration`.
	 * @param ctx the parse tree
	 */
	exitTask_declaration?(ctx: Task_declarationContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.task_body_declaration`.
	 * @param ctx the parse tree
	 */
	enterTask_body_declaration?(ctx: Task_body_declarationContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.task_body_declaration`.
	 * @param ctx the parse tree
	 */
	exitTask_body_declaration?(ctx: Task_body_declarationContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.tf_item_declaration`.
	 * @param ctx the parse tree
	 */
	enterTf_item_declaration?(ctx: Tf_item_declarationContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.tf_item_declaration`.
	 * @param ctx the parse tree
	 */
	exitTf_item_declaration?(ctx: Tf_item_declarationContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.tf_port_list`.
	 * @param ctx the parse tree
	 */
	enterTf_port_list?(ctx: Tf_port_listContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.tf_port_list`.
	 * @param ctx the parse tree
	 */
	exitTf_port_list?(ctx: Tf_port_listContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.tf_port_item`.
	 * @param ctx the parse tree
	 */
	enterTf_port_item?(ctx: Tf_port_itemContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.tf_port_item`.
	 * @param ctx the parse tree
	 */
	exitTf_port_item?(ctx: Tf_port_itemContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.tf_port_direction`.
	 * @param ctx the parse tree
	 */
	enterTf_port_direction?(ctx: Tf_port_directionContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.tf_port_direction`.
	 * @param ctx the parse tree
	 */
	exitTf_port_direction?(ctx: Tf_port_directionContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.tf_port_declaration`.
	 * @param ctx the parse tree
	 */
	enterTf_port_declaration?(ctx: Tf_port_declarationContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.tf_port_declaration`.
	 * @param ctx the parse tree
	 */
	exitTf_port_declaration?(ctx: Tf_port_declarationContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.task_prototype`.
	 * @param ctx the parse tree
	 */
	enterTask_prototype?(ctx: Task_prototypeContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.task_prototype`.
	 * @param ctx the parse tree
	 */
	exitTask_prototype?(ctx: Task_prototypeContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.block_item_declaration`.
	 * @param ctx the parse tree
	 */
	enterBlock_item_declaration?(ctx: Block_item_declarationContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.block_item_declaration`.
	 * @param ctx the parse tree
	 */
	exitBlock_item_declaration?(ctx: Block_item_declarationContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.modport_declaration`.
	 * @param ctx the parse tree
	 */
	enterModport_declaration?(ctx: Modport_declarationContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.modport_declaration`.
	 * @param ctx the parse tree
	 */
	exitModport_declaration?(ctx: Modport_declarationContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.modport_item`.
	 * @param ctx the parse tree
	 */
	enterModport_item?(ctx: Modport_itemContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.modport_item`.
	 * @param ctx the parse tree
	 */
	exitModport_item?(ctx: Modport_itemContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.modport_ports_declaration`.
	 * @param ctx the parse tree
	 */
	enterModport_ports_declaration?(ctx: Modport_ports_declarationContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.modport_ports_declaration`.
	 * @param ctx the parse tree
	 */
	exitModport_ports_declaration?(ctx: Modport_ports_declarationContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.modport_clocking_declaration`.
	 * @param ctx the parse tree
	 */
	enterModport_clocking_declaration?(ctx: Modport_clocking_declarationContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.modport_clocking_declaration`.
	 * @param ctx the parse tree
	 */
	exitModport_clocking_declaration?(ctx: Modport_clocking_declarationContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.modport_simple_ports_declaration`.
	 * @param ctx the parse tree
	 */
	enterModport_simple_ports_declaration?(ctx: Modport_simple_ports_declarationContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.modport_simple_ports_declaration`.
	 * @param ctx the parse tree
	 */
	exitModport_simple_ports_declaration?(ctx: Modport_simple_ports_declarationContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.modport_simple_port`.
	 * @param ctx the parse tree
	 */
	enterModport_simple_port?(ctx: Modport_simple_portContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.modport_simple_port`.
	 * @param ctx the parse tree
	 */
	exitModport_simple_port?(ctx: Modport_simple_portContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.modport_tf_ports_declaration`.
	 * @param ctx the parse tree
	 */
	enterModport_tf_ports_declaration?(ctx: Modport_tf_ports_declarationContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.modport_tf_ports_declaration`.
	 * @param ctx the parse tree
	 */
	exitModport_tf_ports_declaration?(ctx: Modport_tf_ports_declarationContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.modport_tf_port`.
	 * @param ctx the parse tree
	 */
	enterModport_tf_port?(ctx: Modport_tf_portContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.modport_tf_port`.
	 * @param ctx the parse tree
	 */
	exitModport_tf_port?(ctx: Modport_tf_portContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.import_export`.
	 * @param ctx the parse tree
	 */
	enterImport_export?(ctx: Import_exportContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.import_export`.
	 * @param ctx the parse tree
	 */
	exitImport_export?(ctx: Import_exportContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.concurrent_assertion_item`.
	 * @param ctx the parse tree
	 */
	enterConcurrent_assertion_item?(ctx: Concurrent_assertion_itemContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.concurrent_assertion_item`.
	 * @param ctx the parse tree
	 */
	exitConcurrent_assertion_item?(ctx: Concurrent_assertion_itemContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.concurrent_assertion_statement`.
	 * @param ctx the parse tree
	 */
	enterConcurrent_assertion_statement?(ctx: Concurrent_assertion_statementContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.concurrent_assertion_statement`.
	 * @param ctx the parse tree
	 */
	exitConcurrent_assertion_statement?(ctx: Concurrent_assertion_statementContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.assert_property_statement`.
	 * @param ctx the parse tree
	 */
	enterAssert_property_statement?(ctx: Assert_property_statementContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.assert_property_statement`.
	 * @param ctx the parse tree
	 */
	exitAssert_property_statement?(ctx: Assert_property_statementContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.assume_property_statement`.
	 * @param ctx the parse tree
	 */
	enterAssume_property_statement?(ctx: Assume_property_statementContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.assume_property_statement`.
	 * @param ctx the parse tree
	 */
	exitAssume_property_statement?(ctx: Assume_property_statementContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.cover_property_statement`.
	 * @param ctx the parse tree
	 */
	enterCover_property_statement?(ctx: Cover_property_statementContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.cover_property_statement`.
	 * @param ctx the parse tree
	 */
	exitCover_property_statement?(ctx: Cover_property_statementContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.expect_property_statement`.
	 * @param ctx the parse tree
	 */
	enterExpect_property_statement?(ctx: Expect_property_statementContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.expect_property_statement`.
	 * @param ctx the parse tree
	 */
	exitExpect_property_statement?(ctx: Expect_property_statementContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.cover_sequence_statement`.
	 * @param ctx the parse tree
	 */
	enterCover_sequence_statement?(ctx: Cover_sequence_statementContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.cover_sequence_statement`.
	 * @param ctx the parse tree
	 */
	exitCover_sequence_statement?(ctx: Cover_sequence_statementContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.restrict_property_statement`.
	 * @param ctx the parse tree
	 */
	enterRestrict_property_statement?(ctx: Restrict_property_statementContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.restrict_property_statement`.
	 * @param ctx the parse tree
	 */
	exitRestrict_property_statement?(ctx: Restrict_property_statementContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.property_instance`.
	 * @param ctx the parse tree
	 */
	enterProperty_instance?(ctx: Property_instanceContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.property_instance`.
	 * @param ctx the parse tree
	 */
	exitProperty_instance?(ctx: Property_instanceContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.property_list_of_arguments`.
	 * @param ctx the parse tree
	 */
	enterProperty_list_of_arguments?(ctx: Property_list_of_argumentsContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.property_list_of_arguments`.
	 * @param ctx the parse tree
	 */
	exitProperty_list_of_arguments?(ctx: Property_list_of_argumentsContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.property_actual_arg`.
	 * @param ctx the parse tree
	 */
	enterProperty_actual_arg?(ctx: Property_actual_argContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.property_actual_arg`.
	 * @param ctx the parse tree
	 */
	exitProperty_actual_arg?(ctx: Property_actual_argContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.assertion_item_declaration`.
	 * @param ctx the parse tree
	 */
	enterAssertion_item_declaration?(ctx: Assertion_item_declarationContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.assertion_item_declaration`.
	 * @param ctx the parse tree
	 */
	exitAssertion_item_declaration?(ctx: Assertion_item_declarationContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.property_declaration`.
	 * @param ctx the parse tree
	 */
	enterProperty_declaration?(ctx: Property_declarationContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.property_declaration`.
	 * @param ctx the parse tree
	 */
	exitProperty_declaration?(ctx: Property_declarationContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.property_port_list`.
	 * @param ctx the parse tree
	 */
	enterProperty_port_list?(ctx: Property_port_listContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.property_port_list`.
	 * @param ctx the parse tree
	 */
	exitProperty_port_list?(ctx: Property_port_listContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.property_port_item`.
	 * @param ctx the parse tree
	 */
	enterProperty_port_item?(ctx: Property_port_itemContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.property_port_item`.
	 * @param ctx the parse tree
	 */
	exitProperty_port_item?(ctx: Property_port_itemContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.property_lvar_port_direction`.
	 * @param ctx the parse tree
	 */
	enterProperty_lvar_port_direction?(ctx: Property_lvar_port_directionContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.property_lvar_port_direction`.
	 * @param ctx the parse tree
	 */
	exitProperty_lvar_port_direction?(ctx: Property_lvar_port_directionContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.property_formal_type`.
	 * @param ctx the parse tree
	 */
	enterProperty_formal_type?(ctx: Property_formal_typeContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.property_formal_type`.
	 * @param ctx the parse tree
	 */
	exitProperty_formal_type?(ctx: Property_formal_typeContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.property_spec`.
	 * @param ctx the parse tree
	 */
	enterProperty_spec?(ctx: Property_specContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.property_spec`.
	 * @param ctx the parse tree
	 */
	exitProperty_spec?(ctx: Property_specContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.property_expr`.
	 * @param ctx the parse tree
	 */
	enterProperty_expr?(ctx: Property_exprContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.property_expr`.
	 * @param ctx the parse tree
	 */
	exitProperty_expr?(ctx: Property_exprContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.property_case_item`.
	 * @param ctx the parse tree
	 */
	enterProperty_case_item?(ctx: Property_case_itemContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.property_case_item`.
	 * @param ctx the parse tree
	 */
	exitProperty_case_item?(ctx: Property_case_itemContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.sequence_declaration`.
	 * @param ctx the parse tree
	 */
	enterSequence_declaration?(ctx: Sequence_declarationContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.sequence_declaration`.
	 * @param ctx the parse tree
	 */
	exitSequence_declaration?(ctx: Sequence_declarationContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.sequence_port_list`.
	 * @param ctx the parse tree
	 */
	enterSequence_port_list?(ctx: Sequence_port_listContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.sequence_port_list`.
	 * @param ctx the parse tree
	 */
	exitSequence_port_list?(ctx: Sequence_port_listContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.sequence_port_item`.
	 * @param ctx the parse tree
	 */
	enterSequence_port_item?(ctx: Sequence_port_itemContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.sequence_port_item`.
	 * @param ctx the parse tree
	 */
	exitSequence_port_item?(ctx: Sequence_port_itemContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.sequence_lvar_port_direction`.
	 * @param ctx the parse tree
	 */
	enterSequence_lvar_port_direction?(ctx: Sequence_lvar_port_directionContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.sequence_lvar_port_direction`.
	 * @param ctx the parse tree
	 */
	exitSequence_lvar_port_direction?(ctx: Sequence_lvar_port_directionContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.sequence_formal_type`.
	 * @param ctx the parse tree
	 */
	enterSequence_formal_type?(ctx: Sequence_formal_typeContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.sequence_formal_type`.
	 * @param ctx the parse tree
	 */
	exitSequence_formal_type?(ctx: Sequence_formal_typeContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.sequence_expr`.
	 * @param ctx the parse tree
	 */
	enterSequence_expr?(ctx: Sequence_exprContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.sequence_expr`.
	 * @param ctx the parse tree
	 */
	exitSequence_expr?(ctx: Sequence_exprContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.cycle_delay_range`.
	 * @param ctx the parse tree
	 */
	enterCycle_delay_range?(ctx: Cycle_delay_rangeContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.cycle_delay_range`.
	 * @param ctx the parse tree
	 */
	exitCycle_delay_range?(ctx: Cycle_delay_rangeContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.sequence_method_call`.
	 * @param ctx the parse tree
	 */
	enterSequence_method_call?(ctx: Sequence_method_callContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.sequence_method_call`.
	 * @param ctx the parse tree
	 */
	exitSequence_method_call?(ctx: Sequence_method_callContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.sequence_match_item`.
	 * @param ctx the parse tree
	 */
	enterSequence_match_item?(ctx: Sequence_match_itemContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.sequence_match_item`.
	 * @param ctx the parse tree
	 */
	exitSequence_match_item?(ctx: Sequence_match_itemContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.sequence_instance`.
	 * @param ctx the parse tree
	 */
	enterSequence_instance?(ctx: Sequence_instanceContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.sequence_instance`.
	 * @param ctx the parse tree
	 */
	exitSequence_instance?(ctx: Sequence_instanceContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.sequence_list_of_arguments`.
	 * @param ctx the parse tree
	 */
	enterSequence_list_of_arguments?(ctx: Sequence_list_of_argumentsContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.sequence_list_of_arguments`.
	 * @param ctx the parse tree
	 */
	exitSequence_list_of_arguments?(ctx: Sequence_list_of_argumentsContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.sequence_actual_arg`.
	 * @param ctx the parse tree
	 */
	enterSequence_actual_arg?(ctx: Sequence_actual_argContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.sequence_actual_arg`.
	 * @param ctx the parse tree
	 */
	exitSequence_actual_arg?(ctx: Sequence_actual_argContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.boolean_abbrev`.
	 * @param ctx the parse tree
	 */
	enterBoolean_abbrev?(ctx: Boolean_abbrevContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.boolean_abbrev`.
	 * @param ctx the parse tree
	 */
	exitBoolean_abbrev?(ctx: Boolean_abbrevContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.sequence_abbrev`.
	 * @param ctx the parse tree
	 */
	enterSequence_abbrev?(ctx: Sequence_abbrevContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.sequence_abbrev`.
	 * @param ctx the parse tree
	 */
	exitSequence_abbrev?(ctx: Sequence_abbrevContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.consecutive_repetition`.
	 * @param ctx the parse tree
	 */
	enterConsecutive_repetition?(ctx: Consecutive_repetitionContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.consecutive_repetition`.
	 * @param ctx the parse tree
	 */
	exitConsecutive_repetition?(ctx: Consecutive_repetitionContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.non_consecutive_repetition`.
	 * @param ctx the parse tree
	 */
	enterNon_consecutive_repetition?(ctx: Non_consecutive_repetitionContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.non_consecutive_repetition`.
	 * @param ctx the parse tree
	 */
	exitNon_consecutive_repetition?(ctx: Non_consecutive_repetitionContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.goto_repetition`.
	 * @param ctx the parse tree
	 */
	enterGoto_repetition?(ctx: Goto_repetitionContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.goto_repetition`.
	 * @param ctx the parse tree
	 */
	exitGoto_repetition?(ctx: Goto_repetitionContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.const_or_range_expression`.
	 * @param ctx the parse tree
	 */
	enterConst_or_range_expression?(ctx: Const_or_range_expressionContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.const_or_range_expression`.
	 * @param ctx the parse tree
	 */
	exitConst_or_range_expression?(ctx: Const_or_range_expressionContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.cycle_delay_const_range_expression`.
	 * @param ctx the parse tree
	 */
	enterCycle_delay_const_range_expression?(ctx: Cycle_delay_const_range_expressionContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.cycle_delay_const_range_expression`.
	 * @param ctx the parse tree
	 */
	exitCycle_delay_const_range_expression?(ctx: Cycle_delay_const_range_expressionContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.expression_or_dist`.
	 * @param ctx the parse tree
	 */
	enterExpression_or_dist?(ctx: Expression_or_distContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.expression_or_dist`.
	 * @param ctx the parse tree
	 */
	exitExpression_or_dist?(ctx: Expression_or_distContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.assertion_variable_declaration`.
	 * @param ctx the parse tree
	 */
	enterAssertion_variable_declaration?(ctx: Assertion_variable_declarationContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.assertion_variable_declaration`.
	 * @param ctx the parse tree
	 */
	exitAssertion_variable_declaration?(ctx: Assertion_variable_declarationContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.covergroup_declaration`.
	 * @param ctx the parse tree
	 */
	enterCovergroup_declaration?(ctx: Covergroup_declarationContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.covergroup_declaration`.
	 * @param ctx the parse tree
	 */
	exitCovergroup_declaration?(ctx: Covergroup_declarationContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.coverage_spec_or_option`.
	 * @param ctx the parse tree
	 */
	enterCoverage_spec_or_option?(ctx: Coverage_spec_or_optionContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.coverage_spec_or_option`.
	 * @param ctx the parse tree
	 */
	exitCoverage_spec_or_option?(ctx: Coverage_spec_or_optionContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.coverage_option`.
	 * @param ctx the parse tree
	 */
	enterCoverage_option?(ctx: Coverage_optionContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.coverage_option`.
	 * @param ctx the parse tree
	 */
	exitCoverage_option?(ctx: Coverage_optionContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.coverage_spec`.
	 * @param ctx the parse tree
	 */
	enterCoverage_spec?(ctx: Coverage_specContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.coverage_spec`.
	 * @param ctx the parse tree
	 */
	exitCoverage_spec?(ctx: Coverage_specContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.coverage_event`.
	 * @param ctx the parse tree
	 */
	enterCoverage_event?(ctx: Coverage_eventContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.coverage_event`.
	 * @param ctx the parse tree
	 */
	exitCoverage_event?(ctx: Coverage_eventContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.block_event_expression`.
	 * @param ctx the parse tree
	 */
	enterBlock_event_expression?(ctx: Block_event_expressionContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.block_event_expression`.
	 * @param ctx the parse tree
	 */
	exitBlock_event_expression?(ctx: Block_event_expressionContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.hierarchical_btf_identifier`.
	 * @param ctx the parse tree
	 */
	enterHierarchical_btf_identifier?(ctx: Hierarchical_btf_identifierContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.hierarchical_btf_identifier`.
	 * @param ctx the parse tree
	 */
	exitHierarchical_btf_identifier?(ctx: Hierarchical_btf_identifierContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.cover_point`.
	 * @param ctx the parse tree
	 */
	enterCover_point?(ctx: Cover_pointContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.cover_point`.
	 * @param ctx the parse tree
	 */
	exitCover_point?(ctx: Cover_pointContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.bins_or_empty`.
	 * @param ctx the parse tree
	 */
	enterBins_or_empty?(ctx: Bins_or_emptyContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.bins_or_empty`.
	 * @param ctx the parse tree
	 */
	exitBins_or_empty?(ctx: Bins_or_emptyContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.bins_or_options`.
	 * @param ctx the parse tree
	 */
	enterBins_or_options?(ctx: Bins_or_optionsContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.bins_or_options`.
	 * @param ctx the parse tree
	 */
	exitBins_or_options?(ctx: Bins_or_optionsContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.bins_keyword`.
	 * @param ctx the parse tree
	 */
	enterBins_keyword?(ctx: Bins_keywordContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.bins_keyword`.
	 * @param ctx the parse tree
	 */
	exitBins_keyword?(ctx: Bins_keywordContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.trans_list`.
	 * @param ctx the parse tree
	 */
	enterTrans_list?(ctx: Trans_listContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.trans_list`.
	 * @param ctx the parse tree
	 */
	exitTrans_list?(ctx: Trans_listContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.trans_set`.
	 * @param ctx the parse tree
	 */
	enterTrans_set?(ctx: Trans_setContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.trans_set`.
	 * @param ctx the parse tree
	 */
	exitTrans_set?(ctx: Trans_setContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.trans_range_list`.
	 * @param ctx the parse tree
	 */
	enterTrans_range_list?(ctx: Trans_range_listContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.trans_range_list`.
	 * @param ctx the parse tree
	 */
	exitTrans_range_list?(ctx: Trans_range_listContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.trans_item`.
	 * @param ctx the parse tree
	 */
	enterTrans_item?(ctx: Trans_itemContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.trans_item`.
	 * @param ctx the parse tree
	 */
	exitTrans_item?(ctx: Trans_itemContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.repeat_range`.
	 * @param ctx the parse tree
	 */
	enterRepeat_range?(ctx: Repeat_rangeContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.repeat_range`.
	 * @param ctx the parse tree
	 */
	exitRepeat_range?(ctx: Repeat_rangeContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.cover_cross`.
	 * @param ctx the parse tree
	 */
	enterCover_cross?(ctx: Cover_crossContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.cover_cross`.
	 * @param ctx the parse tree
	 */
	exitCover_cross?(ctx: Cover_crossContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.list_of_cross_items`.
	 * @param ctx the parse tree
	 */
	enterList_of_cross_items?(ctx: List_of_cross_itemsContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.list_of_cross_items`.
	 * @param ctx the parse tree
	 */
	exitList_of_cross_items?(ctx: List_of_cross_itemsContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.cross_item`.
	 * @param ctx the parse tree
	 */
	enterCross_item?(ctx: Cross_itemContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.cross_item`.
	 * @param ctx the parse tree
	 */
	exitCross_item?(ctx: Cross_itemContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.cross_body`.
	 * @param ctx the parse tree
	 */
	enterCross_body?(ctx: Cross_bodyContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.cross_body`.
	 * @param ctx the parse tree
	 */
	exitCross_body?(ctx: Cross_bodyContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.cross_body_item`.
	 * @param ctx the parse tree
	 */
	enterCross_body_item?(ctx: Cross_body_itemContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.cross_body_item`.
	 * @param ctx the parse tree
	 */
	exitCross_body_item?(ctx: Cross_body_itemContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.bins_selection_or_option`.
	 * @param ctx the parse tree
	 */
	enterBins_selection_or_option?(ctx: Bins_selection_or_optionContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.bins_selection_or_option`.
	 * @param ctx the parse tree
	 */
	exitBins_selection_or_option?(ctx: Bins_selection_or_optionContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.bins_selection`.
	 * @param ctx the parse tree
	 */
	enterBins_selection?(ctx: Bins_selectionContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.bins_selection`.
	 * @param ctx the parse tree
	 */
	exitBins_selection?(ctx: Bins_selectionContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.select_expression`.
	 * @param ctx the parse tree
	 */
	enterSelect_expression?(ctx: Select_expressionContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.select_expression`.
	 * @param ctx the parse tree
	 */
	exitSelect_expression?(ctx: Select_expressionContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.select_condition`.
	 * @param ctx the parse tree
	 */
	enterSelect_condition?(ctx: Select_conditionContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.select_condition`.
	 * @param ctx the parse tree
	 */
	exitSelect_condition?(ctx: Select_conditionContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.bins_expression`.
	 * @param ctx the parse tree
	 */
	enterBins_expression?(ctx: Bins_expressionContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.bins_expression`.
	 * @param ctx the parse tree
	 */
	exitBins_expression?(ctx: Bins_expressionContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.covergroup_range_list`.
	 * @param ctx the parse tree
	 */
	enterCovergroup_range_list?(ctx: Covergroup_range_listContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.covergroup_range_list`.
	 * @param ctx the parse tree
	 */
	exitCovergroup_range_list?(ctx: Covergroup_range_listContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.covergroup_value_range`.
	 * @param ctx the parse tree
	 */
	enterCovergroup_value_range?(ctx: Covergroup_value_rangeContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.covergroup_value_range`.
	 * @param ctx the parse tree
	 */
	exitCovergroup_value_range?(ctx: Covergroup_value_rangeContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.with_covergroup_expression`.
	 * @param ctx the parse tree
	 */
	enterWith_covergroup_expression?(ctx: With_covergroup_expressionContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.with_covergroup_expression`.
	 * @param ctx the parse tree
	 */
	exitWith_covergroup_expression?(ctx: With_covergroup_expressionContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.set_covergroup_expression`.
	 * @param ctx the parse tree
	 */
	enterSet_covergroup_expression?(ctx: Set_covergroup_expressionContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.set_covergroup_expression`.
	 * @param ctx the parse tree
	 */
	exitSet_covergroup_expression?(ctx: Set_covergroup_expressionContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.integer_covergroup_expression`.
	 * @param ctx the parse tree
	 */
	enterInteger_covergroup_expression?(ctx: Integer_covergroup_expressionContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.integer_covergroup_expression`.
	 * @param ctx the parse tree
	 */
	exitInteger_covergroup_expression?(ctx: Integer_covergroup_expressionContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.cross_set_expression`.
	 * @param ctx the parse tree
	 */
	enterCross_set_expression?(ctx: Cross_set_expressionContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.cross_set_expression`.
	 * @param ctx the parse tree
	 */
	exitCross_set_expression?(ctx: Cross_set_expressionContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.covergroup_expression`.
	 * @param ctx the parse tree
	 */
	enterCovergroup_expression?(ctx: Covergroup_expressionContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.covergroup_expression`.
	 * @param ctx the parse tree
	 */
	exitCovergroup_expression?(ctx: Covergroup_expressionContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.let_declaration`.
	 * @param ctx the parse tree
	 */
	enterLet_declaration?(ctx: Let_declarationContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.let_declaration`.
	 * @param ctx the parse tree
	 */
	exitLet_declaration?(ctx: Let_declarationContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.let_identifier`.
	 * @param ctx the parse tree
	 */
	enterLet_identifier?(ctx: Let_identifierContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.let_identifier`.
	 * @param ctx the parse tree
	 */
	exitLet_identifier?(ctx: Let_identifierContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.let_port_list`.
	 * @param ctx the parse tree
	 */
	enterLet_port_list?(ctx: Let_port_listContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.let_port_list`.
	 * @param ctx the parse tree
	 */
	exitLet_port_list?(ctx: Let_port_listContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.let_port_item`.
	 * @param ctx the parse tree
	 */
	enterLet_port_item?(ctx: Let_port_itemContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.let_port_item`.
	 * @param ctx the parse tree
	 */
	exitLet_port_item?(ctx: Let_port_itemContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.let_formal_type`.
	 * @param ctx the parse tree
	 */
	enterLet_formal_type?(ctx: Let_formal_typeContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.let_formal_type`.
	 * @param ctx the parse tree
	 */
	exitLet_formal_type?(ctx: Let_formal_typeContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.let_expression`.
	 * @param ctx the parse tree
	 */
	enterLet_expression?(ctx: Let_expressionContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.let_expression`.
	 * @param ctx the parse tree
	 */
	exitLet_expression?(ctx: Let_expressionContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.let_list_of_arguments`.
	 * @param ctx the parse tree
	 */
	enterLet_list_of_arguments?(ctx: Let_list_of_argumentsContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.let_list_of_arguments`.
	 * @param ctx the parse tree
	 */
	exitLet_list_of_arguments?(ctx: Let_list_of_argumentsContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.let_actual_arg`.
	 * @param ctx the parse tree
	 */
	enterLet_actual_arg?(ctx: Let_actual_argContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.let_actual_arg`.
	 * @param ctx the parse tree
	 */
	exitLet_actual_arg?(ctx: Let_actual_argContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.gate_instantiation`.
	 * @param ctx the parse tree
	 */
	enterGate_instantiation?(ctx: Gate_instantiationContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.gate_instantiation`.
	 * @param ctx the parse tree
	 */
	exitGate_instantiation?(ctx: Gate_instantiationContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.cmos_switch_instance`.
	 * @param ctx the parse tree
	 */
	enterCmos_switch_instance?(ctx: Cmos_switch_instanceContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.cmos_switch_instance`.
	 * @param ctx the parse tree
	 */
	exitCmos_switch_instance?(ctx: Cmos_switch_instanceContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.enable_gate_instance`.
	 * @param ctx the parse tree
	 */
	enterEnable_gate_instance?(ctx: Enable_gate_instanceContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.enable_gate_instance`.
	 * @param ctx the parse tree
	 */
	exitEnable_gate_instance?(ctx: Enable_gate_instanceContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.mos_switch_instance`.
	 * @param ctx the parse tree
	 */
	enterMos_switch_instance?(ctx: Mos_switch_instanceContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.mos_switch_instance`.
	 * @param ctx the parse tree
	 */
	exitMos_switch_instance?(ctx: Mos_switch_instanceContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.n_input_gate_instance`.
	 * @param ctx the parse tree
	 */
	enterN_input_gate_instance?(ctx: N_input_gate_instanceContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.n_input_gate_instance`.
	 * @param ctx the parse tree
	 */
	exitN_input_gate_instance?(ctx: N_input_gate_instanceContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.n_output_gate_instance`.
	 * @param ctx the parse tree
	 */
	enterN_output_gate_instance?(ctx: N_output_gate_instanceContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.n_output_gate_instance`.
	 * @param ctx the parse tree
	 */
	exitN_output_gate_instance?(ctx: N_output_gate_instanceContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.pass_switch_instance`.
	 * @param ctx the parse tree
	 */
	enterPass_switch_instance?(ctx: Pass_switch_instanceContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.pass_switch_instance`.
	 * @param ctx the parse tree
	 */
	exitPass_switch_instance?(ctx: Pass_switch_instanceContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.pass_enable_switch_instance`.
	 * @param ctx the parse tree
	 */
	enterPass_enable_switch_instance?(ctx: Pass_enable_switch_instanceContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.pass_enable_switch_instance`.
	 * @param ctx the parse tree
	 */
	exitPass_enable_switch_instance?(ctx: Pass_enable_switch_instanceContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.pull_gate_instance`.
	 * @param ctx the parse tree
	 */
	enterPull_gate_instance?(ctx: Pull_gate_instanceContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.pull_gate_instance`.
	 * @param ctx the parse tree
	 */
	exitPull_gate_instance?(ctx: Pull_gate_instanceContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.pulldown_strength`.
	 * @param ctx the parse tree
	 */
	enterPulldown_strength?(ctx: Pulldown_strengthContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.pulldown_strength`.
	 * @param ctx the parse tree
	 */
	exitPulldown_strength?(ctx: Pulldown_strengthContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.pullup_strength`.
	 * @param ctx the parse tree
	 */
	enterPullup_strength?(ctx: Pullup_strengthContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.pullup_strength`.
	 * @param ctx the parse tree
	 */
	exitPullup_strength?(ctx: Pullup_strengthContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.enable_terminal`.
	 * @param ctx the parse tree
	 */
	enterEnable_terminal?(ctx: Enable_terminalContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.enable_terminal`.
	 * @param ctx the parse tree
	 */
	exitEnable_terminal?(ctx: Enable_terminalContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.inout_terminal`.
	 * @param ctx the parse tree
	 */
	enterInout_terminal?(ctx: Inout_terminalContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.inout_terminal`.
	 * @param ctx the parse tree
	 */
	exitInout_terminal?(ctx: Inout_terminalContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.input_terminal`.
	 * @param ctx the parse tree
	 */
	enterInput_terminal?(ctx: Input_terminalContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.input_terminal`.
	 * @param ctx the parse tree
	 */
	exitInput_terminal?(ctx: Input_terminalContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.ncontrol_terminal`.
	 * @param ctx the parse tree
	 */
	enterNcontrol_terminal?(ctx: Ncontrol_terminalContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.ncontrol_terminal`.
	 * @param ctx the parse tree
	 */
	exitNcontrol_terminal?(ctx: Ncontrol_terminalContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.output_terminal`.
	 * @param ctx the parse tree
	 */
	enterOutput_terminal?(ctx: Output_terminalContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.output_terminal`.
	 * @param ctx the parse tree
	 */
	exitOutput_terminal?(ctx: Output_terminalContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.pcontrol_terminal`.
	 * @param ctx the parse tree
	 */
	enterPcontrol_terminal?(ctx: Pcontrol_terminalContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.pcontrol_terminal`.
	 * @param ctx the parse tree
	 */
	exitPcontrol_terminal?(ctx: Pcontrol_terminalContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.cmos_switchtype`.
	 * @param ctx the parse tree
	 */
	enterCmos_switchtype?(ctx: Cmos_switchtypeContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.cmos_switchtype`.
	 * @param ctx the parse tree
	 */
	exitCmos_switchtype?(ctx: Cmos_switchtypeContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.enable_gatetype`.
	 * @param ctx the parse tree
	 */
	enterEnable_gatetype?(ctx: Enable_gatetypeContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.enable_gatetype`.
	 * @param ctx the parse tree
	 */
	exitEnable_gatetype?(ctx: Enable_gatetypeContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.mos_switchtype`.
	 * @param ctx the parse tree
	 */
	enterMos_switchtype?(ctx: Mos_switchtypeContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.mos_switchtype`.
	 * @param ctx the parse tree
	 */
	exitMos_switchtype?(ctx: Mos_switchtypeContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.n_input_gatetype`.
	 * @param ctx the parse tree
	 */
	enterN_input_gatetype?(ctx: N_input_gatetypeContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.n_input_gatetype`.
	 * @param ctx the parse tree
	 */
	exitN_input_gatetype?(ctx: N_input_gatetypeContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.n_output_gatetype`.
	 * @param ctx the parse tree
	 */
	enterN_output_gatetype?(ctx: N_output_gatetypeContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.n_output_gatetype`.
	 * @param ctx the parse tree
	 */
	exitN_output_gatetype?(ctx: N_output_gatetypeContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.pass_en_switchtype`.
	 * @param ctx the parse tree
	 */
	enterPass_en_switchtype?(ctx: Pass_en_switchtypeContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.pass_en_switchtype`.
	 * @param ctx the parse tree
	 */
	exitPass_en_switchtype?(ctx: Pass_en_switchtypeContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.pass_switchtype`.
	 * @param ctx the parse tree
	 */
	enterPass_switchtype?(ctx: Pass_switchtypeContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.pass_switchtype`.
	 * @param ctx the parse tree
	 */
	exitPass_switchtype?(ctx: Pass_switchtypeContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.module_instantiation`.
	 * @param ctx the parse tree
	 */
	enterModule_instantiation?(ctx: Module_instantiationContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.module_instantiation`.
	 * @param ctx the parse tree
	 */
	exitModule_instantiation?(ctx: Module_instantiationContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.parameter_value_assignment`.
	 * @param ctx the parse tree
	 */
	enterParameter_value_assignment?(ctx: Parameter_value_assignmentContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.parameter_value_assignment`.
	 * @param ctx the parse tree
	 */
	exitParameter_value_assignment?(ctx: Parameter_value_assignmentContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.list_of_parameter_assignments`.
	 * @param ctx the parse tree
	 */
	enterList_of_parameter_assignments?(ctx: List_of_parameter_assignmentsContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.list_of_parameter_assignments`.
	 * @param ctx the parse tree
	 */
	exitList_of_parameter_assignments?(ctx: List_of_parameter_assignmentsContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.ordered_parameter_assignment`.
	 * @param ctx the parse tree
	 */
	enterOrdered_parameter_assignment?(ctx: Ordered_parameter_assignmentContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.ordered_parameter_assignment`.
	 * @param ctx the parse tree
	 */
	exitOrdered_parameter_assignment?(ctx: Ordered_parameter_assignmentContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.named_parameter_assignment`.
	 * @param ctx the parse tree
	 */
	enterNamed_parameter_assignment?(ctx: Named_parameter_assignmentContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.named_parameter_assignment`.
	 * @param ctx the parse tree
	 */
	exitNamed_parameter_assignment?(ctx: Named_parameter_assignmentContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.hierarchical_instance`.
	 * @param ctx the parse tree
	 */
	enterHierarchical_instance?(ctx: Hierarchical_instanceContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.hierarchical_instance`.
	 * @param ctx the parse tree
	 */
	exitHierarchical_instance?(ctx: Hierarchical_instanceContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.name_of_instance`.
	 * @param ctx the parse tree
	 */
	enterName_of_instance?(ctx: Name_of_instanceContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.name_of_instance`.
	 * @param ctx the parse tree
	 */
	exitName_of_instance?(ctx: Name_of_instanceContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.list_of_port_connections`.
	 * @param ctx the parse tree
	 */
	enterList_of_port_connections?(ctx: List_of_port_connectionsContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.list_of_port_connections`.
	 * @param ctx the parse tree
	 */
	exitList_of_port_connections?(ctx: List_of_port_connectionsContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.ordered_port_connection`.
	 * @param ctx the parse tree
	 */
	enterOrdered_port_connection?(ctx: Ordered_port_connectionContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.ordered_port_connection`.
	 * @param ctx the parse tree
	 */
	exitOrdered_port_connection?(ctx: Ordered_port_connectionContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.named_port_connection`.
	 * @param ctx the parse tree
	 */
	enterNamed_port_connection?(ctx: Named_port_connectionContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.named_port_connection`.
	 * @param ctx the parse tree
	 */
	exitNamed_port_connection?(ctx: Named_port_connectionContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.interface_instantiation`.
	 * @param ctx the parse tree
	 */
	enterInterface_instantiation?(ctx: Interface_instantiationContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.interface_instantiation`.
	 * @param ctx the parse tree
	 */
	exitInterface_instantiation?(ctx: Interface_instantiationContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.program_instantiation`.
	 * @param ctx the parse tree
	 */
	enterProgram_instantiation?(ctx: Program_instantiationContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.program_instantiation`.
	 * @param ctx the parse tree
	 */
	exitProgram_instantiation?(ctx: Program_instantiationContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.checker_instantiation`.
	 * @param ctx the parse tree
	 */
	enterChecker_instantiation?(ctx: Checker_instantiationContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.checker_instantiation`.
	 * @param ctx the parse tree
	 */
	exitChecker_instantiation?(ctx: Checker_instantiationContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.list_of_checker_port_connections`.
	 * @param ctx the parse tree
	 */
	enterList_of_checker_port_connections?(ctx: List_of_checker_port_connectionsContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.list_of_checker_port_connections`.
	 * @param ctx the parse tree
	 */
	exitList_of_checker_port_connections?(ctx: List_of_checker_port_connectionsContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.ordered_checker_port_connection`.
	 * @param ctx the parse tree
	 */
	enterOrdered_checker_port_connection?(ctx: Ordered_checker_port_connectionContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.ordered_checker_port_connection`.
	 * @param ctx the parse tree
	 */
	exitOrdered_checker_port_connection?(ctx: Ordered_checker_port_connectionContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.named_checker_port_connection`.
	 * @param ctx the parse tree
	 */
	enterNamed_checker_port_connection?(ctx: Named_checker_port_connectionContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.named_checker_port_connection`.
	 * @param ctx the parse tree
	 */
	exitNamed_checker_port_connection?(ctx: Named_checker_port_connectionContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.generate_region`.
	 * @param ctx the parse tree
	 */
	enterGenerate_region?(ctx: Generate_regionContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.generate_region`.
	 * @param ctx the parse tree
	 */
	exitGenerate_region?(ctx: Generate_regionContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.loop_generate_construct`.
	 * @param ctx the parse tree
	 */
	enterLoop_generate_construct?(ctx: Loop_generate_constructContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.loop_generate_construct`.
	 * @param ctx the parse tree
	 */
	exitLoop_generate_construct?(ctx: Loop_generate_constructContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.genvar_initialization`.
	 * @param ctx the parse tree
	 */
	enterGenvar_initialization?(ctx: Genvar_initializationContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.genvar_initialization`.
	 * @param ctx the parse tree
	 */
	exitGenvar_initialization?(ctx: Genvar_initializationContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.genvar_iteration`.
	 * @param ctx the parse tree
	 */
	enterGenvar_iteration?(ctx: Genvar_iterationContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.genvar_iteration`.
	 * @param ctx the parse tree
	 */
	exitGenvar_iteration?(ctx: Genvar_iterationContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.conditional_generate_construct`.
	 * @param ctx the parse tree
	 */
	enterConditional_generate_construct?(ctx: Conditional_generate_constructContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.conditional_generate_construct`.
	 * @param ctx the parse tree
	 */
	exitConditional_generate_construct?(ctx: Conditional_generate_constructContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.if_generate_construct`.
	 * @param ctx the parse tree
	 */
	enterIf_generate_construct?(ctx: If_generate_constructContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.if_generate_construct`.
	 * @param ctx the parse tree
	 */
	exitIf_generate_construct?(ctx: If_generate_constructContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.case_generate_construct`.
	 * @param ctx the parse tree
	 */
	enterCase_generate_construct?(ctx: Case_generate_constructContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.case_generate_construct`.
	 * @param ctx the parse tree
	 */
	exitCase_generate_construct?(ctx: Case_generate_constructContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.case_generate_item`.
	 * @param ctx the parse tree
	 */
	enterCase_generate_item?(ctx: Case_generate_itemContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.case_generate_item`.
	 * @param ctx the parse tree
	 */
	exitCase_generate_item?(ctx: Case_generate_itemContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.generate_block`.
	 * @param ctx the parse tree
	 */
	enterGenerate_block?(ctx: Generate_blockContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.generate_block`.
	 * @param ctx the parse tree
	 */
	exitGenerate_block?(ctx: Generate_blockContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.generate_item`.
	 * @param ctx the parse tree
	 */
	enterGenerate_item?(ctx: Generate_itemContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.generate_item`.
	 * @param ctx the parse tree
	 */
	exitGenerate_item?(ctx: Generate_itemContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.continuous_assign`.
	 * @param ctx the parse tree
	 */
	enterContinuous_assign?(ctx: Continuous_assignContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.continuous_assign`.
	 * @param ctx the parse tree
	 */
	exitContinuous_assign?(ctx: Continuous_assignContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.list_of_net_assignments`.
	 * @param ctx the parse tree
	 */
	enterList_of_net_assignments?(ctx: List_of_net_assignmentsContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.list_of_net_assignments`.
	 * @param ctx the parse tree
	 */
	exitList_of_net_assignments?(ctx: List_of_net_assignmentsContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.list_of_variable_assignments`.
	 * @param ctx the parse tree
	 */
	enterList_of_variable_assignments?(ctx: List_of_variable_assignmentsContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.list_of_variable_assignments`.
	 * @param ctx the parse tree
	 */
	exitList_of_variable_assignments?(ctx: List_of_variable_assignmentsContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.net_alias`.
	 * @param ctx the parse tree
	 */
	enterNet_alias?(ctx: Net_aliasContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.net_alias`.
	 * @param ctx the parse tree
	 */
	exitNet_alias?(ctx: Net_aliasContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.net_assignment`.
	 * @param ctx the parse tree
	 */
	enterNet_assignment?(ctx: Net_assignmentContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.net_assignment`.
	 * @param ctx the parse tree
	 */
	exitNet_assignment?(ctx: Net_assignmentContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.initial_construct`.
	 * @param ctx the parse tree
	 */
	enterInitial_construct?(ctx: Initial_constructContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.initial_construct`.
	 * @param ctx the parse tree
	 */
	exitInitial_construct?(ctx: Initial_constructContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.always_construct`.
	 * @param ctx the parse tree
	 */
	enterAlways_construct?(ctx: Always_constructContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.always_construct`.
	 * @param ctx the parse tree
	 */
	exitAlways_construct?(ctx: Always_constructContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.always_keyword`.
	 * @param ctx the parse tree
	 */
	enterAlways_keyword?(ctx: Always_keywordContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.always_keyword`.
	 * @param ctx the parse tree
	 */
	exitAlways_keyword?(ctx: Always_keywordContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.final_construct`.
	 * @param ctx the parse tree
	 */
	enterFinal_construct?(ctx: Final_constructContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.final_construct`.
	 * @param ctx the parse tree
	 */
	exitFinal_construct?(ctx: Final_constructContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.blocking_assignment`.
	 * @param ctx the parse tree
	 */
	enterBlocking_assignment?(ctx: Blocking_assignmentContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.blocking_assignment`.
	 * @param ctx the parse tree
	 */
	exitBlocking_assignment?(ctx: Blocking_assignmentContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.operator_assignment`.
	 * @param ctx the parse tree
	 */
	enterOperator_assignment?(ctx: Operator_assignmentContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.operator_assignment`.
	 * @param ctx the parse tree
	 */
	exitOperator_assignment?(ctx: Operator_assignmentContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.assignment_operator`.
	 * @param ctx the parse tree
	 */
	enterAssignment_operator?(ctx: Assignment_operatorContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.assignment_operator`.
	 * @param ctx the parse tree
	 */
	exitAssignment_operator?(ctx: Assignment_operatorContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.nonblocking_assignment`.
	 * @param ctx the parse tree
	 */
	enterNonblocking_assignment?(ctx: Nonblocking_assignmentContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.nonblocking_assignment`.
	 * @param ctx the parse tree
	 */
	exitNonblocking_assignment?(ctx: Nonblocking_assignmentContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.procedural_continuous_assignment`.
	 * @param ctx the parse tree
	 */
	enterProcedural_continuous_assignment?(ctx: Procedural_continuous_assignmentContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.procedural_continuous_assignment`.
	 * @param ctx the parse tree
	 */
	exitProcedural_continuous_assignment?(ctx: Procedural_continuous_assignmentContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.variable_assignment`.
	 * @param ctx the parse tree
	 */
	enterVariable_assignment?(ctx: Variable_assignmentContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.variable_assignment`.
	 * @param ctx the parse tree
	 */
	exitVariable_assignment?(ctx: Variable_assignmentContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.action_block`.
	 * @param ctx the parse tree
	 */
	enterAction_block?(ctx: Action_blockContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.action_block`.
	 * @param ctx the parse tree
	 */
	exitAction_block?(ctx: Action_blockContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.seq_block`.
	 * @param ctx the parse tree
	 */
	enterSeq_block?(ctx: Seq_blockContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.seq_block`.
	 * @param ctx the parse tree
	 */
	exitSeq_block?(ctx: Seq_blockContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.par_block`.
	 * @param ctx the parse tree
	 */
	enterPar_block?(ctx: Par_blockContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.par_block`.
	 * @param ctx the parse tree
	 */
	exitPar_block?(ctx: Par_blockContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.join_keyword`.
	 * @param ctx the parse tree
	 */
	enterJoin_keyword?(ctx: Join_keywordContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.join_keyword`.
	 * @param ctx the parse tree
	 */
	exitJoin_keyword?(ctx: Join_keywordContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.statement_or_null`.
	 * @param ctx the parse tree
	 */
	enterStatement_or_null?(ctx: Statement_or_nullContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.statement_or_null`.
	 * @param ctx the parse tree
	 */
	exitStatement_or_null?(ctx: Statement_or_nullContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?(ctx: StatementContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?(ctx: StatementContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.statement_item`.
	 * @param ctx the parse tree
	 */
	enterStatement_item?(ctx: Statement_itemContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.statement_item`.
	 * @param ctx the parse tree
	 */
	exitStatement_item?(ctx: Statement_itemContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.function_statement`.
	 * @param ctx the parse tree
	 */
	enterFunction_statement?(ctx: Function_statementContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.function_statement`.
	 * @param ctx the parse tree
	 */
	exitFunction_statement?(ctx: Function_statementContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.function_statement_or_null`.
	 * @param ctx the parse tree
	 */
	enterFunction_statement_or_null?(ctx: Function_statement_or_nullContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.function_statement_or_null`.
	 * @param ctx the parse tree
	 */
	exitFunction_statement_or_null?(ctx: Function_statement_or_nullContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.variable_identifier_list`.
	 * @param ctx the parse tree
	 */
	enterVariable_identifier_list?(ctx: Variable_identifier_listContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.variable_identifier_list`.
	 * @param ctx the parse tree
	 */
	exitVariable_identifier_list?(ctx: Variable_identifier_listContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.procedural_timing_control_statement`.
	 * @param ctx the parse tree
	 */
	enterProcedural_timing_control_statement?(ctx: Procedural_timing_control_statementContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.procedural_timing_control_statement`.
	 * @param ctx the parse tree
	 */
	exitProcedural_timing_control_statement?(ctx: Procedural_timing_control_statementContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.delay_or_event_control`.
	 * @param ctx the parse tree
	 */
	enterDelay_or_event_control?(ctx: Delay_or_event_controlContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.delay_or_event_control`.
	 * @param ctx the parse tree
	 */
	exitDelay_or_event_control?(ctx: Delay_or_event_controlContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.delay_control`.
	 * @param ctx the parse tree
	 */
	enterDelay_control?(ctx: Delay_controlContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.delay_control`.
	 * @param ctx the parse tree
	 */
	exitDelay_control?(ctx: Delay_controlContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.event_control`.
	 * @param ctx the parse tree
	 */
	enterEvent_control?(ctx: Event_controlContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.event_control`.
	 * @param ctx the parse tree
	 */
	exitEvent_control?(ctx: Event_controlContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.event_expression`.
	 * @param ctx the parse tree
	 */
	enterEvent_expression?(ctx: Event_expressionContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.event_expression`.
	 * @param ctx the parse tree
	 */
	exitEvent_expression?(ctx: Event_expressionContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.procedural_timing_control`.
	 * @param ctx the parse tree
	 */
	enterProcedural_timing_control?(ctx: Procedural_timing_controlContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.procedural_timing_control`.
	 * @param ctx the parse tree
	 */
	exitProcedural_timing_control?(ctx: Procedural_timing_controlContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.jump_statement`.
	 * @param ctx the parse tree
	 */
	enterJump_statement?(ctx: Jump_statementContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.jump_statement`.
	 * @param ctx the parse tree
	 */
	exitJump_statement?(ctx: Jump_statementContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.wait_statement`.
	 * @param ctx the parse tree
	 */
	enterWait_statement?(ctx: Wait_statementContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.wait_statement`.
	 * @param ctx the parse tree
	 */
	exitWait_statement?(ctx: Wait_statementContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.event_trigger`.
	 * @param ctx the parse tree
	 */
	enterEvent_trigger?(ctx: Event_triggerContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.event_trigger`.
	 * @param ctx the parse tree
	 */
	exitEvent_trigger?(ctx: Event_triggerContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.disable_statement`.
	 * @param ctx the parse tree
	 */
	enterDisable_statement?(ctx: Disable_statementContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.disable_statement`.
	 * @param ctx the parse tree
	 */
	exitDisable_statement?(ctx: Disable_statementContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.conditional_statement`.
	 * @param ctx the parse tree
	 */
	enterConditional_statement?(ctx: Conditional_statementContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.conditional_statement`.
	 * @param ctx the parse tree
	 */
	exitConditional_statement?(ctx: Conditional_statementContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.unique_priority`.
	 * @param ctx the parse tree
	 */
	enterUnique_priority?(ctx: Unique_priorityContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.unique_priority`.
	 * @param ctx the parse tree
	 */
	exitUnique_priority?(ctx: Unique_priorityContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.cond_predicate`.
	 * @param ctx the parse tree
	 */
	enterCond_predicate?(ctx: Cond_predicateContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.cond_predicate`.
	 * @param ctx the parse tree
	 */
	exitCond_predicate?(ctx: Cond_predicateContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.expression_or_cond_pattern`.
	 * @param ctx the parse tree
	 */
	enterExpression_or_cond_pattern?(ctx: Expression_or_cond_patternContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.expression_or_cond_pattern`.
	 * @param ctx the parse tree
	 */
	exitExpression_or_cond_pattern?(ctx: Expression_or_cond_patternContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.cond_pattern`.
	 * @param ctx the parse tree
	 */
	enterCond_pattern?(ctx: Cond_patternContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.cond_pattern`.
	 * @param ctx the parse tree
	 */
	exitCond_pattern?(ctx: Cond_patternContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.case_statement`.
	 * @param ctx the parse tree
	 */
	enterCase_statement?(ctx: Case_statementContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.case_statement`.
	 * @param ctx the parse tree
	 */
	exitCase_statement?(ctx: Case_statementContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.case_keyword`.
	 * @param ctx the parse tree
	 */
	enterCase_keyword?(ctx: Case_keywordContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.case_keyword`.
	 * @param ctx the parse tree
	 */
	exitCase_keyword?(ctx: Case_keywordContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.case_expression`.
	 * @param ctx the parse tree
	 */
	enterCase_expression?(ctx: Case_expressionContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.case_expression`.
	 * @param ctx the parse tree
	 */
	exitCase_expression?(ctx: Case_expressionContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.case_item`.
	 * @param ctx the parse tree
	 */
	enterCase_item?(ctx: Case_itemContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.case_item`.
	 * @param ctx the parse tree
	 */
	exitCase_item?(ctx: Case_itemContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.case_pattern_item`.
	 * @param ctx the parse tree
	 */
	enterCase_pattern_item?(ctx: Case_pattern_itemContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.case_pattern_item`.
	 * @param ctx the parse tree
	 */
	exitCase_pattern_item?(ctx: Case_pattern_itemContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.case_inside_item`.
	 * @param ctx the parse tree
	 */
	enterCase_inside_item?(ctx: Case_inside_itemContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.case_inside_item`.
	 * @param ctx the parse tree
	 */
	exitCase_inside_item?(ctx: Case_inside_itemContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.case_item_expression`.
	 * @param ctx the parse tree
	 */
	enterCase_item_expression?(ctx: Case_item_expressionContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.case_item_expression`.
	 * @param ctx the parse tree
	 */
	exitCase_item_expression?(ctx: Case_item_expressionContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.randcase_statement`.
	 * @param ctx the parse tree
	 */
	enterRandcase_statement?(ctx: Randcase_statementContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.randcase_statement`.
	 * @param ctx the parse tree
	 */
	exitRandcase_statement?(ctx: Randcase_statementContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.randcase_item`.
	 * @param ctx the parse tree
	 */
	enterRandcase_item?(ctx: Randcase_itemContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.randcase_item`.
	 * @param ctx the parse tree
	 */
	exitRandcase_item?(ctx: Randcase_itemContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.open_range_list`.
	 * @param ctx the parse tree
	 */
	enterOpen_range_list?(ctx: Open_range_listContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.open_range_list`.
	 * @param ctx the parse tree
	 */
	exitOpen_range_list?(ctx: Open_range_listContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.open_value_range`.
	 * @param ctx the parse tree
	 */
	enterOpen_value_range?(ctx: Open_value_rangeContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.open_value_range`.
	 * @param ctx the parse tree
	 */
	exitOpen_value_range?(ctx: Open_value_rangeContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.pattern`.
	 * @param ctx the parse tree
	 */
	enterPattern?(ctx: PatternContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.pattern`.
	 * @param ctx the parse tree
	 */
	exitPattern?(ctx: PatternContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.assignment_pattern`.
	 * @param ctx the parse tree
	 */
	enterAssignment_pattern?(ctx: Assignment_patternContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.assignment_pattern`.
	 * @param ctx the parse tree
	 */
	exitAssignment_pattern?(ctx: Assignment_patternContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.structure_pattern_key`.
	 * @param ctx the parse tree
	 */
	enterStructure_pattern_key?(ctx: Structure_pattern_keyContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.structure_pattern_key`.
	 * @param ctx the parse tree
	 */
	exitStructure_pattern_key?(ctx: Structure_pattern_keyContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.array_pattern_key`.
	 * @param ctx the parse tree
	 */
	enterArray_pattern_key?(ctx: Array_pattern_keyContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.array_pattern_key`.
	 * @param ctx the parse tree
	 */
	exitArray_pattern_key?(ctx: Array_pattern_keyContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.assignment_pattern_key`.
	 * @param ctx the parse tree
	 */
	enterAssignment_pattern_key?(ctx: Assignment_pattern_keyContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.assignment_pattern_key`.
	 * @param ctx the parse tree
	 */
	exitAssignment_pattern_key?(ctx: Assignment_pattern_keyContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.assignment_pattern_expression`.
	 * @param ctx the parse tree
	 */
	enterAssignment_pattern_expression?(ctx: Assignment_pattern_expressionContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.assignment_pattern_expression`.
	 * @param ctx the parse tree
	 */
	exitAssignment_pattern_expression?(ctx: Assignment_pattern_expressionContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.assignment_pattern_expression_type`.
	 * @param ctx the parse tree
	 */
	enterAssignment_pattern_expression_type?(ctx: Assignment_pattern_expression_typeContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.assignment_pattern_expression_type`.
	 * @param ctx the parse tree
	 */
	exitAssignment_pattern_expression_type?(ctx: Assignment_pattern_expression_typeContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.constant_assignment_pattern_expression`.
	 * @param ctx the parse tree
	 */
	enterConstant_assignment_pattern_expression?(ctx: Constant_assignment_pattern_expressionContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.constant_assignment_pattern_expression`.
	 * @param ctx the parse tree
	 */
	exitConstant_assignment_pattern_expression?(ctx: Constant_assignment_pattern_expressionContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.assignment_pattern_net_lvalue`.
	 * @param ctx the parse tree
	 */
	enterAssignment_pattern_net_lvalue?(ctx: Assignment_pattern_net_lvalueContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.assignment_pattern_net_lvalue`.
	 * @param ctx the parse tree
	 */
	exitAssignment_pattern_net_lvalue?(ctx: Assignment_pattern_net_lvalueContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.assignment_pattern_variable_lvalue`.
	 * @param ctx the parse tree
	 */
	enterAssignment_pattern_variable_lvalue?(ctx: Assignment_pattern_variable_lvalueContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.assignment_pattern_variable_lvalue`.
	 * @param ctx the parse tree
	 */
	exitAssignment_pattern_variable_lvalue?(ctx: Assignment_pattern_variable_lvalueContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.loop_statement`.
	 * @param ctx the parse tree
	 */
	enterLoop_statement?(ctx: Loop_statementContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.loop_statement`.
	 * @param ctx the parse tree
	 */
	exitLoop_statement?(ctx: Loop_statementContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.for_initialization`.
	 * @param ctx the parse tree
	 */
	enterFor_initialization?(ctx: For_initializationContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.for_initialization`.
	 * @param ctx the parse tree
	 */
	exitFor_initialization?(ctx: For_initializationContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.for_variable_declaration`.
	 * @param ctx the parse tree
	 */
	enterFor_variable_declaration?(ctx: For_variable_declarationContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.for_variable_declaration`.
	 * @param ctx the parse tree
	 */
	exitFor_variable_declaration?(ctx: For_variable_declarationContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.for_step`.
	 * @param ctx the parse tree
	 */
	enterFor_step?(ctx: For_stepContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.for_step`.
	 * @param ctx the parse tree
	 */
	exitFor_step?(ctx: For_stepContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.for_step_assignment`.
	 * @param ctx the parse tree
	 */
	enterFor_step_assignment?(ctx: For_step_assignmentContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.for_step_assignment`.
	 * @param ctx the parse tree
	 */
	exitFor_step_assignment?(ctx: For_step_assignmentContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.loop_variables`.
	 * @param ctx the parse tree
	 */
	enterLoop_variables?(ctx: Loop_variablesContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.loop_variables`.
	 * @param ctx the parse tree
	 */
	exitLoop_variables?(ctx: Loop_variablesContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.subroutine_call_statement`.
	 * @param ctx the parse tree
	 */
	enterSubroutine_call_statement?(ctx: Subroutine_call_statementContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.subroutine_call_statement`.
	 * @param ctx the parse tree
	 */
	exitSubroutine_call_statement?(ctx: Subroutine_call_statementContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.assertion_item`.
	 * @param ctx the parse tree
	 */
	enterAssertion_item?(ctx: Assertion_itemContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.assertion_item`.
	 * @param ctx the parse tree
	 */
	exitAssertion_item?(ctx: Assertion_itemContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.deferred_immediate_assertion_item`.
	 * @param ctx the parse tree
	 */
	enterDeferred_immediate_assertion_item?(ctx: Deferred_immediate_assertion_itemContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.deferred_immediate_assertion_item`.
	 * @param ctx the parse tree
	 */
	exitDeferred_immediate_assertion_item?(ctx: Deferred_immediate_assertion_itemContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.procedural_assertion_statement`.
	 * @param ctx the parse tree
	 */
	enterProcedural_assertion_statement?(ctx: Procedural_assertion_statementContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.procedural_assertion_statement`.
	 * @param ctx the parse tree
	 */
	exitProcedural_assertion_statement?(ctx: Procedural_assertion_statementContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.immediate_assertion_statement`.
	 * @param ctx the parse tree
	 */
	enterImmediate_assertion_statement?(ctx: Immediate_assertion_statementContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.immediate_assertion_statement`.
	 * @param ctx the parse tree
	 */
	exitImmediate_assertion_statement?(ctx: Immediate_assertion_statementContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.simple_immediate_assertion_statement`.
	 * @param ctx the parse tree
	 */
	enterSimple_immediate_assertion_statement?(ctx: Simple_immediate_assertion_statementContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.simple_immediate_assertion_statement`.
	 * @param ctx the parse tree
	 */
	exitSimple_immediate_assertion_statement?(ctx: Simple_immediate_assertion_statementContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.simple_immediate_assert_statement`.
	 * @param ctx the parse tree
	 */
	enterSimple_immediate_assert_statement?(ctx: Simple_immediate_assert_statementContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.simple_immediate_assert_statement`.
	 * @param ctx the parse tree
	 */
	exitSimple_immediate_assert_statement?(ctx: Simple_immediate_assert_statementContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.simple_immediate_assume_statement`.
	 * @param ctx the parse tree
	 */
	enterSimple_immediate_assume_statement?(ctx: Simple_immediate_assume_statementContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.simple_immediate_assume_statement`.
	 * @param ctx the parse tree
	 */
	exitSimple_immediate_assume_statement?(ctx: Simple_immediate_assume_statementContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.simple_immediate_cover_statement`.
	 * @param ctx the parse tree
	 */
	enterSimple_immediate_cover_statement?(ctx: Simple_immediate_cover_statementContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.simple_immediate_cover_statement`.
	 * @param ctx the parse tree
	 */
	exitSimple_immediate_cover_statement?(ctx: Simple_immediate_cover_statementContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.deferred_immediate_assertion_statement`.
	 * @param ctx the parse tree
	 */
	enterDeferred_immediate_assertion_statement?(ctx: Deferred_immediate_assertion_statementContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.deferred_immediate_assertion_statement`.
	 * @param ctx the parse tree
	 */
	exitDeferred_immediate_assertion_statement?(ctx: Deferred_immediate_assertion_statementContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.deferred_immediate_assert_statement`.
	 * @param ctx the parse tree
	 */
	enterDeferred_immediate_assert_statement?(ctx: Deferred_immediate_assert_statementContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.deferred_immediate_assert_statement`.
	 * @param ctx the parse tree
	 */
	exitDeferred_immediate_assert_statement?(ctx: Deferred_immediate_assert_statementContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.deferred_immediate_assume_statement`.
	 * @param ctx the parse tree
	 */
	enterDeferred_immediate_assume_statement?(ctx: Deferred_immediate_assume_statementContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.deferred_immediate_assume_statement`.
	 * @param ctx the parse tree
	 */
	exitDeferred_immediate_assume_statement?(ctx: Deferred_immediate_assume_statementContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.deferred_immediate_cover_statement`.
	 * @param ctx the parse tree
	 */
	enterDeferred_immediate_cover_statement?(ctx: Deferred_immediate_cover_statementContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.deferred_immediate_cover_statement`.
	 * @param ctx the parse tree
	 */
	exitDeferred_immediate_cover_statement?(ctx: Deferred_immediate_cover_statementContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.clocking_declaration`.
	 * @param ctx the parse tree
	 */
	enterClocking_declaration?(ctx: Clocking_declarationContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.clocking_declaration`.
	 * @param ctx the parse tree
	 */
	exitClocking_declaration?(ctx: Clocking_declarationContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.clocking_event`.
	 * @param ctx the parse tree
	 */
	enterClocking_event?(ctx: Clocking_eventContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.clocking_event`.
	 * @param ctx the parse tree
	 */
	exitClocking_event?(ctx: Clocking_eventContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.clocking_item`.
	 * @param ctx the parse tree
	 */
	enterClocking_item?(ctx: Clocking_itemContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.clocking_item`.
	 * @param ctx the parse tree
	 */
	exitClocking_item?(ctx: Clocking_itemContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.default_skew`.
	 * @param ctx the parse tree
	 */
	enterDefault_skew?(ctx: Default_skewContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.default_skew`.
	 * @param ctx the parse tree
	 */
	exitDefault_skew?(ctx: Default_skewContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.clocking_direction`.
	 * @param ctx the parse tree
	 */
	enterClocking_direction?(ctx: Clocking_directionContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.clocking_direction`.
	 * @param ctx the parse tree
	 */
	exitClocking_direction?(ctx: Clocking_directionContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.list_of_clocking_decl_assign`.
	 * @param ctx the parse tree
	 */
	enterList_of_clocking_decl_assign?(ctx: List_of_clocking_decl_assignContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.list_of_clocking_decl_assign`.
	 * @param ctx the parse tree
	 */
	exitList_of_clocking_decl_assign?(ctx: List_of_clocking_decl_assignContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.clocking_decl_assign`.
	 * @param ctx the parse tree
	 */
	enterClocking_decl_assign?(ctx: Clocking_decl_assignContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.clocking_decl_assign`.
	 * @param ctx the parse tree
	 */
	exitClocking_decl_assign?(ctx: Clocking_decl_assignContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.clocking_skew`.
	 * @param ctx the parse tree
	 */
	enterClocking_skew?(ctx: Clocking_skewContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.clocking_skew`.
	 * @param ctx the parse tree
	 */
	exitClocking_skew?(ctx: Clocking_skewContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.clocking_drive`.
	 * @param ctx the parse tree
	 */
	enterClocking_drive?(ctx: Clocking_driveContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.clocking_drive`.
	 * @param ctx the parse tree
	 */
	exitClocking_drive?(ctx: Clocking_driveContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.cycle_delay`.
	 * @param ctx the parse tree
	 */
	enterCycle_delay?(ctx: Cycle_delayContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.cycle_delay`.
	 * @param ctx the parse tree
	 */
	exitCycle_delay?(ctx: Cycle_delayContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.clockvar`.
	 * @param ctx the parse tree
	 */
	enterClockvar?(ctx: ClockvarContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.clockvar`.
	 * @param ctx the parse tree
	 */
	exitClockvar?(ctx: ClockvarContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.clockvar_expression`.
	 * @param ctx the parse tree
	 */
	enterClockvar_expression?(ctx: Clockvar_expressionContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.clockvar_expression`.
	 * @param ctx the parse tree
	 */
	exitClockvar_expression?(ctx: Clockvar_expressionContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.randsequence_statement`.
	 * @param ctx the parse tree
	 */
	enterRandsequence_statement?(ctx: Randsequence_statementContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.randsequence_statement`.
	 * @param ctx the parse tree
	 */
	exitRandsequence_statement?(ctx: Randsequence_statementContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.production`.
	 * @param ctx the parse tree
	 */
	enterProduction?(ctx: ProductionContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.production`.
	 * @param ctx the parse tree
	 */
	exitProduction?(ctx: ProductionContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.rs_rule`.
	 * @param ctx the parse tree
	 */
	enterRs_rule?(ctx: Rs_ruleContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.rs_rule`.
	 * @param ctx the parse tree
	 */
	exitRs_rule?(ctx: Rs_ruleContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.rs_production_list`.
	 * @param ctx the parse tree
	 */
	enterRs_production_list?(ctx: Rs_production_listContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.rs_production_list`.
	 * @param ctx the parse tree
	 */
	exitRs_production_list?(ctx: Rs_production_listContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.weight_specification`.
	 * @param ctx the parse tree
	 */
	enterWeight_specification?(ctx: Weight_specificationContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.weight_specification`.
	 * @param ctx the parse tree
	 */
	exitWeight_specification?(ctx: Weight_specificationContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.rs_code_block`.
	 * @param ctx the parse tree
	 */
	enterRs_code_block?(ctx: Rs_code_blockContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.rs_code_block`.
	 * @param ctx the parse tree
	 */
	exitRs_code_block?(ctx: Rs_code_blockContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.rs_prod`.
	 * @param ctx the parse tree
	 */
	enterRs_prod?(ctx: Rs_prodContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.rs_prod`.
	 * @param ctx the parse tree
	 */
	exitRs_prod?(ctx: Rs_prodContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.production_item`.
	 * @param ctx the parse tree
	 */
	enterProduction_item?(ctx: Production_itemContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.production_item`.
	 * @param ctx the parse tree
	 */
	exitProduction_item?(ctx: Production_itemContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.rs_if_else`.
	 * @param ctx the parse tree
	 */
	enterRs_if_else?(ctx: Rs_if_elseContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.rs_if_else`.
	 * @param ctx the parse tree
	 */
	exitRs_if_else?(ctx: Rs_if_elseContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.rs_repeat`.
	 * @param ctx the parse tree
	 */
	enterRs_repeat?(ctx: Rs_repeatContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.rs_repeat`.
	 * @param ctx the parse tree
	 */
	exitRs_repeat?(ctx: Rs_repeatContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.rs_case`.
	 * @param ctx the parse tree
	 */
	enterRs_case?(ctx: Rs_caseContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.rs_case`.
	 * @param ctx the parse tree
	 */
	exitRs_case?(ctx: Rs_caseContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.rs_case_item`.
	 * @param ctx the parse tree
	 */
	enterRs_case_item?(ctx: Rs_case_itemContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.rs_case_item`.
	 * @param ctx the parse tree
	 */
	exitRs_case_item?(ctx: Rs_case_itemContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.specify_block`.
	 * @param ctx the parse tree
	 */
	enterSpecify_block?(ctx: Specify_blockContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.specify_block`.
	 * @param ctx the parse tree
	 */
	exitSpecify_block?(ctx: Specify_blockContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.specify_item`.
	 * @param ctx the parse tree
	 */
	enterSpecify_item?(ctx: Specify_itemContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.specify_item`.
	 * @param ctx the parse tree
	 */
	exitSpecify_item?(ctx: Specify_itemContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.pulsestyle_declaration`.
	 * @param ctx the parse tree
	 */
	enterPulsestyle_declaration?(ctx: Pulsestyle_declarationContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.pulsestyle_declaration`.
	 * @param ctx the parse tree
	 */
	exitPulsestyle_declaration?(ctx: Pulsestyle_declarationContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.showcancelled_declaration`.
	 * @param ctx the parse tree
	 */
	enterShowcancelled_declaration?(ctx: Showcancelled_declarationContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.showcancelled_declaration`.
	 * @param ctx the parse tree
	 */
	exitShowcancelled_declaration?(ctx: Showcancelled_declarationContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.path_declaration`.
	 * @param ctx the parse tree
	 */
	enterPath_declaration?(ctx: Path_declarationContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.path_declaration`.
	 * @param ctx the parse tree
	 */
	exitPath_declaration?(ctx: Path_declarationContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.simple_path_declaration`.
	 * @param ctx the parse tree
	 */
	enterSimple_path_declaration?(ctx: Simple_path_declarationContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.simple_path_declaration`.
	 * @param ctx the parse tree
	 */
	exitSimple_path_declaration?(ctx: Simple_path_declarationContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.parallel_path_description`.
	 * @param ctx the parse tree
	 */
	enterParallel_path_description?(ctx: Parallel_path_descriptionContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.parallel_path_description`.
	 * @param ctx the parse tree
	 */
	exitParallel_path_description?(ctx: Parallel_path_descriptionContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.full_path_description`.
	 * @param ctx the parse tree
	 */
	enterFull_path_description?(ctx: Full_path_descriptionContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.full_path_description`.
	 * @param ctx the parse tree
	 */
	exitFull_path_description?(ctx: Full_path_descriptionContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.list_of_path_inputs`.
	 * @param ctx the parse tree
	 */
	enterList_of_path_inputs?(ctx: List_of_path_inputsContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.list_of_path_inputs`.
	 * @param ctx the parse tree
	 */
	exitList_of_path_inputs?(ctx: List_of_path_inputsContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.list_of_path_outputs`.
	 * @param ctx the parse tree
	 */
	enterList_of_path_outputs?(ctx: List_of_path_outputsContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.list_of_path_outputs`.
	 * @param ctx the parse tree
	 */
	exitList_of_path_outputs?(ctx: List_of_path_outputsContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.specify_input_terminal_descriptor`.
	 * @param ctx the parse tree
	 */
	enterSpecify_input_terminal_descriptor?(ctx: Specify_input_terminal_descriptorContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.specify_input_terminal_descriptor`.
	 * @param ctx the parse tree
	 */
	exitSpecify_input_terminal_descriptor?(ctx: Specify_input_terminal_descriptorContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.specify_output_terminal_descriptor`.
	 * @param ctx the parse tree
	 */
	enterSpecify_output_terminal_descriptor?(ctx: Specify_output_terminal_descriptorContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.specify_output_terminal_descriptor`.
	 * @param ctx the parse tree
	 */
	exitSpecify_output_terminal_descriptor?(ctx: Specify_output_terminal_descriptorContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.input_identifier`.
	 * @param ctx the parse tree
	 */
	enterInput_identifier?(ctx: Input_identifierContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.input_identifier`.
	 * @param ctx the parse tree
	 */
	exitInput_identifier?(ctx: Input_identifierContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.output_identifier`.
	 * @param ctx the parse tree
	 */
	enterOutput_identifier?(ctx: Output_identifierContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.output_identifier`.
	 * @param ctx the parse tree
	 */
	exitOutput_identifier?(ctx: Output_identifierContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.path_delay_value`.
	 * @param ctx the parse tree
	 */
	enterPath_delay_value?(ctx: Path_delay_valueContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.path_delay_value`.
	 * @param ctx the parse tree
	 */
	exitPath_delay_value?(ctx: Path_delay_valueContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.list_of_path_delay_expressions`.
	 * @param ctx the parse tree
	 */
	enterList_of_path_delay_expressions?(ctx: List_of_path_delay_expressionsContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.list_of_path_delay_expressions`.
	 * @param ctx the parse tree
	 */
	exitList_of_path_delay_expressions?(ctx: List_of_path_delay_expressionsContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.t_path_delay_expression`.
	 * @param ctx the parse tree
	 */
	enterT_path_delay_expression?(ctx: T_path_delay_expressionContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.t_path_delay_expression`.
	 * @param ctx the parse tree
	 */
	exitT_path_delay_expression?(ctx: T_path_delay_expressionContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.trise_path_delay_expression`.
	 * @param ctx the parse tree
	 */
	enterTrise_path_delay_expression?(ctx: Trise_path_delay_expressionContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.trise_path_delay_expression`.
	 * @param ctx the parse tree
	 */
	exitTrise_path_delay_expression?(ctx: Trise_path_delay_expressionContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.tfall_path_delay_expression`.
	 * @param ctx the parse tree
	 */
	enterTfall_path_delay_expression?(ctx: Tfall_path_delay_expressionContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.tfall_path_delay_expression`.
	 * @param ctx the parse tree
	 */
	exitTfall_path_delay_expression?(ctx: Tfall_path_delay_expressionContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.tz_path_delay_expression`.
	 * @param ctx the parse tree
	 */
	enterTz_path_delay_expression?(ctx: Tz_path_delay_expressionContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.tz_path_delay_expression`.
	 * @param ctx the parse tree
	 */
	exitTz_path_delay_expression?(ctx: Tz_path_delay_expressionContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.t01_path_delay_expression`.
	 * @param ctx the parse tree
	 */
	enterT01_path_delay_expression?(ctx: T01_path_delay_expressionContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.t01_path_delay_expression`.
	 * @param ctx the parse tree
	 */
	exitT01_path_delay_expression?(ctx: T01_path_delay_expressionContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.t10_path_delay_expression`.
	 * @param ctx the parse tree
	 */
	enterT10_path_delay_expression?(ctx: T10_path_delay_expressionContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.t10_path_delay_expression`.
	 * @param ctx the parse tree
	 */
	exitT10_path_delay_expression?(ctx: T10_path_delay_expressionContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.t0z_path_delay_expression`.
	 * @param ctx the parse tree
	 */
	enterT0z_path_delay_expression?(ctx: T0z_path_delay_expressionContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.t0z_path_delay_expression`.
	 * @param ctx the parse tree
	 */
	exitT0z_path_delay_expression?(ctx: T0z_path_delay_expressionContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.tz1_path_delay_expression`.
	 * @param ctx the parse tree
	 */
	enterTz1_path_delay_expression?(ctx: Tz1_path_delay_expressionContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.tz1_path_delay_expression`.
	 * @param ctx the parse tree
	 */
	exitTz1_path_delay_expression?(ctx: Tz1_path_delay_expressionContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.t1z_path_delay_expression`.
	 * @param ctx the parse tree
	 */
	enterT1z_path_delay_expression?(ctx: T1z_path_delay_expressionContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.t1z_path_delay_expression`.
	 * @param ctx the parse tree
	 */
	exitT1z_path_delay_expression?(ctx: T1z_path_delay_expressionContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.tz0_path_delay_expression`.
	 * @param ctx the parse tree
	 */
	enterTz0_path_delay_expression?(ctx: Tz0_path_delay_expressionContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.tz0_path_delay_expression`.
	 * @param ctx the parse tree
	 */
	exitTz0_path_delay_expression?(ctx: Tz0_path_delay_expressionContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.t0x_path_delay_expression`.
	 * @param ctx the parse tree
	 */
	enterT0x_path_delay_expression?(ctx: T0x_path_delay_expressionContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.t0x_path_delay_expression`.
	 * @param ctx the parse tree
	 */
	exitT0x_path_delay_expression?(ctx: T0x_path_delay_expressionContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.tx1_path_delay_expression`.
	 * @param ctx the parse tree
	 */
	enterTx1_path_delay_expression?(ctx: Tx1_path_delay_expressionContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.tx1_path_delay_expression`.
	 * @param ctx the parse tree
	 */
	exitTx1_path_delay_expression?(ctx: Tx1_path_delay_expressionContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.t1x_path_delay_expression`.
	 * @param ctx the parse tree
	 */
	enterT1x_path_delay_expression?(ctx: T1x_path_delay_expressionContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.t1x_path_delay_expression`.
	 * @param ctx the parse tree
	 */
	exitT1x_path_delay_expression?(ctx: T1x_path_delay_expressionContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.tx0_path_delay_expression`.
	 * @param ctx the parse tree
	 */
	enterTx0_path_delay_expression?(ctx: Tx0_path_delay_expressionContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.tx0_path_delay_expression`.
	 * @param ctx the parse tree
	 */
	exitTx0_path_delay_expression?(ctx: Tx0_path_delay_expressionContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.txz_path_delay_expression`.
	 * @param ctx the parse tree
	 */
	enterTxz_path_delay_expression?(ctx: Txz_path_delay_expressionContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.txz_path_delay_expression`.
	 * @param ctx the parse tree
	 */
	exitTxz_path_delay_expression?(ctx: Txz_path_delay_expressionContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.tzx_path_delay_expression`.
	 * @param ctx the parse tree
	 */
	enterTzx_path_delay_expression?(ctx: Tzx_path_delay_expressionContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.tzx_path_delay_expression`.
	 * @param ctx the parse tree
	 */
	exitTzx_path_delay_expression?(ctx: Tzx_path_delay_expressionContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.path_delay_expression`.
	 * @param ctx the parse tree
	 */
	enterPath_delay_expression?(ctx: Path_delay_expressionContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.path_delay_expression`.
	 * @param ctx the parse tree
	 */
	exitPath_delay_expression?(ctx: Path_delay_expressionContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.edge_sensitive_path_declaration`.
	 * @param ctx the parse tree
	 */
	enterEdge_sensitive_path_declaration?(ctx: Edge_sensitive_path_declarationContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.edge_sensitive_path_declaration`.
	 * @param ctx the parse tree
	 */
	exitEdge_sensitive_path_declaration?(ctx: Edge_sensitive_path_declarationContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.parallel_edge_sensitive_path_description`.
	 * @param ctx the parse tree
	 */
	enterParallel_edge_sensitive_path_description?(ctx: Parallel_edge_sensitive_path_descriptionContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.parallel_edge_sensitive_path_description`.
	 * @param ctx the parse tree
	 */
	exitParallel_edge_sensitive_path_description?(ctx: Parallel_edge_sensitive_path_descriptionContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.full_edge_sensitive_path_description`.
	 * @param ctx the parse tree
	 */
	enterFull_edge_sensitive_path_description?(ctx: Full_edge_sensitive_path_descriptionContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.full_edge_sensitive_path_description`.
	 * @param ctx the parse tree
	 */
	exitFull_edge_sensitive_path_description?(ctx: Full_edge_sensitive_path_descriptionContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.data_source_expression`.
	 * @param ctx the parse tree
	 */
	enterData_source_expression?(ctx: Data_source_expressionContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.data_source_expression`.
	 * @param ctx the parse tree
	 */
	exitData_source_expression?(ctx: Data_source_expressionContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.edge_identifier`.
	 * @param ctx the parse tree
	 */
	enterEdge_identifier?(ctx: Edge_identifierContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.edge_identifier`.
	 * @param ctx the parse tree
	 */
	exitEdge_identifier?(ctx: Edge_identifierContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.state_dependent_path_declaration`.
	 * @param ctx the parse tree
	 */
	enterState_dependent_path_declaration?(ctx: State_dependent_path_declarationContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.state_dependent_path_declaration`.
	 * @param ctx the parse tree
	 */
	exitState_dependent_path_declaration?(ctx: State_dependent_path_declarationContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.polarity_operator`.
	 * @param ctx the parse tree
	 */
	enterPolarity_operator?(ctx: Polarity_operatorContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.polarity_operator`.
	 * @param ctx the parse tree
	 */
	exitPolarity_operator?(ctx: Polarity_operatorContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.system_timing_check`.
	 * @param ctx the parse tree
	 */
	enterSystem_timing_check?(ctx: System_timing_checkContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.system_timing_check`.
	 * @param ctx the parse tree
	 */
	exitSystem_timing_check?(ctx: System_timing_checkContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.setup_timing_check`.
	 * @param ctx the parse tree
	 */
	enterSetup_timing_check?(ctx: Setup_timing_checkContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.setup_timing_check`.
	 * @param ctx the parse tree
	 */
	exitSetup_timing_check?(ctx: Setup_timing_checkContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.hold_timing_check`.
	 * @param ctx the parse tree
	 */
	enterHold_timing_check?(ctx: Hold_timing_checkContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.hold_timing_check`.
	 * @param ctx the parse tree
	 */
	exitHold_timing_check?(ctx: Hold_timing_checkContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.setuphold_timing_check`.
	 * @param ctx the parse tree
	 */
	enterSetuphold_timing_check?(ctx: Setuphold_timing_checkContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.setuphold_timing_check`.
	 * @param ctx the parse tree
	 */
	exitSetuphold_timing_check?(ctx: Setuphold_timing_checkContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.recovery_timing_check`.
	 * @param ctx the parse tree
	 */
	enterRecovery_timing_check?(ctx: Recovery_timing_checkContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.recovery_timing_check`.
	 * @param ctx the parse tree
	 */
	exitRecovery_timing_check?(ctx: Recovery_timing_checkContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.removal_timing_check`.
	 * @param ctx the parse tree
	 */
	enterRemoval_timing_check?(ctx: Removal_timing_checkContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.removal_timing_check`.
	 * @param ctx the parse tree
	 */
	exitRemoval_timing_check?(ctx: Removal_timing_checkContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.recrem_timing_check`.
	 * @param ctx the parse tree
	 */
	enterRecrem_timing_check?(ctx: Recrem_timing_checkContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.recrem_timing_check`.
	 * @param ctx the parse tree
	 */
	exitRecrem_timing_check?(ctx: Recrem_timing_checkContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.skew_timing_check`.
	 * @param ctx the parse tree
	 */
	enterSkew_timing_check?(ctx: Skew_timing_checkContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.skew_timing_check`.
	 * @param ctx the parse tree
	 */
	exitSkew_timing_check?(ctx: Skew_timing_checkContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.timeskew_timing_check`.
	 * @param ctx the parse tree
	 */
	enterTimeskew_timing_check?(ctx: Timeskew_timing_checkContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.timeskew_timing_check`.
	 * @param ctx the parse tree
	 */
	exitTimeskew_timing_check?(ctx: Timeskew_timing_checkContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.fullskew_timing_check`.
	 * @param ctx the parse tree
	 */
	enterFullskew_timing_check?(ctx: Fullskew_timing_checkContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.fullskew_timing_check`.
	 * @param ctx the parse tree
	 */
	exitFullskew_timing_check?(ctx: Fullskew_timing_checkContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.period_timing_check`.
	 * @param ctx the parse tree
	 */
	enterPeriod_timing_check?(ctx: Period_timing_checkContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.period_timing_check`.
	 * @param ctx the parse tree
	 */
	exitPeriod_timing_check?(ctx: Period_timing_checkContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.width_timing_check`.
	 * @param ctx the parse tree
	 */
	enterWidth_timing_check?(ctx: Width_timing_checkContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.width_timing_check`.
	 * @param ctx the parse tree
	 */
	exitWidth_timing_check?(ctx: Width_timing_checkContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.nochange_timing_check`.
	 * @param ctx the parse tree
	 */
	enterNochange_timing_check?(ctx: Nochange_timing_checkContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.nochange_timing_check`.
	 * @param ctx the parse tree
	 */
	exitNochange_timing_check?(ctx: Nochange_timing_checkContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.timecheck_condition`.
	 * @param ctx the parse tree
	 */
	enterTimecheck_condition?(ctx: Timecheck_conditionContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.timecheck_condition`.
	 * @param ctx the parse tree
	 */
	exitTimecheck_condition?(ctx: Timecheck_conditionContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.controlled_reference_event`.
	 * @param ctx the parse tree
	 */
	enterControlled_reference_event?(ctx: Controlled_reference_eventContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.controlled_reference_event`.
	 * @param ctx the parse tree
	 */
	exitControlled_reference_event?(ctx: Controlled_reference_eventContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.data_event`.
	 * @param ctx the parse tree
	 */
	enterData_event?(ctx: Data_eventContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.data_event`.
	 * @param ctx the parse tree
	 */
	exitData_event?(ctx: Data_eventContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.delayed_data`.
	 * @param ctx the parse tree
	 */
	enterDelayed_data?(ctx: Delayed_dataContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.delayed_data`.
	 * @param ctx the parse tree
	 */
	exitDelayed_data?(ctx: Delayed_dataContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.delayed_reference`.
	 * @param ctx the parse tree
	 */
	enterDelayed_reference?(ctx: Delayed_referenceContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.delayed_reference`.
	 * @param ctx the parse tree
	 */
	exitDelayed_reference?(ctx: Delayed_referenceContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.end_edge_offset`.
	 * @param ctx the parse tree
	 */
	enterEnd_edge_offset?(ctx: End_edge_offsetContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.end_edge_offset`.
	 * @param ctx the parse tree
	 */
	exitEnd_edge_offset?(ctx: End_edge_offsetContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.event_based_flag`.
	 * @param ctx the parse tree
	 */
	enterEvent_based_flag?(ctx: Event_based_flagContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.event_based_flag`.
	 * @param ctx the parse tree
	 */
	exitEvent_based_flag?(ctx: Event_based_flagContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.notifier`.
	 * @param ctx the parse tree
	 */
	enterNotifier?(ctx: NotifierContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.notifier`.
	 * @param ctx the parse tree
	 */
	exitNotifier?(ctx: NotifierContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.reference_event`.
	 * @param ctx the parse tree
	 */
	enterReference_event?(ctx: Reference_eventContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.reference_event`.
	 * @param ctx the parse tree
	 */
	exitReference_event?(ctx: Reference_eventContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.remain_active_flag`.
	 * @param ctx the parse tree
	 */
	enterRemain_active_flag?(ctx: Remain_active_flagContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.remain_active_flag`.
	 * @param ctx the parse tree
	 */
	exitRemain_active_flag?(ctx: Remain_active_flagContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.timestamp_condition`.
	 * @param ctx the parse tree
	 */
	enterTimestamp_condition?(ctx: Timestamp_conditionContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.timestamp_condition`.
	 * @param ctx the parse tree
	 */
	exitTimestamp_condition?(ctx: Timestamp_conditionContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.start_edge_offset`.
	 * @param ctx the parse tree
	 */
	enterStart_edge_offset?(ctx: Start_edge_offsetContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.start_edge_offset`.
	 * @param ctx the parse tree
	 */
	exitStart_edge_offset?(ctx: Start_edge_offsetContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.threshold`.
	 * @param ctx the parse tree
	 */
	enterThreshold?(ctx: ThresholdContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.threshold`.
	 * @param ctx the parse tree
	 */
	exitThreshold?(ctx: ThresholdContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.timing_check_limit`.
	 * @param ctx the parse tree
	 */
	enterTiming_check_limit?(ctx: Timing_check_limitContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.timing_check_limit`.
	 * @param ctx the parse tree
	 */
	exitTiming_check_limit?(ctx: Timing_check_limitContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.timing_check_event`.
	 * @param ctx the parse tree
	 */
	enterTiming_check_event?(ctx: Timing_check_eventContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.timing_check_event`.
	 * @param ctx the parse tree
	 */
	exitTiming_check_event?(ctx: Timing_check_eventContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.controlled_timing_check_event`.
	 * @param ctx the parse tree
	 */
	enterControlled_timing_check_event?(ctx: Controlled_timing_check_eventContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.controlled_timing_check_event`.
	 * @param ctx the parse tree
	 */
	exitControlled_timing_check_event?(ctx: Controlled_timing_check_eventContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.timing_check_event_control`.
	 * @param ctx the parse tree
	 */
	enterTiming_check_event_control?(ctx: Timing_check_event_controlContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.timing_check_event_control`.
	 * @param ctx the parse tree
	 */
	exitTiming_check_event_control?(ctx: Timing_check_event_controlContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.specify_terminal_descriptor`.
	 * @param ctx the parse tree
	 */
	enterSpecify_terminal_descriptor?(ctx: Specify_terminal_descriptorContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.specify_terminal_descriptor`.
	 * @param ctx the parse tree
	 */
	exitSpecify_terminal_descriptor?(ctx: Specify_terminal_descriptorContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.timing_check_condition`.
	 * @param ctx the parse tree
	 */
	enterTiming_check_condition?(ctx: Timing_check_conditionContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.timing_check_condition`.
	 * @param ctx the parse tree
	 */
	exitTiming_check_condition?(ctx: Timing_check_conditionContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.scalar_timing_check_condition`.
	 * @param ctx the parse tree
	 */
	enterScalar_timing_check_condition?(ctx: Scalar_timing_check_conditionContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.scalar_timing_check_condition`.
	 * @param ctx the parse tree
	 */
	exitScalar_timing_check_condition?(ctx: Scalar_timing_check_conditionContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.scalar_constant`.
	 * @param ctx the parse tree
	 */
	enterScalar_constant?(ctx: Scalar_constantContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.scalar_constant`.
	 * @param ctx the parse tree
	 */
	exitScalar_constant?(ctx: Scalar_constantContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.concatenation`.
	 * @param ctx the parse tree
	 */
	enterConcatenation?(ctx: ConcatenationContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.concatenation`.
	 * @param ctx the parse tree
	 */
	exitConcatenation?(ctx: ConcatenationContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.constant_concatenation`.
	 * @param ctx the parse tree
	 */
	enterConstant_concatenation?(ctx: Constant_concatenationContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.constant_concatenation`.
	 * @param ctx the parse tree
	 */
	exitConstant_concatenation?(ctx: Constant_concatenationContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.constant_multiple_concatenation`.
	 * @param ctx the parse tree
	 */
	enterConstant_multiple_concatenation?(ctx: Constant_multiple_concatenationContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.constant_multiple_concatenation`.
	 * @param ctx the parse tree
	 */
	exitConstant_multiple_concatenation?(ctx: Constant_multiple_concatenationContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.module_path_concatenation`.
	 * @param ctx the parse tree
	 */
	enterModule_path_concatenation?(ctx: Module_path_concatenationContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.module_path_concatenation`.
	 * @param ctx the parse tree
	 */
	exitModule_path_concatenation?(ctx: Module_path_concatenationContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.module_path_multiple_concatenation`.
	 * @param ctx the parse tree
	 */
	enterModule_path_multiple_concatenation?(ctx: Module_path_multiple_concatenationContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.module_path_multiple_concatenation`.
	 * @param ctx the parse tree
	 */
	exitModule_path_multiple_concatenation?(ctx: Module_path_multiple_concatenationContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.multiple_concatenation`.
	 * @param ctx the parse tree
	 */
	enterMultiple_concatenation?(ctx: Multiple_concatenationContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.multiple_concatenation`.
	 * @param ctx the parse tree
	 */
	exitMultiple_concatenation?(ctx: Multiple_concatenationContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.streaming_concatenation`.
	 * @param ctx the parse tree
	 */
	enterStreaming_concatenation?(ctx: Streaming_concatenationContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.streaming_concatenation`.
	 * @param ctx the parse tree
	 */
	exitStreaming_concatenation?(ctx: Streaming_concatenationContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.stream_operator`.
	 * @param ctx the parse tree
	 */
	enterStream_operator?(ctx: Stream_operatorContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.stream_operator`.
	 * @param ctx the parse tree
	 */
	exitStream_operator?(ctx: Stream_operatorContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.slice_size`.
	 * @param ctx the parse tree
	 */
	enterSlice_size?(ctx: Slice_sizeContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.slice_size`.
	 * @param ctx the parse tree
	 */
	exitSlice_size?(ctx: Slice_sizeContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.stream_concatenation`.
	 * @param ctx the parse tree
	 */
	enterStream_concatenation?(ctx: Stream_concatenationContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.stream_concatenation`.
	 * @param ctx the parse tree
	 */
	exitStream_concatenation?(ctx: Stream_concatenationContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.stream_expression`.
	 * @param ctx the parse tree
	 */
	enterStream_expression?(ctx: Stream_expressionContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.stream_expression`.
	 * @param ctx the parse tree
	 */
	exitStream_expression?(ctx: Stream_expressionContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.array_range_expression`.
	 * @param ctx the parse tree
	 */
	enterArray_range_expression?(ctx: Array_range_expressionContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.array_range_expression`.
	 * @param ctx the parse tree
	 */
	exitArray_range_expression?(ctx: Array_range_expressionContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.empty_unpacked_array_concatenation`.
	 * @param ctx the parse tree
	 */
	enterEmpty_unpacked_array_concatenation?(ctx: Empty_unpacked_array_concatenationContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.empty_unpacked_array_concatenation`.
	 * @param ctx the parse tree
	 */
	exitEmpty_unpacked_array_concatenation?(ctx: Empty_unpacked_array_concatenationContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.tf_call`.
	 * @param ctx the parse tree
	 */
	enterTf_call?(ctx: Tf_callContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.tf_call`.
	 * @param ctx the parse tree
	 */
	exitTf_call?(ctx: Tf_callContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.system_tf_call`.
	 * @param ctx the parse tree
	 */
	enterSystem_tf_call?(ctx: System_tf_callContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.system_tf_call`.
	 * @param ctx the parse tree
	 */
	exitSystem_tf_call?(ctx: System_tf_callContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.subroutine_call`.
	 * @param ctx the parse tree
	 */
	enterSubroutine_call?(ctx: Subroutine_callContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.subroutine_call`.
	 * @param ctx the parse tree
	 */
	exitSubroutine_call?(ctx: Subroutine_callContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.function_subroutine_call`.
	 * @param ctx the parse tree
	 */
	enterFunction_subroutine_call?(ctx: Function_subroutine_callContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.function_subroutine_call`.
	 * @param ctx the parse tree
	 */
	exitFunction_subroutine_call?(ctx: Function_subroutine_callContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.list_of_arguments`.
	 * @param ctx the parse tree
	 */
	enterList_of_arguments?(ctx: List_of_argumentsContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.list_of_arguments`.
	 * @param ctx the parse tree
	 */
	exitList_of_arguments?(ctx: List_of_argumentsContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.method_call`.
	 * @param ctx the parse tree
	 */
	enterMethod_call?(ctx: Method_callContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.method_call`.
	 * @param ctx the parse tree
	 */
	exitMethod_call?(ctx: Method_callContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.method_call_body`.
	 * @param ctx the parse tree
	 */
	enterMethod_call_body?(ctx: Method_call_bodyContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.method_call_body`.
	 * @param ctx the parse tree
	 */
	exitMethod_call_body?(ctx: Method_call_bodyContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.built_in_method_call`.
	 * @param ctx the parse tree
	 */
	enterBuilt_in_method_call?(ctx: Built_in_method_callContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.built_in_method_call`.
	 * @param ctx the parse tree
	 */
	exitBuilt_in_method_call?(ctx: Built_in_method_callContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.array_manipulation_call`.
	 * @param ctx the parse tree
	 */
	enterArray_manipulation_call?(ctx: Array_manipulation_callContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.array_manipulation_call`.
	 * @param ctx the parse tree
	 */
	exitArray_manipulation_call?(ctx: Array_manipulation_callContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.randomize_call`.
	 * @param ctx the parse tree
	 */
	enterRandomize_call?(ctx: Randomize_callContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.randomize_call`.
	 * @param ctx the parse tree
	 */
	exitRandomize_call?(ctx: Randomize_callContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.method_call_root`.
	 * @param ctx the parse tree
	 */
	enterMethod_call_root?(ctx: Method_call_rootContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.method_call_root`.
	 * @param ctx the parse tree
	 */
	exitMethod_call_root?(ctx: Method_call_rootContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.array_method_name`.
	 * @param ctx the parse tree
	 */
	enterArray_method_name?(ctx: Array_method_nameContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.array_method_name`.
	 * @param ctx the parse tree
	 */
	exitArray_method_name?(ctx: Array_method_nameContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.inc_or_dec_expression`.
	 * @param ctx the parse tree
	 */
	enterInc_or_dec_expression?(ctx: Inc_or_dec_expressionContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.inc_or_dec_expression`.
	 * @param ctx the parse tree
	 */
	exitInc_or_dec_expression?(ctx: Inc_or_dec_expressionContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.constant_expression`.
	 * @param ctx the parse tree
	 */
	enterConstant_expression?(ctx: Constant_expressionContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.constant_expression`.
	 * @param ctx the parse tree
	 */
	exitConstant_expression?(ctx: Constant_expressionContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.constant_mintypmax_expression`.
	 * @param ctx the parse tree
	 */
	enterConstant_mintypmax_expression?(ctx: Constant_mintypmax_expressionContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.constant_mintypmax_expression`.
	 * @param ctx the parse tree
	 */
	exitConstant_mintypmax_expression?(ctx: Constant_mintypmax_expressionContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.constant_param_expression`.
	 * @param ctx the parse tree
	 */
	enterConstant_param_expression?(ctx: Constant_param_expressionContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.constant_param_expression`.
	 * @param ctx the parse tree
	 */
	exitConstant_param_expression?(ctx: Constant_param_expressionContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.param_expression`.
	 * @param ctx the parse tree
	 */
	enterParam_expression?(ctx: Param_expressionContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.param_expression`.
	 * @param ctx the parse tree
	 */
	exitParam_expression?(ctx: Param_expressionContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.constant_range_expression`.
	 * @param ctx the parse tree
	 */
	enterConstant_range_expression?(ctx: Constant_range_expressionContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.constant_range_expression`.
	 * @param ctx the parse tree
	 */
	exitConstant_range_expression?(ctx: Constant_range_expressionContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.constant_part_select_range`.
	 * @param ctx the parse tree
	 */
	enterConstant_part_select_range?(ctx: Constant_part_select_rangeContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.constant_part_select_range`.
	 * @param ctx the parse tree
	 */
	exitConstant_part_select_range?(ctx: Constant_part_select_rangeContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.constant_range`.
	 * @param ctx the parse tree
	 */
	enterConstant_range?(ctx: Constant_rangeContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.constant_range`.
	 * @param ctx the parse tree
	 */
	exitConstant_range?(ctx: Constant_rangeContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.constant_indexed_range`.
	 * @param ctx the parse tree
	 */
	enterConstant_indexed_range?(ctx: Constant_indexed_rangeContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.constant_indexed_range`.
	 * @param ctx the parse tree
	 */
	exitConstant_indexed_range?(ctx: Constant_indexed_rangeContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?(ctx: ExpressionContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?(ctx: ExpressionContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.value_range`.
	 * @param ctx the parse tree
	 */
	enterValue_range?(ctx: Value_rangeContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.value_range`.
	 * @param ctx the parse tree
	 */
	exitValue_range?(ctx: Value_rangeContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.mintypmax_expression`.
	 * @param ctx the parse tree
	 */
	enterMintypmax_expression?(ctx: Mintypmax_expressionContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.mintypmax_expression`.
	 * @param ctx the parse tree
	 */
	exitMintypmax_expression?(ctx: Mintypmax_expressionContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.module_path_expression`.
	 * @param ctx the parse tree
	 */
	enterModule_path_expression?(ctx: Module_path_expressionContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.module_path_expression`.
	 * @param ctx the parse tree
	 */
	exitModule_path_expression?(ctx: Module_path_expressionContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.module_path_mintypmax_expression`.
	 * @param ctx the parse tree
	 */
	enterModule_path_mintypmax_expression?(ctx: Module_path_mintypmax_expressionContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.module_path_mintypmax_expression`.
	 * @param ctx the parse tree
	 */
	exitModule_path_mintypmax_expression?(ctx: Module_path_mintypmax_expressionContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.part_select_range`.
	 * @param ctx the parse tree
	 */
	enterPart_select_range?(ctx: Part_select_rangeContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.part_select_range`.
	 * @param ctx the parse tree
	 */
	exitPart_select_range?(ctx: Part_select_rangeContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.indexed_range`.
	 * @param ctx the parse tree
	 */
	enterIndexed_range?(ctx: Indexed_rangeContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.indexed_range`.
	 * @param ctx the parse tree
	 */
	exitIndexed_range?(ctx: Indexed_rangeContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.genvar_expression`.
	 * @param ctx the parse tree
	 */
	enterGenvar_expression?(ctx: Genvar_expressionContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.genvar_expression`.
	 * @param ctx the parse tree
	 */
	exitGenvar_expression?(ctx: Genvar_expressionContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.constant_primary`.
	 * @param ctx the parse tree
	 */
	enterConstant_primary?(ctx: Constant_primaryContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.constant_primary`.
	 * @param ctx the parse tree
	 */
	exitConstant_primary?(ctx: Constant_primaryContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.module_path_primary`.
	 * @param ctx the parse tree
	 */
	enterModule_path_primary?(ctx: Module_path_primaryContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.module_path_primary`.
	 * @param ctx the parse tree
	 */
	exitModule_path_primary?(ctx: Module_path_primaryContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.primary`.
	 * @param ctx the parse tree
	 */
	enterPrimary?(ctx: PrimaryContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.primary`.
	 * @param ctx the parse tree
	 */
	exitPrimary?(ctx: PrimaryContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.class_qualifier`.
	 * @param ctx the parse tree
	 */
	enterClass_qualifier?(ctx: Class_qualifierContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.class_qualifier`.
	 * @param ctx the parse tree
	 */
	exitClass_qualifier?(ctx: Class_qualifierContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.range_expression`.
	 * @param ctx the parse tree
	 */
	enterRange_expression?(ctx: Range_expressionContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.range_expression`.
	 * @param ctx the parse tree
	 */
	exitRange_expression?(ctx: Range_expressionContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.primary_literal`.
	 * @param ctx the parse tree
	 */
	enterPrimary_literal?(ctx: Primary_literalContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.primary_literal`.
	 * @param ctx the parse tree
	 */
	exitPrimary_literal?(ctx: Primary_literalContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.time_literal`.
	 * @param ctx the parse tree
	 */
	enterTime_literal?(ctx: Time_literalContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.time_literal`.
	 * @param ctx the parse tree
	 */
	exitTime_literal?(ctx: Time_literalContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.implicit_class_handle`.
	 * @param ctx the parse tree
	 */
	enterImplicit_class_handle?(ctx: Implicit_class_handleContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.implicit_class_handle`.
	 * @param ctx the parse tree
	 */
	exitImplicit_class_handle?(ctx: Implicit_class_handleContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.bit_select`.
	 * @param ctx the parse tree
	 */
	enterBit_select?(ctx: Bit_selectContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.bit_select`.
	 * @param ctx the parse tree
	 */
	exitBit_select?(ctx: Bit_selectContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.select_`.
	 * @param ctx the parse tree
	 */
	enterSelect_?(ctx: Select_Context): void;
	/**
	 * Exit a parse tree produced by `SVParser.select_`.
	 * @param ctx the parse tree
	 */
	exitSelect_?(ctx: Select_Context): void;
	/**
	 * Enter a parse tree produced by `SVParser.nonrange_select`.
	 * @param ctx the parse tree
	 */
	enterNonrange_select?(ctx: Nonrange_selectContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.nonrange_select`.
	 * @param ctx the parse tree
	 */
	exitNonrange_select?(ctx: Nonrange_selectContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.constant_bit_select`.
	 * @param ctx the parse tree
	 */
	enterConstant_bit_select?(ctx: Constant_bit_selectContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.constant_bit_select`.
	 * @param ctx the parse tree
	 */
	exitConstant_bit_select?(ctx: Constant_bit_selectContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.constant_select`.
	 * @param ctx the parse tree
	 */
	enterConstant_select?(ctx: Constant_selectContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.constant_select`.
	 * @param ctx the parse tree
	 */
	exitConstant_select?(ctx: Constant_selectContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.constant_let_expression`.
	 * @param ctx the parse tree
	 */
	enterConstant_let_expression?(ctx: Constant_let_expressionContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.constant_let_expression`.
	 * @param ctx the parse tree
	 */
	exitConstant_let_expression?(ctx: Constant_let_expressionContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.net_lvalue`.
	 * @param ctx the parse tree
	 */
	enterNet_lvalue?(ctx: Net_lvalueContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.net_lvalue`.
	 * @param ctx the parse tree
	 */
	exitNet_lvalue?(ctx: Net_lvalueContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.variable_lvalue`.
	 * @param ctx the parse tree
	 */
	enterVariable_lvalue?(ctx: Variable_lvalueContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.variable_lvalue`.
	 * @param ctx the parse tree
	 */
	exitVariable_lvalue?(ctx: Variable_lvalueContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.nonrange_variable_lvalue`.
	 * @param ctx the parse tree
	 */
	enterNonrange_variable_lvalue?(ctx: Nonrange_variable_lvalueContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.nonrange_variable_lvalue`.
	 * @param ctx the parse tree
	 */
	exitNonrange_variable_lvalue?(ctx: Nonrange_variable_lvalueContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.unary_operator`.
	 * @param ctx the parse tree
	 */
	enterUnary_operator?(ctx: Unary_operatorContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.unary_operator`.
	 * @param ctx the parse tree
	 */
	exitUnary_operator?(ctx: Unary_operatorContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.binary_operator`.
	 * @param ctx the parse tree
	 */
	enterBinary_operator?(ctx: Binary_operatorContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.binary_operator`.
	 * @param ctx the parse tree
	 */
	exitBinary_operator?(ctx: Binary_operatorContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.inc_or_dec_operator`.
	 * @param ctx the parse tree
	 */
	enterInc_or_dec_operator?(ctx: Inc_or_dec_operatorContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.inc_or_dec_operator`.
	 * @param ctx the parse tree
	 */
	exitInc_or_dec_operator?(ctx: Inc_or_dec_operatorContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.unary_module_path_operator`.
	 * @param ctx the parse tree
	 */
	enterUnary_module_path_operator?(ctx: Unary_module_path_operatorContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.unary_module_path_operator`.
	 * @param ctx the parse tree
	 */
	exitUnary_module_path_operator?(ctx: Unary_module_path_operatorContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.binary_module_path_operator`.
	 * @param ctx the parse tree
	 */
	enterBinary_module_path_operator?(ctx: Binary_module_path_operatorContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.binary_module_path_operator`.
	 * @param ctx the parse tree
	 */
	exitBinary_module_path_operator?(ctx: Binary_module_path_operatorContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.number`.
	 * @param ctx the parse tree
	 */
	enterNumber?(ctx: NumberContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.number`.
	 * @param ctx the parse tree
	 */
	exitNumber?(ctx: NumberContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.integral_number`.
	 * @param ctx the parse tree
	 */
	enterIntegral_number?(ctx: Integral_numberContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.integral_number`.
	 * @param ctx the parse tree
	 */
	exitIntegral_number?(ctx: Integral_numberContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.decimal_number`.
	 * @param ctx the parse tree
	 */
	enterDecimal_number?(ctx: Decimal_numberContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.decimal_number`.
	 * @param ctx the parse tree
	 */
	exitDecimal_number?(ctx: Decimal_numberContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.binary_number`.
	 * @param ctx the parse tree
	 */
	enterBinary_number?(ctx: Binary_numberContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.binary_number`.
	 * @param ctx the parse tree
	 */
	exitBinary_number?(ctx: Binary_numberContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.octal_number`.
	 * @param ctx the parse tree
	 */
	enterOctal_number?(ctx: Octal_numberContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.octal_number`.
	 * @param ctx the parse tree
	 */
	exitOctal_number?(ctx: Octal_numberContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.hex_number`.
	 * @param ctx the parse tree
	 */
	enterHex_number?(ctx: Hex_numberContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.hex_number`.
	 * @param ctx the parse tree
	 */
	exitHex_number?(ctx: Hex_numberContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.real_number`.
	 * @param ctx the parse tree
	 */
	enterReal_number?(ctx: Real_numberContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.real_number`.
	 * @param ctx the parse tree
	 */
	exitReal_number?(ctx: Real_numberContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.unsigned_number`.
	 * @param ctx the parse tree
	 */
	enterUnsigned_number?(ctx: Unsigned_numberContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.unsigned_number`.
	 * @param ctx the parse tree
	 */
	exitUnsigned_number?(ctx: Unsigned_numberContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.unbased_unsized_literal`.
	 * @param ctx the parse tree
	 */
	enterUnbased_unsized_literal?(ctx: Unbased_unsized_literalContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.unbased_unsized_literal`.
	 * @param ctx the parse tree
	 */
	exitUnbased_unsized_literal?(ctx: Unbased_unsized_literalContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.string_literal`.
	 * @param ctx the parse tree
	 */
	enterString_literal?(ctx: String_literalContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.string_literal`.
	 * @param ctx the parse tree
	 */
	exitString_literal?(ctx: String_literalContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.attribute_instance`.
	 * @param ctx the parse tree
	 */
	enterAttribute_instance?(ctx: Attribute_instanceContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.attribute_instance`.
	 * @param ctx the parse tree
	 */
	exitAttribute_instance?(ctx: Attribute_instanceContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.attr_spec`.
	 * @param ctx the parse tree
	 */
	enterAttr_spec?(ctx: Attr_specContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.attr_spec`.
	 * @param ctx the parse tree
	 */
	exitAttr_spec?(ctx: Attr_specContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.attr_name`.
	 * @param ctx the parse tree
	 */
	enterAttr_name?(ctx: Attr_nameContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.attr_name`.
	 * @param ctx the parse tree
	 */
	exitAttr_name?(ctx: Attr_nameContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.array_identifier`.
	 * @param ctx the parse tree
	 */
	enterArray_identifier?(ctx: Array_identifierContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.array_identifier`.
	 * @param ctx the parse tree
	 */
	exitArray_identifier?(ctx: Array_identifierContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.block_identifier`.
	 * @param ctx the parse tree
	 */
	enterBlock_identifier?(ctx: Block_identifierContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.block_identifier`.
	 * @param ctx the parse tree
	 */
	exitBlock_identifier?(ctx: Block_identifierContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.bin_identifier`.
	 * @param ctx the parse tree
	 */
	enterBin_identifier?(ctx: Bin_identifierContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.bin_identifier`.
	 * @param ctx the parse tree
	 */
	exitBin_identifier?(ctx: Bin_identifierContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.c_identifier`.
	 * @param ctx the parse tree
	 */
	enterC_identifier?(ctx: C_identifierContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.c_identifier`.
	 * @param ctx the parse tree
	 */
	exitC_identifier?(ctx: C_identifierContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.cell_identifier`.
	 * @param ctx the parse tree
	 */
	enterCell_identifier?(ctx: Cell_identifierContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.cell_identifier`.
	 * @param ctx the parse tree
	 */
	exitCell_identifier?(ctx: Cell_identifierContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.checker_identifier`.
	 * @param ctx the parse tree
	 */
	enterChecker_identifier?(ctx: Checker_identifierContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.checker_identifier`.
	 * @param ctx the parse tree
	 */
	exitChecker_identifier?(ctx: Checker_identifierContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.class_identifier`.
	 * @param ctx the parse tree
	 */
	enterClass_identifier?(ctx: Class_identifierContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.class_identifier`.
	 * @param ctx the parse tree
	 */
	exitClass_identifier?(ctx: Class_identifierContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.class_variable_identifier`.
	 * @param ctx the parse tree
	 */
	enterClass_variable_identifier?(ctx: Class_variable_identifierContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.class_variable_identifier`.
	 * @param ctx the parse tree
	 */
	exitClass_variable_identifier?(ctx: Class_variable_identifierContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.clocking_identifier`.
	 * @param ctx the parse tree
	 */
	enterClocking_identifier?(ctx: Clocking_identifierContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.clocking_identifier`.
	 * @param ctx the parse tree
	 */
	exitClocking_identifier?(ctx: Clocking_identifierContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.const_identifier`.
	 * @param ctx the parse tree
	 */
	enterConst_identifier?(ctx: Const_identifierContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.const_identifier`.
	 * @param ctx the parse tree
	 */
	exitConst_identifier?(ctx: Const_identifierContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.constraint_identifier`.
	 * @param ctx the parse tree
	 */
	enterConstraint_identifier?(ctx: Constraint_identifierContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.constraint_identifier`.
	 * @param ctx the parse tree
	 */
	exitConstraint_identifier?(ctx: Constraint_identifierContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.covergroup_identifier`.
	 * @param ctx the parse tree
	 */
	enterCovergroup_identifier?(ctx: Covergroup_identifierContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.covergroup_identifier`.
	 * @param ctx the parse tree
	 */
	exitCovergroup_identifier?(ctx: Covergroup_identifierContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.covergroup_variable_identifier`.
	 * @param ctx the parse tree
	 */
	enterCovergroup_variable_identifier?(ctx: Covergroup_variable_identifierContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.covergroup_variable_identifier`.
	 * @param ctx the parse tree
	 */
	exitCovergroup_variable_identifier?(ctx: Covergroup_variable_identifierContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.cover_point_identifier`.
	 * @param ctx the parse tree
	 */
	enterCover_point_identifier?(ctx: Cover_point_identifierContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.cover_point_identifier`.
	 * @param ctx the parse tree
	 */
	exitCover_point_identifier?(ctx: Cover_point_identifierContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.cross_identifier`.
	 * @param ctx the parse tree
	 */
	enterCross_identifier?(ctx: Cross_identifierContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.cross_identifier`.
	 * @param ctx the parse tree
	 */
	exitCross_identifier?(ctx: Cross_identifierContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.dynamic_array_variable_identifier`.
	 * @param ctx the parse tree
	 */
	enterDynamic_array_variable_identifier?(ctx: Dynamic_array_variable_identifierContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.dynamic_array_variable_identifier`.
	 * @param ctx the parse tree
	 */
	exitDynamic_array_variable_identifier?(ctx: Dynamic_array_variable_identifierContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.enum_identifier`.
	 * @param ctx the parse tree
	 */
	enterEnum_identifier?(ctx: Enum_identifierContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.enum_identifier`.
	 * @param ctx the parse tree
	 */
	exitEnum_identifier?(ctx: Enum_identifierContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.escaped_identifier`.
	 * @param ctx the parse tree
	 */
	enterEscaped_identifier?(ctx: Escaped_identifierContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.escaped_identifier`.
	 * @param ctx the parse tree
	 */
	exitEscaped_identifier?(ctx: Escaped_identifierContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.formal_identifier`.
	 * @param ctx the parse tree
	 */
	enterFormal_identifier?(ctx: Formal_identifierContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.formal_identifier`.
	 * @param ctx the parse tree
	 */
	exitFormal_identifier?(ctx: Formal_identifierContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.formal_port_identifier`.
	 * @param ctx the parse tree
	 */
	enterFormal_port_identifier?(ctx: Formal_port_identifierContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.formal_port_identifier`.
	 * @param ctx the parse tree
	 */
	exitFormal_port_identifier?(ctx: Formal_port_identifierContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.function_identifier`.
	 * @param ctx the parse tree
	 */
	enterFunction_identifier?(ctx: Function_identifierContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.function_identifier`.
	 * @param ctx the parse tree
	 */
	exitFunction_identifier?(ctx: Function_identifierContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.generate_block_identifier`.
	 * @param ctx the parse tree
	 */
	enterGenerate_block_identifier?(ctx: Generate_block_identifierContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.generate_block_identifier`.
	 * @param ctx the parse tree
	 */
	exitGenerate_block_identifier?(ctx: Generate_block_identifierContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.genvar_identifier`.
	 * @param ctx the parse tree
	 */
	enterGenvar_identifier?(ctx: Genvar_identifierContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.genvar_identifier`.
	 * @param ctx the parse tree
	 */
	exitGenvar_identifier?(ctx: Genvar_identifierContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.hierarchical_array_identifier`.
	 * @param ctx the parse tree
	 */
	enterHierarchical_array_identifier?(ctx: Hierarchical_array_identifierContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.hierarchical_array_identifier`.
	 * @param ctx the parse tree
	 */
	exitHierarchical_array_identifier?(ctx: Hierarchical_array_identifierContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.hierarchical_block_identifier`.
	 * @param ctx the parse tree
	 */
	enterHierarchical_block_identifier?(ctx: Hierarchical_block_identifierContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.hierarchical_block_identifier`.
	 * @param ctx the parse tree
	 */
	exitHierarchical_block_identifier?(ctx: Hierarchical_block_identifierContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.hierarchical_event_identifier`.
	 * @param ctx the parse tree
	 */
	enterHierarchical_event_identifier?(ctx: Hierarchical_event_identifierContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.hierarchical_event_identifier`.
	 * @param ctx the parse tree
	 */
	exitHierarchical_event_identifier?(ctx: Hierarchical_event_identifierContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.hierarchical_identifier`.
	 * @param ctx the parse tree
	 */
	enterHierarchical_identifier?(ctx: Hierarchical_identifierContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.hierarchical_identifier`.
	 * @param ctx the parse tree
	 */
	exitHierarchical_identifier?(ctx: Hierarchical_identifierContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.hierarchical_net_identifier`.
	 * @param ctx the parse tree
	 */
	enterHierarchical_net_identifier?(ctx: Hierarchical_net_identifierContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.hierarchical_net_identifier`.
	 * @param ctx the parse tree
	 */
	exitHierarchical_net_identifier?(ctx: Hierarchical_net_identifierContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.hierarchical_parameter_identifier`.
	 * @param ctx the parse tree
	 */
	enterHierarchical_parameter_identifier?(ctx: Hierarchical_parameter_identifierContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.hierarchical_parameter_identifier`.
	 * @param ctx the parse tree
	 */
	exitHierarchical_parameter_identifier?(ctx: Hierarchical_parameter_identifierContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.hierarchical_property_identifier`.
	 * @param ctx the parse tree
	 */
	enterHierarchical_property_identifier?(ctx: Hierarchical_property_identifierContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.hierarchical_property_identifier`.
	 * @param ctx the parse tree
	 */
	exitHierarchical_property_identifier?(ctx: Hierarchical_property_identifierContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.hierarchical_sequence_identifier`.
	 * @param ctx the parse tree
	 */
	enterHierarchical_sequence_identifier?(ctx: Hierarchical_sequence_identifierContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.hierarchical_sequence_identifier`.
	 * @param ctx the parse tree
	 */
	exitHierarchical_sequence_identifier?(ctx: Hierarchical_sequence_identifierContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.hierarchical_task_identifier`.
	 * @param ctx the parse tree
	 */
	enterHierarchical_task_identifier?(ctx: Hierarchical_task_identifierContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.hierarchical_task_identifier`.
	 * @param ctx the parse tree
	 */
	exitHierarchical_task_identifier?(ctx: Hierarchical_task_identifierContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.hierarchical_tf_identifier`.
	 * @param ctx the parse tree
	 */
	enterHierarchical_tf_identifier?(ctx: Hierarchical_tf_identifierContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.hierarchical_tf_identifier`.
	 * @param ctx the parse tree
	 */
	exitHierarchical_tf_identifier?(ctx: Hierarchical_tf_identifierContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.hierarchical_variable_identifier`.
	 * @param ctx the parse tree
	 */
	enterHierarchical_variable_identifier?(ctx: Hierarchical_variable_identifierContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.hierarchical_variable_identifier`.
	 * @param ctx the parse tree
	 */
	exitHierarchical_variable_identifier?(ctx: Hierarchical_variable_identifierContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.identifier`.
	 * @param ctx the parse tree
	 */
	enterIdentifier?(ctx: IdentifierContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.identifier`.
	 * @param ctx the parse tree
	 */
	exitIdentifier?(ctx: IdentifierContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.index_variable_identifier`.
	 * @param ctx the parse tree
	 */
	enterIndex_variable_identifier?(ctx: Index_variable_identifierContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.index_variable_identifier`.
	 * @param ctx the parse tree
	 */
	exitIndex_variable_identifier?(ctx: Index_variable_identifierContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.interface_identifier`.
	 * @param ctx the parse tree
	 */
	enterInterface_identifier?(ctx: Interface_identifierContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.interface_identifier`.
	 * @param ctx the parse tree
	 */
	exitInterface_identifier?(ctx: Interface_identifierContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.interface_instance_identifier`.
	 * @param ctx the parse tree
	 */
	enterInterface_instance_identifier?(ctx: Interface_instance_identifierContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.interface_instance_identifier`.
	 * @param ctx the parse tree
	 */
	exitInterface_instance_identifier?(ctx: Interface_instance_identifierContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.inout_port_identifier`.
	 * @param ctx the parse tree
	 */
	enterInout_port_identifier?(ctx: Inout_port_identifierContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.inout_port_identifier`.
	 * @param ctx the parse tree
	 */
	exitInout_port_identifier?(ctx: Inout_port_identifierContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.input_port_identifier`.
	 * @param ctx the parse tree
	 */
	enterInput_port_identifier?(ctx: Input_port_identifierContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.input_port_identifier`.
	 * @param ctx the parse tree
	 */
	exitInput_port_identifier?(ctx: Input_port_identifierContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.instance_identifier`.
	 * @param ctx the parse tree
	 */
	enterInstance_identifier?(ctx: Instance_identifierContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.instance_identifier`.
	 * @param ctx the parse tree
	 */
	exitInstance_identifier?(ctx: Instance_identifierContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.member_identifier`.
	 * @param ctx the parse tree
	 */
	enterMember_identifier?(ctx: Member_identifierContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.member_identifier`.
	 * @param ctx the parse tree
	 */
	exitMember_identifier?(ctx: Member_identifierContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.method_identifier`.
	 * @param ctx the parse tree
	 */
	enterMethod_identifier?(ctx: Method_identifierContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.method_identifier`.
	 * @param ctx the parse tree
	 */
	exitMethod_identifier?(ctx: Method_identifierContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.modport_identifier`.
	 * @param ctx the parse tree
	 */
	enterModport_identifier?(ctx: Modport_identifierContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.modport_identifier`.
	 * @param ctx the parse tree
	 */
	exitModport_identifier?(ctx: Modport_identifierContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.module_identifier`.
	 * @param ctx the parse tree
	 */
	enterModule_identifier?(ctx: Module_identifierContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.module_identifier`.
	 * @param ctx the parse tree
	 */
	exitModule_identifier?(ctx: Module_identifierContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.net_identifier`.
	 * @param ctx the parse tree
	 */
	enterNet_identifier?(ctx: Net_identifierContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.net_identifier`.
	 * @param ctx the parse tree
	 */
	exitNet_identifier?(ctx: Net_identifierContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.net_type_identifier`.
	 * @param ctx the parse tree
	 */
	enterNet_type_identifier?(ctx: Net_type_identifierContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.net_type_identifier`.
	 * @param ctx the parse tree
	 */
	exitNet_type_identifier?(ctx: Net_type_identifierContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.output_port_identifier`.
	 * @param ctx the parse tree
	 */
	enterOutput_port_identifier?(ctx: Output_port_identifierContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.output_port_identifier`.
	 * @param ctx the parse tree
	 */
	exitOutput_port_identifier?(ctx: Output_port_identifierContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.package_identifier`.
	 * @param ctx the parse tree
	 */
	enterPackage_identifier?(ctx: Package_identifierContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.package_identifier`.
	 * @param ctx the parse tree
	 */
	exitPackage_identifier?(ctx: Package_identifierContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.package_scope`.
	 * @param ctx the parse tree
	 */
	enterPackage_scope?(ctx: Package_scopeContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.package_scope`.
	 * @param ctx the parse tree
	 */
	exitPackage_scope?(ctx: Package_scopeContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.parameter_identifier`.
	 * @param ctx the parse tree
	 */
	enterParameter_identifier?(ctx: Parameter_identifierContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.parameter_identifier`.
	 * @param ctx the parse tree
	 */
	exitParameter_identifier?(ctx: Parameter_identifierContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.port_identifier`.
	 * @param ctx the parse tree
	 */
	enterPort_identifier?(ctx: Port_identifierContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.port_identifier`.
	 * @param ctx the parse tree
	 */
	exitPort_identifier?(ctx: Port_identifierContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.production_identifier`.
	 * @param ctx the parse tree
	 */
	enterProduction_identifier?(ctx: Production_identifierContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.production_identifier`.
	 * @param ctx the parse tree
	 */
	exitProduction_identifier?(ctx: Production_identifierContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.program_identifier`.
	 * @param ctx the parse tree
	 */
	enterProgram_identifier?(ctx: Program_identifierContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.program_identifier`.
	 * @param ctx the parse tree
	 */
	exitProgram_identifier?(ctx: Program_identifierContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.property_identifier`.
	 * @param ctx the parse tree
	 */
	enterProperty_identifier?(ctx: Property_identifierContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.property_identifier`.
	 * @param ctx the parse tree
	 */
	exitProperty_identifier?(ctx: Property_identifierContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.ps_class_identifier`.
	 * @param ctx the parse tree
	 */
	enterPs_class_identifier?(ctx: Ps_class_identifierContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.ps_class_identifier`.
	 * @param ctx the parse tree
	 */
	exitPs_class_identifier?(ctx: Ps_class_identifierContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.ps_covergroup_identifier`.
	 * @param ctx the parse tree
	 */
	enterPs_covergroup_identifier?(ctx: Ps_covergroup_identifierContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.ps_covergroup_identifier`.
	 * @param ctx the parse tree
	 */
	exitPs_covergroup_identifier?(ctx: Ps_covergroup_identifierContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.ps_checker_identifier`.
	 * @param ctx the parse tree
	 */
	enterPs_checker_identifier?(ctx: Ps_checker_identifierContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.ps_checker_identifier`.
	 * @param ctx the parse tree
	 */
	exitPs_checker_identifier?(ctx: Ps_checker_identifierContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.ps_identifier`.
	 * @param ctx the parse tree
	 */
	enterPs_identifier?(ctx: Ps_identifierContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.ps_identifier`.
	 * @param ctx the parse tree
	 */
	exitPs_identifier?(ctx: Ps_identifierContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.ps_or_hierarchical_array_identifier`.
	 * @param ctx the parse tree
	 */
	enterPs_or_hierarchical_array_identifier?(ctx: Ps_or_hierarchical_array_identifierContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.ps_or_hierarchical_array_identifier`.
	 * @param ctx the parse tree
	 */
	exitPs_or_hierarchical_array_identifier?(ctx: Ps_or_hierarchical_array_identifierContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.ps_or_hierarchical_net_identifier`.
	 * @param ctx the parse tree
	 */
	enterPs_or_hierarchical_net_identifier?(ctx: Ps_or_hierarchical_net_identifierContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.ps_or_hierarchical_net_identifier`.
	 * @param ctx the parse tree
	 */
	exitPs_or_hierarchical_net_identifier?(ctx: Ps_or_hierarchical_net_identifierContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.ps_or_hierarchical_property_identifier`.
	 * @param ctx the parse tree
	 */
	enterPs_or_hierarchical_property_identifier?(ctx: Ps_or_hierarchical_property_identifierContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.ps_or_hierarchical_property_identifier`.
	 * @param ctx the parse tree
	 */
	exitPs_or_hierarchical_property_identifier?(ctx: Ps_or_hierarchical_property_identifierContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.ps_or_hierarchical_sequence_identifier`.
	 * @param ctx the parse tree
	 */
	enterPs_or_hierarchical_sequence_identifier?(ctx: Ps_or_hierarchical_sequence_identifierContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.ps_or_hierarchical_sequence_identifier`.
	 * @param ctx the parse tree
	 */
	exitPs_or_hierarchical_sequence_identifier?(ctx: Ps_or_hierarchical_sequence_identifierContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.ps_or_hierarchical_tf_identifier`.
	 * @param ctx the parse tree
	 */
	enterPs_or_hierarchical_tf_identifier?(ctx: Ps_or_hierarchical_tf_identifierContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.ps_or_hierarchical_tf_identifier`.
	 * @param ctx the parse tree
	 */
	exitPs_or_hierarchical_tf_identifier?(ctx: Ps_or_hierarchical_tf_identifierContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.ps_parameter_identifier`.
	 * @param ctx the parse tree
	 */
	enterPs_parameter_identifier?(ctx: Ps_parameter_identifierContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.ps_parameter_identifier`.
	 * @param ctx the parse tree
	 */
	exitPs_parameter_identifier?(ctx: Ps_parameter_identifierContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.ps_type_identifier`.
	 * @param ctx the parse tree
	 */
	enterPs_type_identifier?(ctx: Ps_type_identifierContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.ps_type_identifier`.
	 * @param ctx the parse tree
	 */
	exitPs_type_identifier?(ctx: Ps_type_identifierContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.sequence_identifier`.
	 * @param ctx the parse tree
	 */
	enterSequence_identifier?(ctx: Sequence_identifierContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.sequence_identifier`.
	 * @param ctx the parse tree
	 */
	exitSequence_identifier?(ctx: Sequence_identifierContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.signal_identifier`.
	 * @param ctx the parse tree
	 */
	enterSignal_identifier?(ctx: Signal_identifierContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.signal_identifier`.
	 * @param ctx the parse tree
	 */
	exitSignal_identifier?(ctx: Signal_identifierContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.simple_identifier`.
	 * @param ctx the parse tree
	 */
	enterSimple_identifier?(ctx: Simple_identifierContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.simple_identifier`.
	 * @param ctx the parse tree
	 */
	exitSimple_identifier?(ctx: Simple_identifierContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.macro_usage_identifier`.
	 * @param ctx the parse tree
	 */
	enterMacro_usage_identifier?(ctx: Macro_usage_identifierContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.macro_usage_identifier`.
	 * @param ctx the parse tree
	 */
	exitMacro_usage_identifier?(ctx: Macro_usage_identifierContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.specparam_identifier`.
	 * @param ctx the parse tree
	 */
	enterSpecparam_identifier?(ctx: Specparam_identifierContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.specparam_identifier`.
	 * @param ctx the parse tree
	 */
	exitSpecparam_identifier?(ctx: Specparam_identifierContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.system_tf_identifier`.
	 * @param ctx the parse tree
	 */
	enterSystem_tf_identifier?(ctx: System_tf_identifierContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.system_tf_identifier`.
	 * @param ctx the parse tree
	 */
	exitSystem_tf_identifier?(ctx: System_tf_identifierContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.task_identifier`.
	 * @param ctx the parse tree
	 */
	enterTask_identifier?(ctx: Task_identifierContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.task_identifier`.
	 * @param ctx the parse tree
	 */
	exitTask_identifier?(ctx: Task_identifierContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.tf_identifier`.
	 * @param ctx the parse tree
	 */
	enterTf_identifier?(ctx: Tf_identifierContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.tf_identifier`.
	 * @param ctx the parse tree
	 */
	exitTf_identifier?(ctx: Tf_identifierContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.terminal_identifier`.
	 * @param ctx the parse tree
	 */
	enterTerminal_identifier?(ctx: Terminal_identifierContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.terminal_identifier`.
	 * @param ctx the parse tree
	 */
	exitTerminal_identifier?(ctx: Terminal_identifierContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.topmodule_identifier`.
	 * @param ctx the parse tree
	 */
	enterTopmodule_identifier?(ctx: Topmodule_identifierContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.topmodule_identifier`.
	 * @param ctx the parse tree
	 */
	exitTopmodule_identifier?(ctx: Topmodule_identifierContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.type_identifier`.
	 * @param ctx the parse tree
	 */
	enterType_identifier?(ctx: Type_identifierContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.type_identifier`.
	 * @param ctx the parse tree
	 */
	exitType_identifier?(ctx: Type_identifierContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.udp_identifier`.
	 * @param ctx the parse tree
	 */
	enterUdp_identifier?(ctx: Udp_identifierContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.udp_identifier`.
	 * @param ctx the parse tree
	 */
	exitUdp_identifier?(ctx: Udp_identifierContext): void;
	/**
	 * Enter a parse tree produced by `SVParser.variable_identifier`.
	 * @param ctx the parse tree
	 */
	enterVariable_identifier?(ctx: Variable_identifierContext): void;
	/**
	 * Exit a parse tree produced by `SVParser.variable_identifier`.
	 * @param ctx the parse tree
	 */
	exitVariable_identifier?(ctx: Variable_identifierContext): void;
}

