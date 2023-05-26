import { ProcessUtil } from "../src/process-util";

it('process util test', async function () {
    let stdout = await ProcessUtil.exec(`fscvsev`);
    console.log(stdout);
}, 10e3);
