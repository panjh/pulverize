#!/bin/bash
function antlr4() {
    echo "generating $1 to $2..."
    java -jar /usr/local/lib/antlr-4.13.0-complete.jar -Dlanguage=TypeScript $1 -o $2
    java -jar /usr/local/lib/antlr-4.13.0-complete.jar $1 -o test
}

antlr4 antlr/verilog/VLexer.g4 src/v
antlr4 antlr/verilog/VParser.g4 src/v
sed -i 's/\?: (\(.*\)) =>/?(\1):/' src/v/VParserListener.ts
sed -i "s/from [\"\']antlr4[\"\']/from \"..\/antlr4\"/" src/v/*.ts
rm src/v/*.{interp,tokens}

# antlr4 antlr/systemverilog/SVLexer.g4 src/sv
# antlr4 antlr/systemverilog/SVParser.g4 src/sv
# sed -i 's/\?: (\(.*\)) =>/?(\1):/' src/sv/SVParserListener.ts
# sed -i "s/from [\"\']antlr4[\"\']/from \"..\/antlr4\"/" src/sv/*.ts
# rm src/sv/*.{interp,tokens}


#echo "compiling java source to test..."
#javac -cp /usr/local/lib/antlr-4.13.0-complete.jar test/*.java

