import { FileUtil } from "../src";

it('deleteFilesBefore7Days util test', async function () {
    FileUtil.deleteFilesBefore7Days('/Users/jeffries.yu/selenium-federation-server/logs');
}, 30000);