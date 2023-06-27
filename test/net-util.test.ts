import { FileUtil, NetUtil } from "../src";

it('getLocalIp', async function () {
    console.log(NetUtil.getLocalIp());
}, 30000);
