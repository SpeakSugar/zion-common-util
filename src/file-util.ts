import * as fs from "fs";
import * as path from "path";
import { AxiosUtil } from "./axios-util";
import { FuncUtil } from "./func-util";
import { PathUtil } from "./path-util";

export class FileUtil {

    /**
     * Example: "/User/downloads/xxx.exe" = await FileUtil.download("https://xxx/download/xxx.exe", "/User/downloads")
     * @param url
     * @param dir
     * @param timeout
     * @return destPath
     */
    static async download(url: string, dir: string, timeout: number = 30e3): Promise<string> {
        let axiosResponse = await AxiosUtil.request({
            url: url,
            method: "GET",
            responseType: "stream",
            timeout
        });
        dir = PathUtil.parseToPath(dir);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }
        let destPath = `${dir}/${url.substring(
            url.lastIndexOf("\/"), url.length
        )}`;
        return new Promise((resolve, reject) => {
            const timeoutId = setTimeout(() => {
                error = new Error(`Download of ${url} 120s timed out`);
                writer.close();
                reject(error);
            }, 120e3);

            const writer = fs.createWriteStream(destPath);
            axiosResponse.data.pipe(writer, { end: true });
            let error: Error;
            axiosResponse.data.on(`error`, (err: Error) => {
                error = err;
                writer.close();
                clearTimeout(timeoutId);
                reject(err);
            })
            writer.on('error', err => {
                error = err;
                writer.close();
                clearTimeout(timeoutId);
                reject(err);
            });
            writer.on('close', () => {
                clearTimeout(timeoutId);
                if (!error) {
                    console.log(`\n> download ${url} to\n ${path.resolve(dir)} success\n`);
                    resolve(destPath);
                } else {
                    reject(error);
                }
            });
        });
    }

    /**
     * Example: await FileUtil.deleteFilesBeforeNDays('/Users/jeffries.yu/selenium-federation-server/logs')
     * @param dir
     * @param days
     */
    static async deleteFilesBeforeNDays(dir: string, days: number = 7) {
        let files: string[];
        try {
            files = await fs.promises.readdir(dir);
        } catch (e) {
            files = [];
        }
        const cutoffTime = Date.now() - days * 24 * 60 * 60 * 1000; // 7天前的时间戳
        for (const file of files) {
            const filePath = path.join(dir, file);
            const stats = await fs.promises.stat(filePath);
            if (stats.mtime.getTime() < cutoffTime) {
                await FuncUtil.ignoreError(async () => await fs.promises.rm(filePath, {
                    recursive: true,
                    force: true,
                    maxRetries: 3,
                    retryDelay: 2e3
                }));
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

    /**
     * read files from dir, order by create time, 这是一个不递归的方法
     * @param dir
     */
    static async readAndSortFiles(dir: string): Promise<fs.Dirent[]> {
        const files = await fs.promises.readdir(dir, { withFileTypes: true });
        const fileStats = await Promise.all(files.map(file => {
            const filepath = path.join(dir, file.name);
            return fs.promises.stat(filepath).then(stats => ({
                file,
                createdTime: stats.birthtimeMs
            }));
        }));
        const sortedFiles = fileStats.sort((a, b) => b.createdTime - a.createdTime);
        return sortedFiles.map(file => file.file);
    }

    static async isDir(path: string): Promise<boolean> {
        const stat = await fs.promises.lstat(path);
        return stat.isDirectory();
    }

    static async walkDir(dir: string,
                             destDepth: number | undefined = undefined,
                             curDepth: number = 1,
                             _path: { file: string[]; dir: string[] } = { file: [], dir: [] }): Promise<{ file: string[]; dir: string[] }> {
        const files = await fs.promises.readdir(dir);
        for (const file of files) {
            const filePath = path.join(dir, file);
            const stats = await fs.promises.lstat(filePath);
            if (stats.isDirectory()) {
                _path.dir.push(filePath);
                if ((destDepth != undefined && curDepth < destDepth) || destDepth == undefined) {
                    await FileUtil.walkDir(filePath, destDepth, curDepth + 1, _path); // 递归遍历子目录，深度加一
                }
            } else {
                _path.file.push(filePath);
            }
        }
        return _path;
    }
}
