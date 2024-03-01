import axios, { AxiosRequestConfig } from "axios";
import Errlop from "errlop";
import { JsonUtil } from "./json-util";

export class AxiosUtil {

    public static async request(config: AxiosRequestConfig): Promise<any> {
        try {
            config.timeout = config.timeout ? config.timeout : 300e3;
            return await axios.request(config);
        } catch (e) {
            if (e.response) {
                throw new Errlop(`${JsonUtil.format(e.response.data)}`, e);
            } else {
                throw new Errlop(e);
            }
        }
    }

}
