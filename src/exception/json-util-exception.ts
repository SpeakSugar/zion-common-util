import Errlop from "errlop";

export class JsonUtilException extends Errlop {

    constructor(message?: any, cause?: Error) {
        super(message, cause);
    }

}
