import { Source } from "./entity/Source";

export interface SourceLoader {

    load(path: string): Source|undefined;

}