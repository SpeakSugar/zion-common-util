import { StringUtil } from "../src/string-util";

it('string util test', async function () {
    let s = StringUtil.substringFromLastChar("./drivers/win/chromedriver", "/");
    console.log(s)
}, 30000);
