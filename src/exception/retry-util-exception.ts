import Errlop from "errlop";

export class RetryUtilException extends Errlop {

    constructor(message?: any, cause?: Error) {
        super(message, cause);
    }

}
