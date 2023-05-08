import { FileUtil } from "../src";

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
