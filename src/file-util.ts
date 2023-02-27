import axios from "axios";
import * as fs from "fs";
import * as path from "path";

export class FileUtil {

    /**
     * Example: "/User/downloads/xxx.exe" = await FileUtil.download("https://xxx/download/xxx.exe", "/User/downloads")
     * @param url
     * @param dir
     * @return destPath
     */
    static async download(url: string, dir: string): Promise<string> {
        let axiosResponse = await axios.get(url, { responseType: "stream" });
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }
        let destPath = `${dir}/${url.substring(
            url.lastIndexOf("\/"), url.length
        )}`;
        return new Promise((resolve, reject) => {
            const writer = fs.createWriteStream(destPath);
            axiosResponse.data.pipe(writer, { end: true });
            let error: Error;
            writer.on('error', err => {
                error = err;
                writer.close();
                reject(err);
            });
            writer.on('close', () => {
                if (!error) {
                    console.log(`\n> download ${url} to\n ${path.resolve(dir)} success\n`);
                    resolve(destPath);
                }
            });
        });
    }

}
