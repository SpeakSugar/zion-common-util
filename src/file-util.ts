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

    /**
     * Example: await FileUtil.deleteFilesBefore7Days('/Users/jeffries.yu/selenium-federation-server/logs')
     * @param dir
     */
    static async deleteFilesBefore7Days(dir: string) {
        let files: string[];
        try {
            files = await fs.promises.readdir(dir);
        } catch (e) {
            files = [];
        }
        const cutoffTime = Date.now() - 7 * 24 * 60 * 60 * 1000; // 7天前的时间戳
        for (const file of files) {
            const filePath = path.join(dir, file);
            const stats = await fs.promises.stat(filePath);
            if (stats.mtime.getTime() < cutoffTime) {
                await fs.promises.rm(filePath, {
                    recursive: true,
                    force: true,
                    maxRetries: 3,
                    retryDelay: 2e3
                });
            }
        }
    }

    static async isExist(file: string): Promise<boolean> {
        try {
            await fs.promises.access(file, fs.constants.F_OK);
            return true;
        } catch (error) {
            return false;
        }
    }

}
