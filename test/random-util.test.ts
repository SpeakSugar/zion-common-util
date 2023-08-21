import { RandomUtil } from "../src";

it('uuid', function () {
    const startTime = Date.now();
    console.log(RandomUtil.uuid());
    console.log(`cost ${Date.now() - startTime} ms`); // 生成速度在 10 ms 内
});
