import { ProcessUtil } from "../src/process-util";

it('process util test', async function () {
    let stdout = await ProcessUtil.exec(`mkdir ~/tmp`);
    console.log(stdout);
}, 10e3);
