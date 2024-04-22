import { FlagUtil } from "../src";

it(`flag util test`, async () => {
    await FlagUtil.setFlag(`test`, `zzzz`, `false`);
    console.log(await FlagUtil.getFlag(`test`, `zzzz`));
});
