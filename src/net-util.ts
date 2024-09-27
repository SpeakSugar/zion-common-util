import { NetworkInterfaceInfo } from "os";
import * as os from "os";
import { NetUtilException } from "./exception/net-util-exception";
import { AxiosUtil } from "./axios-util";
import * as Bluebird from "bluebird";

export class NetUtil {

    static async isConnected(url: string | string[]): Promise<boolean> {
        if (typeof url == "string") {
            try {
                const status = (await AxiosUtil.request({
                    url: url,
                    method: 'GET',
                })).status;
                return status == 200;
            } catch (e) {
                return false;
            }
        } else {
            const results = await Bluebird.map(url, async it => {
                try {
                    const status = (await AxiosUtil.request({
                        url: it,
                        method: 'GET',
                    })).status;
                    return status == 200;
                } catch (e) {
                    return false;
                }
            });
            return results.some(result => result);
        }
    }

    static getLocalIp(): string {
        let interfaces: NodeJS.Dict<NetworkInterfaceInfo[]> = os.networkInterfaces()
        for (let key in interfaces) {
            let interfaceValue: NetworkInterfaceInfo[] = interfaces[key]!
            for (let i = 0; i < interfaceValue.length; i++) {
                let { family, address, internal } = interfaceValue[i]
                // @ts-ignore
                if ((family === 4 || family === "IPv4")&& address !== '127.0.0.1' && !internal) {
                    return address
                }
            }
        }
        throw new NetUtilException(`can't find local ip, please check your network is connected`);
    }

}
