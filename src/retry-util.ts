import * as Bluebird from "bluebird";
import { RetryUtilException } from "./exception/retry-util-exception";
import * as log4js from "log4js";
import { Logger } from "log4js";

export class RetryUtil {

    /**
     *
     * @param cb
     * @param option max(ms), timout(ms)
     */
    public static async retry<T>(cb: () => Promise<T> | T, option: {
        max?: number;
        timeout?: number;
        interval?: number;
    } = {}): Promise<T | undefined> {
        let logger: Logger = log4js.getLogger();
        let max = 10;
        let interval = 1e3;
        if (option.timeout) {
            interval = option.interval || interval;
            max = option.timeout / interval
        } else {
            interval = option.interval || interval;
            max = option.max || max;
        }
        let err;
        for (let i = 0; i < max; i++) {
            try {
                return await cb();
            } catch (e) {
                err = e;
                logger.info("retry ignore exception:", e);
                await Bluebird.delay(interval);
            }
        }
        if (err) {
            if (option.timeout) {
                throw new RetryUtilException(`retry failed in ${option.timeout} ms`, err);
            } else {
                throw new RetryUtilException(`retry failed in ${max * interval} ms`, err);
            }
        }
    }

}
