import { BaseException } from "./base-exception";

export class NetUtilException extends BaseException {

    constructor(message?: any, cause?: Error) {
        super(message, cause);
    }

}
