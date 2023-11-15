import { RetryUtil } from "../src";

it('retry test', async () => {
    const p = new Promise<void>(resolve => setTimeout(() => {
        console.log(`promise timeout`);
        resolve();
    }, 5e3));
    // 如果这样写, 会先打印 end, 再打印 promise timeout
    await RetryUtil.retry( () => {
        void p
    });
    console.log(`end`);
});
