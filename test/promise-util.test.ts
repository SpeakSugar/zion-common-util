import { PromiseUtil } from "../src";

it('withTimeout test', async function () {
    await PromiseUtil.withTimeout(async () => {
        await PromiseUtil.sleep(30e3);
        console.log(`fxxk`);
    }, 5e3);
}, 300e3);
