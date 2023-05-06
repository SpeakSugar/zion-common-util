import Errlop from "errlop";

export class PathUtilException extends Errlop {

    constructor(message?: any, cause?: Error) {
        super(message, cause);
    }
}
