import { BaseException } from "./base-exception";

export class FileUtilException extends BaseException {

    constructor(input?: any, cause?: Error) {
        super(input, cause);
    }

}
