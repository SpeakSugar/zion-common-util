import { BaseException } from "./base-exception";

export class JsonUtilException extends BaseException {

    constructor(message?: any, cause?: Error) {
        super(message, cause);
    }

}
