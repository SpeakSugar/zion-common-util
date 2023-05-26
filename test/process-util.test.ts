import { ProcessUtil } from "../src";

it('process util test', async function () {
    let stdout = await ProcessUtil.exec(`ls`, {
        timeout: 60e3
    });
    console.log(stdout);
}, 10e3);
