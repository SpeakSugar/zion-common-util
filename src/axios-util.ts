import axios, { AxiosRequestConfig } from "axios";
import Errlop from "errlop";

export class AxiosUtil {

    public static async request(config: AxiosRequestConfig): Promise<any> {
        try {
            return await axios.request(config);
        } catch (e) {
            if (e.response) {
                throw new Errlop(`${e.response.data}`, e);
            } else {
                throw new Errlop(e);
            }
        }
    }

}