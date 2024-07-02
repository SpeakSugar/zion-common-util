import { FileUtil } from "../src";
import { assignWith } from "lodash";
import { homedir } from "os";

it('deleteFilesBefore7Days', async function () {
    await FileUtil.deleteFilesBefore7Days('/Users/jeffries.yu/selenium-federation-server/logs');
}, 30000);

it('isExist', async function () {
    const isExist = await FileUtil.isExist('/Users/jeffries.yu/selenium-federation-server/logs/2023-04-20/mainx.log');
    console.log(isExist);
}, 30000);

it('readAndSortFiles', async function () {
    let files = await FileUtil.readAndSortFiles('/Users/jeffries.yu/Downloads');
    let fileNames = files.map(f => f.name + (f.isDirectory() ? '/' : ''));
    console.log(fileNames);
}, 30000);

it('download', async function () {
    await FileUtil.download(`https://edgedl.me.gvt1.com/edgedl/chrome/chrome-for-testing/116.0.5845.96/mac-x64/chromedriver-mac-x64.zip`, `${homedir()}/Downloads/`)
});

it('isDir', async () => {
    console.log(await FileUtil.isDir(`/Users/jeffries.yu/Downloads`));
    console.log(await FileUtil.isDir(`/Users/jeffries.yu/Downloads/JPT-00000-ej2td5so3ec/HistoryLog/2024-03-28T10:16:17.602+0800.log`));
});

it('walkDir', async () => {
    // console.log((await FileUtil.walkDir(`/Users/jeffries.yu/pii-check`)).file);
    console.log((await FileUtil.walkDir(`/Users/jeffries.yu/pii-check/10.32.47.230-JPT-2869-0-d6o09bpz5q`)).file);
});
