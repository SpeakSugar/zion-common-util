import { BaseError } from "make-error-cause";

export class PathUtilException extends BaseError {

    constructor(message?: string, cause?: Error) {
        super(message, cause);
    }

}
