import * as v from "../v/VParser";
import * as antlr4 from "../antlr4";
import { Context } from "./entity/Context";
import { RefToken } from "./entity/RefToken";
import { Func } from "./entity/Func";
import { Symbol } from "./entity/Symbol";

let context: Context;

export function width(expr: v.ExpressionContext|undefined, ctx: Context): number|undefined {
    if (!expr) return undefined;
    context = ctx;
    try {
        return width_expression(expr);
    }
    catch (e) {}
    return undefined;
}

function width_expression(expr: v.ExpressionContext): number {
    if (expr.primary()) {
        let op = expr.unary_operator();
        if (op && (op.EM() || op.VL() || op.AM() || op.CA() || op.TIVL() || op.TIAM() || op.TICA())) return 1; // ! | & ^ ~| ~& ~^
        return width_primary(expr.primary());
    }
    else if (expr.binary_operator()) {
        let op = expr.binary_operator();
        if (op.EQEQ() || op.EMEQ() || op.EQEQEQ() || op.EMEQEQ() || op.AMAM() || op.VLVL()
            || op.LT() || op.LTEQ() || op.GT() || op.GTEQ()) return 1;
        return Math.min(width_expression(expr.expression(0)), width_expression(expr.expression(1)));
    }
    else if (expr.QM()) {
        return Math.min(width_expression(expr.expression(1)), width_expression(expr.expression(2)));
    }
    throw "unexpected error";
}

function width_primary(prim: v.PrimaryContext): number {
    if (prim.number_()) {
        return width_number(prim.number_());
    }
    else if (prim.hierarchical_identifier()) {
        if (prim.range_expression()) return width_range_expression(prim.range_expression());
        let name = prim.hierarchical_identifier().getText();
        let symbol = context.find_symbol(name, position(prim.start));
        if (!symbol) throw "symbol not found";
        if (!(symbol instanceof Symbol)) throw "not a symbol";
        if (!symbol.width_symbol) throw "unknown width";
        return symbol.width_symbol;
    }
    else if (prim.concatenation()) {
        return width_concatenation(prim.concatenation());
    }
    else if (prim.multiple_concatenation()) {
        return width_multiple_concatenation(prim.multiple_concatenation());
    }
    else if (prim.function_call()) {
        return width_function_call(prim.function_call());
    }
    else if (prim.system_function_call()) {
        return width_system_function_call(prim.system_function_call());
    }
    else if (prim.mintypmax_expression()) {
        return width_mintypmax_expression(prim.mintypmax_expression());
    }
    throw "unexpected error";
}

function width_number(num: v.NumberContext): number {
    let str = num.getText();
    let i = str.indexOf('\'');
    if (i > 0) return Number(str.substring(0, i));
    return 32;
}

function value_constant_expression(cexpr: v.Constant_expressionContext): number {
    return eval(cexpr.getText());
}

function width_range_expression(rng: v.Range_expressionContext): number {
    if (rng.expression()) {
        return 1;
    }
    else if (rng.msb_constant_expression() && rng.lsb_constant_expression()) {
        let msb = value_constant_expression(rng.msb_constant_expression().constant_expression());
        let lsb = value_constant_expression(rng.lsb_constant_expression().constant_expression());
        return msb - lsb + 1;
    }
    else if (rng.width_constant_expression()) {
        return value_constant_expression(rng.width_constant_expression().constant_expression());
    }
    throw "unexpected error";
}

function width_concatenation(conc: v.ConcatenationContext): number {
    let width = 0;
    for (let expr of conc.expression_list()) {
        let w = width_expression(expr);
        width += w;
    }
    return width;
}

function width_multiple_concatenation(mconc: v.Multiple_concatenationContext): number {
    let width = width_concatenation(mconc.concatenation());
    let mul = value_constant_expression(mconc.constant_expression());
    return mul * width;
}

function position(tok: antlr4.Token): number {
    return (tok as RefToken).root_beg || tok.start;
}

function width_function_call(func: v.Function_callContext): number {
    let name = func.hierarchical_function_identifier().getText();
    let fn = context.find_symbol(name, position(func.start));
    if (!(fn instanceof Func)) throw "not a function";
    if (fn.width_symbol === undefined) throw "unknown width";
    return fn.width_symbol;
}

function width_system_function_call(sfunc: v.System_function_callContext): number {
    return 32;
}

function width_mintypmax_expression(mint: v.Mintypmax_expressionContext): number {
    return width_expression(mint.expression(0));
}
