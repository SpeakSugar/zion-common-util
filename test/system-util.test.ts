import { SystemUtil } from "../src";

it(`getPlatformVersion`, async () => {
    console.log(`${await SystemUtil.getPlatformVersion()}`);
});
