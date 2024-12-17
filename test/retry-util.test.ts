import { RetryUtil } from "../src";
import * as log4js from "log4js";

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

// 如果没有初始化, 就不会输出日志
it('log4js', async () => {
    log4js.getLogger().info(`xxx`);
});
