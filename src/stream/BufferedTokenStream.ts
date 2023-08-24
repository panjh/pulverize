import * as antlr4 from "../antlr4/index";

export class BufferedTokenStream extends antlr4.TokenStream {

    tokenSource: any;
    tokens: antlr4.Token[];
    pos: number;
    cap: number;

    constructor(lexer: antlr4.Lexer, tokens?: antlr4.Token[]) {
        super();
        this.tokenSource = {_factory: (lexer as any)["_factory"]};
        this.pos = 0;
        this.cap = 0;
        this.index = 0;
        this.size = 0;
        if (tokens) {
            this.tokens = tokens;
            this.cap = this.size = tokens.length;
        }
        else {
            this.tokens = [];
            this.fill(lexer);
        }
    }

    get(index: number): antlr4.Token {
        if (index < 0) index = 0;
        else if (index >= this.size) index = this.size - 1;
        let pos = this.locate(index, 0, this.cap-1);
		return this.tokens[pos];
	}

    seek(index: number): void {
        let i = index;
        if (index < 0) index = 0;
        else if (index >= this.size) index = this.size - 1;
        this.pos = this.locate(index, 0, this.cap-1);
        this.index = index;
        let t = this.tokens[this.pos];
        // console.log(`seek(${i}/${index}) token ${t.tokenIndex} pos ${this.pos} text ${t.text.trim()}`);
	}

    reset(): void {
        this.seek(0);
    }

    consume(): antlr4.Token {
        let t = this.tokens[this.pos];
        // console.log(`consume token ${t.tokenIndex} pos ${this.pos} text ${t.text.trim()}`);
        this.pos = this.locate(1, this.pos, this.cap-1);
        ++this.index;
        if (this.pos == this.cap - 1) {
            this.index = this.size - 1;
        }
        return t;
	}

    LT(k: number): antlr4.Token {
		if (k == 0) throw new antlr4.RecognitionException({message: "LT index shouldn't be 0"});
        if (k > 0) {
            let pos = this.locate(k-1, this.pos, this.cap-1);
            return this.tokens[pos];
        }
        else {
            let pos = this.locate(k, this.pos, 0);
            return this.tokens[pos];
        }
	}

    LA(i: number): number {
		return this.LT(i).type;
	}

    getText(interval?: antlr4.Interval): string {
        let start = 0;
        let stop = this.cap - 1;
        if (interval) {
            start = interval.start;
            stop = interval.stop;
        }
		if (start < 0 || stop < 0) return "";
        if (stop >= this.size) stop = this.size - 1;

        let s = "";
		for (let i = start; i <= stop; ++i) {
			let t = this.get(i);
			s = `${s} ${t.text.trim()}`;
		}
		return s;
	}

    getHiddenTokensToRight(tokenIndex: number, channelIndex?: number): antlr4.Token[] {
		return [];
	}

    getHiddenTokensToLeft(tokenIndex: number, channelIndex?: number): antlr4.Token[] {
		return [];
	}

    mark(): number {
		return 0;
	}

	release(marker: any) {
		// no resources to release
	}

    locate(index: number, head: number, tail: number): number {
        index += head;
        if (index >= head) {
            if (index <= tail) return index;
            else return tail;
        }
        else {
            if (index >= tail) return index;
            else return tail;
        }
    }

    private add(token: antlr4.Token): void {
        this.tokens.push(token);
        this.cap += 1;
        this.size += 1;
    }

    private fill(lexer: antlr4.Lexer): void {
        while (true) {
            let t = lexer.nextToken();
            t.tokenIndex = this.tokens.length;
            this.add(t);
            if (t.type == antlr4.Token.EOF) return;
        }
    }
}