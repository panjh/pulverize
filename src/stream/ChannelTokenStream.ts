import * as antlr4 from "../antlr4/index";
import { BufferedTokenStream } from "./BufferedTokenStream";

export class ChannelTokenStream extends BufferedTokenStream {

    private channel: number;

    constructor(lexer: antlr4.Lexer, channel: number, tokens?: antlr4.Token[]) {
        super(lexer, tokens);
        this.channel = 0;
        this.set_channel(channel);
    }

    set_channel(channel: number) {
        this.channel = channel;
        this.size = 1; // at least 1 EOF
        for (let i = 0; i < this.cap - 1; ++i) {
            if (this.tokens[i].channel == this.channel) ++this.size;
        }
        this.reset();
    }

    locate(index: number, head: number, tail: number): number {
        if (index >= 0) {
            for (let i = head; i <= tail; ++i) {
                if (this.tokens[i].channel == this.channel) {
                    if (index-- == 0) return i;
                }
            }
            return tail;
        }
        else {
            for (let i = head; i >= tail; --i) {
                if (this.tokens[i].channel == this.channel) {
                    if (index++ == 0) return i;
                }
            }
            return tail;
        }

    }

}