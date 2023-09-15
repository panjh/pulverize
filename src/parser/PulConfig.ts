import * as util from "../util";

let debug = false;
let dtag = "[PulConfig]";

export class PulConfig {

    static PATH = ".vscode/pulverize.json";
    private static INST: PulConfig;

    static inst(): PulConfig {
        if (!this.INST) this.INST = new PulConfig();
        return this.INST;
    }

    define: string[] = ["__SIM__"];
    source: string[] = ["**/*.v", "**/*.sv"];
    exclude: string[] = [];
    lint: {[name:string]:boolean} = {};
    lint_exclude: string[] = [];

    constructor() {
        if (!this.load()) this.store();
    }

    load(): boolean {
        let cwd = util.workdir();
        if (!cwd) return false;
        let path = `${cwd}/${PulConfig.PATH}`;
        let json = util.file_read(path);
        if (json.length == 0) return false;
        let data = JSON.parse(json);
        Object.assign(this, data);
        if (debug) console.log(`${dtag} config loaded from '${path} data:`, this);
        return true;
    }

    store(): boolean {
        let cwd = util.workdir();
        if (!cwd) return false;
        let path = `${cwd}/${PulConfig.PATH}`;
        let json = JSON.stringify(this, null, "    ");
        util.file_write(path, json);
        if (debug) console.log(`${dtag} config stored to '${path}`);
        return true;
    }
}