import Errlop from "errlop";

export class NetUtilException extends Errlop {

    constructor(message?: any, cause?: Error) {
        super(message, cause);
    }

}
