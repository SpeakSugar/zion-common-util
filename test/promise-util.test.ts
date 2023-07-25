import { PromiseUtil } from "../src";

it('withTimeout test', async function () {
    await PromiseUtil.withTimeout(async () => {
        await PromiseUtil.sleep(30e3);
        console.log(`fxxk`);
    }, 5e3);
}, 300e3);

it('reject/resolve test', async function () {
    async function fxxkPromise(isResolve: boolean) {
        return new Promise((resolve, reject) => {
            if (isResolve) {
                resolve('fxxk resolve')
            } else {
                reject('fxxk reject')
            }
        });
    }

    await fxxkPromise(false);
}, 300e3);
