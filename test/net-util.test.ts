import { FileUtil, NetUtil } from "../src";

it('getLocalIp', async function () {
    console.log(NetUtil.getLocalIp());
}, 30000);

it('isConnected', async function () {
    console.log(await NetUtil.isConnected(`https://www.baidu.com`));
}, 30000);

it('url', async function () {
    const url = new URL(`http://127.0.0.1:4444/wd/hub`);
    console.log(url.origin);
}, 30000);
