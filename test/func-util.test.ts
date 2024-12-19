import { JsonUtil } from "../src";
import { PromiseUtil } from "../src";

it(`undefined test`, () => {
    const s: any = undefined;
    const arr = [];
    // @ts-ignore
    arr.push({}.xxx)
    console.log(JsonUtil.format(arr));
})

it(`await debug`, async () => {
    async function asyncF() {
        console.log(`fxxk`);
        await PromiseUtil.sleep(1);
        console.log(`sxxt`);
    }

    await asyncF();
})

it(`this test`, () => {
    function xxx() {
        // @ts-ignore
        console.log(this.xiaoming);
    }

    xxx();
})
