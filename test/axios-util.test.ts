import { AxiosUtil } from "../src";
import * as fs from "fs";
import * as FormData from "form-data";
import * as path from "path";

it('request', async function () {
    const data = (await AxiosUtil.request({
        url: `http://127.0.0.1:7777/cmd`,
        method: 'post',
        data: { cmd: `sf --version` },
    })).data;

    console.log(data);
});

it('request file', async () => {
    const filePath = `/Users/jeffries.yu/IdeaProjects/zion-py-lib/src/main.py`;
    const fileName = path.basename(filePath);
    const fileData = fs.readFileSync(filePath);
    const formData = new FormData();
    formData.append('file', fileData, fileName);
    await AxiosUtil.request({
        url: `http://127.0.0.1:7777/file`,
        method: 'post',
        headers: { ...formData.getHeaders() },
        data: formData
    });
}, 600e3);
