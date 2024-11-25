import { FlagUtil } from "../src";

it(`flag util test`, async () => {
    await FlagUtil.setFlag(`test`, `zzzz`, `false`);
    console.log(await FlagUtil.getFlag(`test`, `zzzz`));
});

it(`flag util obj`, async () => {
    let obj = [{
        name: "xxxx",
        age: 12
    }];
    let obj2 = [{
        name: "yyyy",
        age: 17
    }]
    await FlagUtil.setFlag(`obj-test`, `obj`, JSON.stringify(obj));
    await FlagUtil.setFlag(`obj-test`, `obj`, JSON.stringify(obj2));
    let value = await FlagUtil.getFlag(`obj-test`, `obj`);
    console.log(JSON.parse(value)[0].name);
});
