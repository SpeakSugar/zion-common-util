import { BaseException } from "./base-exception";

export class RetryUtilException extends BaseException {

    constructor(message?: any, cause?: Error) {
        super(message, cause);
    }

}
