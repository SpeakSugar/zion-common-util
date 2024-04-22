import * as os from "os";
import * as path from "path";
import * as fs from "fs";
import * as _ from "lodash";
import { FileUtil } from "./file-util";
import { JsonUtil } from "./json-util";

export class FlagUtil {

    public static async setFlag(fileName: string, key: string, value: string) {
        const destDir = path.join(os.homedir(), `.config`);
        if (!await FileUtil.isExist(destDir)) {
            await fs.promises.mkdir(destDir, { recursive: true })
        }
        const jsonFilePath = path.join(destDir, `${fileName}.json`);
        if (await FileUtil.isExist(jsonFilePath)) {
            const objA = JSON.parse(await fs.promises.readFile(jsonFilePath, { encoding: 'utf-8' }));
            const objB = { [key]: value };
            await fs.promises.writeFile(jsonFilePath, JsonUtil.format(_.merge(objA, objB)));
        } else {
            const obj = { [key]: value };
            await fs.promises.writeFile(jsonFilePath, JsonUtil.format(obj));
        }
    }

    public static async getFlag(fileName: string, key: string) {
        const destDir = path.join(os.homedir(), `.config`);
        const jsonFilePath = path.join(destDir, `${fileName}.json`);
        if (await FileUtil.isExist(jsonFilePath)) {
            const obj = JSON.parse(await fs.promises.readFile(jsonFilePath, { encoding: 'utf-8' }));
            return obj[key];
        } else {
            throw new Error(`${jsonFilePath} is not exist`);
        }
    }
}
