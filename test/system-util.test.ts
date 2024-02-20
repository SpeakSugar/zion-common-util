import { SystemUtil } from "../src";

it(`getPlatformVersion`, async () => {
    console.log(`${await SystemUtil.getPlatformVersion()}`);
});

it(`getElectronVersion`, async () => {
    console.log(`${await SystemUtil.getElectronVersion()}`);
});

it(`getChromeVersion`, async () => {
    console.log(`${await SystemUtil.getChromeVersion()}`);
});

it(`getSafariVersion`, async () => {
    console.log(`${await SystemUtil.getSafariVersion()} + xxx`);
});
