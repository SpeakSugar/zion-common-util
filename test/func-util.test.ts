import { JsonUtil } from "../src";

it(`undefined test`, () => {
    const s: any = undefined;
    const arr = [];
    // @ts-ignore
    arr.push({}.xxx)
    console.log(JsonUtil.format(arr));
})
