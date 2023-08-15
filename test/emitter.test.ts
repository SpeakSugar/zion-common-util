import * as EventEmitter from "events";
import { PromiseUtil } from "../src";

it('emitter', function (done) {
    let eventEmitter = new EventEmitter();
    eventEmitter.on(`event`, async () => {
        await PromiseUtil.sleep(5e3);
        console.log(`event trigger`);
        done();
    });
    eventEmitter.emit(`event`);
}, 10e3);
