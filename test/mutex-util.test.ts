import { MutexUtil } from "../src";

it(`mutex test`, async () => {
    setTimeout(() => {
        MutexUtil.release(`no lockUUID`);
        console.log(`release success`);
    }, 5e3);
    await MutexUtil.lock(`no lockUUID`);
    await MutexUtil.lock(`no lockUUID`);
    MutexUtil.release(`no lockUUID`);
    console.log(`fxxk mutex`);
}, 20e3);
