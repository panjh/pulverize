import * as util from "../util";

let debug = false;
let dtag = "[PulConfig]";
let CONFIG = ".vscode/pulverize.json";

export class PulConfig {
    define: string[] = ["__SIM__"];
    source: string[] = ["**/*.v", "**/*.sv"];
    exclude: string[] = [];

    load(): boolean {
        let cwd = util.workdir();
        if (!cwd) return false;
        let path = `${cwd}/${CONFIG}`;
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
        let path = `${cwd}/${CONFIG}`;
        let json = JSON.stringify(this, null, "    ");
        util.file_write(path, json);
        if (debug) console.log(`${dtag} config stored to '${path}`);
        return true;
    }
}