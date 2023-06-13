import { ProcessUtil } from "../src";

it('process util test', async function () {
    let stdout = await ProcessUtil.exec(`curl -s -o /Users/jeffries.yu/Downloads/rc.pkg https://electron.fiji.gliprc.com/downloads-all/stage/23.2.20/rc/7237-stage-23-2-20-noupdate-52d7d2d6a/for-downloading/RingCentral-23.2.20-7237-noupdate-mac-x64.pkg`);
    console.log(stdout);
}, 400e3);
