import Errlop from "errlop";

export class ProcessUtilException extends Errlop {

    constructor(message?: any, cause?: Error) {
        super(message, cause);
    }

}
