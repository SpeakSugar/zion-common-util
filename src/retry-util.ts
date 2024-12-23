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
    } = {}): Promise<T> {
        const logger: Logger = log4js.getLogger();
        const interval = option.interval || 1e3;
        const startTime = Date.now();
        
        // 使用 timeout 或 max 控制重试
        const isTimeoutMode = !!option.timeout;
        const max = isTimeoutMode ? Number.MAX_SAFE_INTEGER : (option.max || 10);

        let err;
        for (let i = 0; i < max; i++) {
            try {
                return await cb();
            } catch (e) {
                err = e;
                logger.info("retry ignore exception:", e);
                
                // 在 timeout 模式下检查是否超时
                if (isTimeoutMode && (Date.now() - startTime > option.timeout!)) {
                    break;
                }
                
                await Bluebird.delay(interval);
            }
        }
        
        if (err) {
            const actualTime = Date.now() - startTime;
            throw new RetryUtilException(
                isTimeoutMode
                    ? `retry failed in ${actualTime} ms (timeout: ${option.timeout} ms)`
                    : `retry failed in ${actualTime} ms (max attempts: ${max})`,
                err
            );
        }
        
        throw new RetryUtilException('Unexpected state: no error but no success either');
    }
}
