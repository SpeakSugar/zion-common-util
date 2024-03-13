import { SystemUtil } from "../src";
import * as os from "os";

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

it(`cpu`, async () => {
    console.log(SystemUtil.getCpuInfo());
});

it('getDiskInfo', async () => {
    console.log(await SystemUtil.getDiskInfo());
});
