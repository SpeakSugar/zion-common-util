import { SystemUtil } from "../src";
import * as si from "systeminformation";
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
    console.log('CPU 负载情况:', SystemUtil.getCpuUsage());
});

it('getDiskInfo', async () => {
    console.log(await SystemUtil.getDiskInfo());
});

it(`mem`, async () => {
    console.log('系统可用内存:', `${await SystemUtil.getAvailableMem()}`, 'G');

    const freeMemory = os.freemem();
    const freeMemoryGB = freeMemory / (1024 * 1024 * 1024);
    console.log(`系统可用内存：${freeMemoryGB.toFixed(2)} GB`);
});
