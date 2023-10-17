import { ProcessUtil } from "../src";
import { exec } from "child_process";

it('process util test', async function () {
    let stdout = await ProcessUtil.exec(`pkill RingCentral XXX`);
    console.log(stdout);
}, 400e3);

it('install sf', async function () {
    await ProcessUtil.exec(`sudo npm install -g selenium-federation-server --registry=http://nexus3-xmn02.lab.nordigy.ru/repository/npm-group/`);
}, 400e3);

export class AutoCmdUtil {

    public static async exec(script: string, timeout: number): Promise<{ stdout: string, stderr: string }> {
        return await new Promise<{ stdout: string, stderr: string }>(function (resolve, reject) {
            // maxBuffer is specified to avoid ERR_CHILD_PROCESS_STDIO_MAXBUFFER
            exec(script, {
                    maxBuffer: 10 * 1024 * 1024,
                    timeout: timeout ? timeout : 70e3
                },
                (err, stdout: string, stderr: string) => {
                    if (err) throw err;
                    resolve({ stdout, stderr });
                });
        })
    }

}

it('autocmd exec', async function () {
    await AutoCmdUtil.exec(`pkill RingCentral`, 30e3);
});
