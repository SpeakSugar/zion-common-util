import { FileUtil, NetUtil } from "../src";

it('getLocalIp', async function () {
    console.log(NetUtil.getLocalIp());
}, 30000);

it('isConnected', async function () {
    console.log(await NetUtil.isConnected(`https://www.baidu.com`));
}, 30000);
