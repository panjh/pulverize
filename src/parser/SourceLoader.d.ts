import { Source } from "./entity/Source";

export interface SourceLoader {

    load(path: string, force?: boolean, code?: string): Source|undefined;

}