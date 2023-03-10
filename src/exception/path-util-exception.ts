import { BaseException } from "./base-exception";

export class PathUtilException extends BaseException {

    constructor(message?: any, cause?: Error) {
        super(message, cause);
    }
}
