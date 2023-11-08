import { MutexUtil } from "../src";

it(`mutex test`, async () => {
    setTimeout(() => {
        MutexUtil.release(`no lockUUID`);
        console.log(`release success`);
    }, 5e3);
    await MutexUtil.lock(`no lockUUID`);
    console.log(MutexUtil['map']);
    await MutexUtil.lock(`no lockUUID`);

    // ==== wait 5s ====
    console.log(`fxxk mutex`);
    MutexUtil.release(`no lockUUID`);
    console.log(MutexUtil['map']);
}, 20e3);
