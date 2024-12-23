import { StringUtil } from "../src/string-util";

it('string util test', async function () {
    let s = StringUtil.substringFromLastChar("./drivers/win/chromedriver", "/");
    console.log(s)
}, 30000);

it('substringToFirstChar', async function () {
    let s = StringUtil.substringToFirstChar("iuuccicon", "icon");
    console.log(s)
}, 30000);

it('regex test', function () {
    const text = "some text with numbers 123 and 456";
    const regex = / [0-9]+/g;
    const matches = text.match(regex);

    if (matches) {
        console.log(matches); // 输出 [" 123", " 456"]
    } else {
        console.log("No matches found");
    }
});
