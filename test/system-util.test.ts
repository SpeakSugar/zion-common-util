import { SystemUtil } from "../src";

it(`getPlatformVersion`, async () => {
    console.log(`${await SystemUtil.getPlatformVersion()}`);
});


it(`getChromeVersion`, async () => {
    console.log(`${await SystemUtil.getChromeVersion()}`);
});

it(`getSafariVersion`, async () => {
    console.log(`${await SystemUtil.getSafariVersion()} + xxx`);
});
