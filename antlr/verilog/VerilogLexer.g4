/*
MIT License

Copyright (c) 2022 Mustafa Said Ağca

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

lexer grammar VerilogLexer;

// channels { COMMENTS, DIRECTIVES }

EM : '!' ;
EMEQ : '!=' ;
EMEQEQ : '!==' ;
DQ : '"' ;
HA : '#' ;
DL : '$' ;
DLFULLSKEW : '$fullskew' ;
DLHOLD : '$hold' ;
DLNOCHANGE : '$nochange' ;
DLPERIOD : '$period' ;
DLRECOVERY : '$recovery' ;
DLRECREM : '$recrem' ;
DLREMOVAL : '$removal' ;
DLSETUP : '$setup' ;
DLSETUPHOLD : '$setuphold' ;
DLSKEW : '$skew' ;
DLTIMESKEW : '$timeskew' ;
DLWIDTH : '$width' ;
MO : '%' ;
AM : '&' ;
AMAM : '&&' ;
AMAMAM : '&&&' ;
AP : '\'' ;
LP : '(' ;
RP : ')' ;
AS : '*' ;
ASAS : '**' ;
ASSL : '*/' ;
ASGT : '*>' ;
PL : '+' ;
PLCL : '+:' ;
CO : ',' ;
MI : '-' ;
MICL : '-:' ;
MIGT : '->' ;
DT : '.' ;
SL : '/' ;
SLAS : '/*' ;
SLSL : '//' ;
CL : ':' ;
SC : ';' ;
LT : '<' ;
LTLT : '<<' ;
LTLTLT : '<<<' ;
LTEQ : '<=' ;
EQ : '=' ;
EQEQ : '==' ;
EQEQEQ : '===' ;
EQGT : '=>' ;
GT : '>' ;
GTEQ : '>=' ;
GTGT : '>>' ;
GTGTGT : '>>>' ;
QM : '?' ;
AT : '@' ;
PATHPULSEDL : 'PATHPULSE$' ;
LB : '[' ;
RB : ']' ;
CA : '^' ;
CATI : '^~' ;
GA : '`' -> channel(2), pushMode(DIRECTIVE_MODE) ;
ALWAYS : 'always' ;
AND : 'and' ;
ASSIGN : 'assign' ;
AUTOMATIC : 'automatic' ;
BEGIN : 'begin' ;
BUF : 'buf' ;
BUFIFZERO : 'bufif0' ;
BUFIFONE : 'bufif1' ;
CASE : 'case' ;
CASEX : 'casex' ;
CASEZ : 'casez' ;
CELL : 'cell' ;
CMOS : 'cmos' ;
CONFIG : 'config' ;
DEASSIGN : 'deassign' ;
DEFAULT : 'default' ;
DEFPARAM : 'defparam' ;
DESIGN : 'design' ;
DISABLE : 'disable' ;
EDGE : 'edge' -> mode(EDGE_MODE) ;
ELSE : 'else' ;
END : 'end' ;
ENDCASE : 'endcase' ;
ENDCONFIG : 'endconfig' ;
ENDFUNCTION : 'endfunction' ;
ENDGENERATE : 'endgenerate' ;
ENDMODULE : 'endmodule' ;
ENDPRIMITIVE : 'endprimitive' ;
ENDSPECIFY : 'endspecify' ;
ENDTABLE : 'endtable' ;
ENDTASK : 'endtask' ;
EVENT : 'event' ;
FOR : 'for' ;
FORCE : 'force' ;
FOREVER : 'forever' ;
FORK : 'fork' ;
FUNCTION : 'function' ;
GENERATE : 'generate' ;
GENVAR : 'genvar' ;
HIGHZZERO : 'highz0' ;
HIGHZONE : 'highz1' ;
IF : 'if' ;
IFNONE : 'ifnone' ;
INCLUDE : 'include' -> mode(LIBRARY_MODE) ;
INITIAL : 'initial' ;
INOUT : 'inout' ;
INPUT : 'input' ;
INSTANCE : 'instance' ;
INTEGER : 'integer' ;
JOIN : 'join' ;
LARGE : 'large' ;
LIBLIST : 'liblist' ;
LIBRARY : 'library' -> mode(LIBRARY_MODE) ;
LOCALPARAM : 'localparam' ;
MACROMODULE : 'macromodule' ;
MEDIUM : 'medium' ;
MODULE : 'module' ;
NAND : 'nand' ;
NEGEDGE : 'negedge' ;
NMOS : 'nmos' ;
NOR : 'nor' ;
NOSHOWCANCELLED : 'noshowcancelled' ;
NOT : 'not' ;
NOTIFZERO : 'notif0' ;
NOTIFONE : 'notif1' ;
OR : 'or' ;
OUTPUT : 'output' ;
PARAMETER : 'parameter' ;
PMOS : 'pmos' ;
POSEDGE : 'posedge' ;
PRIMITIVE : 'primitive' ;
PULLZERO : 'pull0' ;
PULLONE : 'pull1' ;
PULLDOWN : 'pulldown' ;
PULLUP : 'pullup' ;
PULSESTYLE_ONDETECT : 'pulsestyle_ondetect' ;
PULSESTYLE_ONEVENT : 'pulsestyle_onevent' ;
RCMOS : 'rcmos' ;
REAL : 'real' ;
REALTIME : 'realtime' ;
REG : 'reg' ;
RELEASE : 'release' ;
REPEAT : 'repeat' ;
RNMOS : 'rnmos' ;
RPMOS : 'rpmos' ;
RTRAN : 'rtran' ;
RTRANIFZERO : 'rtranif0' ;
RTRANIFONE : 'rtranif1' ;
SCALARED : 'scalared' ;
SHOWCANCELLED : 'showcancelled' ;
SIGNED : 'signed' ;
SMALL : 'small' ;
SPECIFY : 'specify' ;
SPECPARAM : 'specparam' ;
STRONGZERO : 'strong0' ;
STRONGONE : 'strong1' ;
SUPPLYZERO : 'supply0' ;
SUPPLYONE : 'supply1' ;
TABLE : 'table' -> mode(UDP_MODE) ;
TASK : 'task' ;
TIME : 'time' ;
TRAN : 'tran' ;
TRANIFZERO : 'tranif0' ;
TRANIFONE : 'tranif1' ;
TRI : 'tri' ;
TRIZERO : 'tri0' ;
TRIONE : 'tri1' ;
TRIAND : 'triand' ;
TRIOR : 'trior' ;
TRIREG : 'trireg' ;
USE : 'use' ;
UWIRE : 'uwire' ;
VECTORED : 'vectored' ;
WAIT : 'wait' ;
WAND : 'wand' ;
WEAKZERO : 'weak0' ;
WEAKONE : 'weak1' ;
WHILE : 'while' ;
WIRE : 'wire' ;
WOR : 'wor' ;
XNOR : 'xnor' ;
XOR : 'xor' ;
LC : '{' ;
VL : '|' ;
VLVL : '||' ;
RC : '}' ;
TI : '~' ;
TIAM : '~&' ;
TICA : '~^' ;
TIVL : '~|' ;
DECIMAL_NUMBER : ( SIZE? DECIMAL_BASE )? UNSIGNED_NUMBER | SIZE? DECIMAL_BASE ( X_DIGIT | Z_DIGIT ) '_'* ;
BINARY_NUMBER : SIZE? BINARY_BASE BINARY_VALUE ;
OCTAL_NUMBER : SIZE? OCTAL_BASE OCTAL_VALUE ;
HEX_NUMBER : SIZE? HEX_BASE HEX_VALUE ;
fragment SIGN : [+\-] ;
fragment SIZE : NON_ZERO_UNSIGNED_NUMBER ;
fragment NON_ZERO_UNSIGNED_NUMBER : NON_ZERO_DECIMAL_DIGIT ( '_' | DECIMAL_DIGIT )* ;
REAL_NUMBER : UNSIGNED_NUMBER '.' UNSIGNED_NUMBER | UNSIGNED_NUMBER ( '.' UNSIGNED_NUMBER )? EXP SIGN? UNSIGNED_NUMBER ;
fragment EXP : [eE] ;
fragment UNSIGNED_NUMBER : DECIMAL_DIGIT ( '_' | DECIMAL_DIGIT )* ;
fragment BINARY_VALUE : BINARY_DIGIT ( '_' | BINARY_DIGIT )* ;
fragment OCTAL_VALUE : OCTAL_DIGIT ( '_' | OCTAL_DIGIT )* ;
fragment HEX_VALUE : HEX_DIGIT ( '_' | HEX_DIGIT )* ;
fragment DECIMAL_BASE : '\'' [sS]? [dD] ;
fragment BINARY_BASE : '\'' [sS]? [bB] ;
fragment OCTAL_BASE : '\'' [sS]? [oO] ;
fragment HEX_BASE : '\'' [sS]? [hH] ;
fragment NON_ZERO_DECIMAL_DIGIT : [1-9] ;
fragment DECIMAL_DIGIT : [0-9] ;
fragment BINARY_DIGIT : [01] | X_DIGIT | Z_DIGIT ;
fragment OCTAL_DIGIT : [0-7] | X_DIGIT | Z_DIGIT ;
fragment HEX_DIGIT : [0-9a-fA-F] | X_DIGIT | Z_DIGIT ;
fragment X_DIGIT : [xX] ;
fragment Z_DIGIT : [zZ?] ;
STRING : '"' ( ~["\\] | ESC_SEQ )*? '"' ;
fragment ESC_SEQ : '\\' . ;
COMMENT : ( ONE_LINE_COMMENT | BLOCK_COMMENT) -> channel(3) ;
fragment ONE_LINE_COMMENT : '//' COMMENT_TEXT NEWLINE ;
fragment BLOCK_COMMENT : '/*' COMMENT_TEXT '*/' ;
fragment COMMENT_TEXT : ASCII_ANY*?;
fragment NEWLINE : '\r'? '\n' ;
ESCAPED_IDENTIFIER : '\\' ASCII_PRINTABLE_EXCEPT_SPACE* WHITE_SPACE ;
SIMPLE_IDENTIFIER : [a-zA-Z_] [a-zA-Z0-9_$]* ;
SYSTEM_TF_IDENTIFIER : '$' [a-zA-Z0-9_$][a-zA-Z0-9_$]* ;
WHITE_SPACE : [ \t\r\n]+ -> channel(1) ;
fragment ASCII_ANY : [\u0000-\uffff] ;
fragment ASCII_PRINTABLE : [\u0020-\u007e] ;
fragment ASCII_PRINTABLE_EXCEPT_SPACE : [\u0021-\u007e] ;
// fragment CHINESE: [\u2013-\uFF1F] ;  //表示所有中文的unicode编码，以支持中文
//INIT_VAL : '1\'' [bB][01xX] | [01] ;
//SCALAR_CONSTANT : ( '1'? '\'' [bB] )? [01] ;

mode LIBRARY_MODE;
LMCO : CO -> type(CO) ;
LMSC : SC -> type(SC), mode(DEFAULT_MODE) ;
LMGA : GA -> channel(2), type(GA), pushMode(DIRECTIVE_MODE) ;
MIINCDIR : '-incdir' ;
LIBRARY_ESCAPED_IDENTIFIER : ESCAPED_IDENTIFIER -> type(ESCAPED_IDENTIFIER) ;
LIBRARY_SIMPLE_IDENTIFIER : SIMPLE_IDENTIFIER -> type(SIMPLE_IDENTIFIER) ;
LIBRARY_COMMENT : COMMENT -> channel(3), type(COMMENT) ;
FILE_PATH_SPEC : ~[",; \t\r\n\\]+ | PATH_STRING ;
fragment PATH_STRING : STRING ;
LIBRARY_WHITE_SPACE : WHITE_SPACE -> channel(1), type(WHITE_SPACE) ;

mode UDP_MODE;
UMLP : LP -> type(LP) ;
UMRP : RP -> type(RP) ;
UMMI : MI -> type(MI) ;
UMCL : CL -> type(CL) ;
UMSC : SC -> type(SC) ;
UMGA : GA -> channel(2), type(GA), pushMode(DIRECTIVE_MODE) ;
//OUTPUT_SYMBOL : [01xX] ;
//LEVEL_SYMBOL : [01xX?bB] ;
OUTPUT_OR_LEVEL_SYMBOL : [01xX] ;
LEVEL_ONLY_SYMBOL : [?bB] ;
EDGE_SYMBOL : [rRfFpPnN*] ;
UDP_ENDTABLE : 'endtable' -> type(ENDTABLE), mode(DEFAULT_MODE) ;
UDP_COMMENT : COMMENT -> channel(3), type(COMMENT) ;
UDP_WHITE_SPACE : WHITE_SPACE -> channel(1), type(WHITE_SPACE) ;

mode EDGE_MODE;
EMCO : CO -> type(CO) ;
EMLB : LB -> type(LB) ;
EMRB : RB -> type(RB), mode(DEFAULT_MODE) ;
EMGA : GA -> channel(2), type(GA), pushMode(DIRECTIVE_MODE) ;
EDGE_DESCRIPTOR : '01' | '10' | [zZxX][01] | [01][zZxX] ;
EDGE_COMMENT : COMMENT -> channel(3), type(COMMENT) ;
EDGE_WHITE_SPACE : WHITE_SPACE -> channel(1), type(WHITE_SPACE) ;

mode DIRECTIVE_MODE;
BEGIN_KEYWORDS_DIRECTIVE : 'begin_keywords' -> channel(2), mode(DIRECTIVE_TEXT_MODE) ;
CELLDEFINE_DIRECTIVE : 'celldefine' -> channel(2), popMode ;
DEFAULT_NETTYPE_DIRECTIVE : 'default_nettype' -> channel(2), mode(DIRECTIVE_TEXT_MODE) ;
DEFINE_DIRECTIVE : 'define' -> channel(2), mode(DEFINE_DIRECTIVE_MODE) ;
ELSE_DIRECTIVE : 'else' -> channel(2), popMode, mode(SOURCE_TEXT_MODE) ;
ELSIF_DIRECTIVE : 'elsif' -> channel(2), popMode, mode(ELSIF_DIRECTIVE_MODE) ;
END_KEYWORDS_DIRECTIVE : 'end_keywords' -> channel(2), popMode ;
ENDCELLDEFINE_DIRECTIVE : 'endcelldefine' -> channel(2), popMode ;
ENDIF_DIRECTIVE : 'endif' -> channel(2), popMode, popMode, popMode ;
IFDEF_DIRECTIVE : 'ifdef' -> channel(2), mode(IFDEF_DIRECTIVE_MODE) ;
IFNDEF_DIRECTIVE : 'ifndef' -> channel(2), mode(IFDEF_DIRECTIVE_MODE) ;
INCLUDE_DIRECTIVE : 'include' -> channel(2), mode(DIRECTIVE_TEXT_MODE) ;
LINE_DIRECTIVE : 'line' -> channel(2), mode(DIRECTIVE_TEXT_MODE) ;
NOUNCONNECTED_DRIVE_DIRECTIVE : 'nounconnected_drive' -> channel(2), popMode ;
PRAGMA_DIRECTIVE : 'pragma' -> channel(2), mode(DIRECTIVE_TEXT_MODE) ;
RESETALL_DIRECTIVE : 'resetall' -> channel(2), popMode ;
TIMESCALE_DIRECTIVE : 'timescale' -> channel(2), mode(DIRECTIVE_TEXT_MODE) ;
UNCONNECTED_DRIVE_DIRECTIVE : 'unconnected_drive' -> channel(2), mode(DIRECTIVE_TEXT_MODE) ;
UNDEF_DIRECTIVE : 'undef' -> channel(2), mode(UNDEF_DIRECTIVE_MODE) ;
MACRO_USAGE : DIRECTIVE_ID [ \t\r\n]*? MACRO_ARGS? -> channel(2), popMode ;
fragment DIRECTIVE_ID : DIRECTIVE_ESCAPED_ID | DIRECTIVE_SIMPLE_ID ;
fragment DIRECTIVE_ESCAPED_ID : '\\' ASCII_PRINTABLE_EXCEPT_SPACE* WHITE_SPACE ;
fragment DIRECTIVE_SIMPLE_ID : [a-zA-Z_] [a-zA-Z0-9_$]* ;
fragment MACRO_ARGS : '(' ( MACRO_ARGS | ~[()] )* ')' ;

mode DIRECTIVE_TEXT_MODE;
DIRECTIVE_TEXT : COMMENT_TEXT NEWLINE -> channel(2), popMode ;

mode DEFINE_DIRECTIVE_MODE;
DIRECTIVE_IDENTIFIER : DIRECTIVE_ID -> channel(2), mode(MACRO_TEXT_MODE) ;
DIRECTIVE_COMMENT : COMMENT -> channel(3) ;
DIRECTIVE_WHITE_SPACE : SPACE_TAB -> channel(1) ;
DIRECTIVE_NEWLINE : NEWLINE -> channel(1) ;
fragment SPACE_TAB : [ \t]+ ;

mode MACRO_TEXT_MODE;
MACRO_TEXT : ~[\r\n\\]+ -> channel(2) ;
MACRO_ESC_NEWLINE : '\\' NEWLINE -> channel(2) ;
MACRO_ESC_SEQ : ESC_SEQ -> channel(2), type(MACRO_TEXT) ;
MACRO_NEWLINE : NEWLINE -> channel(1), type(DIRECTIVE_NEWLINE), popMode ;

mode UNDEF_DIRECTIVE_MODE;
UNDEF_IDENTIFIER
    : DIRECTIVE_ID -> channel(2), type(DIRECTIVE_IDENTIFIER), popMode ;
UNDEF_COMMENT : COMMENT -> channel(3), type(DIRECTIVE_COMMENT) ;
UNDEF_WHITE_SPACE : SPACE_TAB -> channel(1), type(DIRECTIVE_WHITE_SPACE) ;
UNDEF_NEWLINE : NEWLINE -> channel(1), type(DIRECTIVE_NEWLINE) ;

mode IFDEF_DIRECTIVE_MODE;
IFDEF_IDENTIFIER : DIRECTIVE_ID -> channel(2), type(DIRECTIVE_IDENTIFIER), pushMode(SOURCE_TEXT_MODE) ;
IFDEF_COMMENT : COMMENT -> channel(3), type(DIRECTIVE_COMMENT) ;
IFDEF_WHITE_SPACE : SPACE_TAB -> channel(1), type(DIRECTIVE_WHITE_SPACE) ;
IFDEF_NEWLINE : NEWLINE -> channel(1), type(DIRECTIVE_NEWLINE) ;

mode ELSIF_DIRECTIVE_MODE;
ELSIF_IDENTIFIER : DIRECTIVE_ID -> channel(2), type(DIRECTIVE_IDENTIFIER), mode(SOURCE_TEXT_MODE) ;
ELSIF_COMMENT : COMMENT -> channel(3), type(DIRECTIVE_COMMENT) ;
ELSIF_WHITE_SPACE : SPACE_TAB -> channel(1), type(DIRECTIVE_WHITE_SPACE) ;
ELSIF_NEWLINE : NEWLINE -> channel(1), type(DIRECTIVE_NEWLINE) ;

mode SOURCE_TEXT_MODE;
SOURCE_TEXT : ~'`'+ -> channel(2) ;
STGA : GA -> channel(2), type(GA), pushMode(DIRECTIVE_MODE) ;
