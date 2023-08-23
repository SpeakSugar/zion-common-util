import { AxiosUtil } from "../src/axios-util";

it('request', async function () {
    const data = (await AxiosUtil.request({
        url: `http://10.32.59.112:7777/cmd`,
        method: 'post',
        data: { cmd: `sf --version` },
    })).data;

    console.log(data);
});
