import { JsonUtil } from "../src";

it(`json test`, () => {
    console.log(JsonUtil.format(`fsdfsfsdf` as any))
});

it(`json parse test`, () => {
    const position = "0,112";
    const [x, y] = JSON.parse(`[${position}]`).map(Number);
    console.log(`x = ${x}, y=${y}`);
});

it(`json map`, () => {
    const map = new Map();
    map.set(`fxxk`, `world`);
    console.log(map);
    console.log(JsonUtil.format(Array.from(map)));

})
