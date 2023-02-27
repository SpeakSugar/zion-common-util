import { BaseError, fullStack } from "make-error-cause";

export class JsonUtilException extends BaseError {

    constructor(message?: string, cause?: Error) {
        super(message, cause);
    }

}
