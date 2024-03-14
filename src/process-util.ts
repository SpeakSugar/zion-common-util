import * as util from 'util';
import { exec, ExecOptions } from "child_process";
import { ProcessUtilException } from "./exception/process-util-exception";
import * as _ from "lodash";

export class ProcessUtil {

    public static async exec(command: string, options: ExecOptions = {}): Promise<string> {
        options = _.merge(options, { windowsHide: true });
        let p_exec = util.promisify(exec);
        try {
            let { stdout, stderr } = options ? await p_exec(command, options) : await p_exec(command);
            if (stderr) {
                throw new ProcessUtilException(stderr.toString());
            }
            return stdout.toString();
        } catch (e) {
            throw new ProcessUtilException(`${command} failed, ${e.message}`, e);
        }
    }

}
