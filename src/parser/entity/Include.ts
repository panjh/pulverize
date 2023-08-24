import { Source } from "./Source";

export class Include {
    source: Source;
    tok_start: number;
    tok_end: number;

    constructor(source: Source) {
        this.source = source;
        this.tok_start = 0;
        this.tok_end = -1;
        source.valid = true;
    }

    contains(tok_index: number): boolean {
        return (tok_index >= this.tok_start && (this.tok_end < 0 || tok_index < this.tok_end));
    }

}