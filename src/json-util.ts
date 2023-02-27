import { JsonUtilException } from "./exception/json-util-exception";

export class JsonUtil {

    static format(value: object): string {
        try {
            return JSON.stringify(value, null, 2);
        } catch (e) {
            throw new JsonUtilException("json format object failed", e);
        }
    }

}
