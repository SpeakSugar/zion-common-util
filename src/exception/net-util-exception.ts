import { BaseError } from "make-error-cause";

export class NetUtilException extends BaseError {

    constructor(message?: string, cause?: Error) {
        super(message, cause);
    }

}
