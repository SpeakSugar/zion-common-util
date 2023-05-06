import Errlop from "errlop";

export class FileUtilException extends Errlop {

    constructor(input?: any, cause?: Error) {
        super(input, cause);
    }

}
