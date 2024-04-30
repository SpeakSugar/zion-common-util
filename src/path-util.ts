import * as path from "path";
import { PathUtilException } from "./exception/path-util-exception";
import { homedir } from "os";

export class PathUtil {

    public static rootPath: string

    public static initRootPath(path: string) {
        this.rootPath = path;
    }

    /**
     * Example: PathUtil.initRootPath("/Users/rcadmin");
     *          "/Users/rcadmin/test" = PathUtil.getAbsolutePath("./test");
     * @param relativePath
     */
    public static getAbsolutePath(relativePath: string): string {
        if (!this.rootPath) {
            throw new PathUtilException("please init rootPath first")
        }
        return path.resolve(this.rootPath, relativePath);
    }

    /**
     * Example: `/Users/admin/test` = parseToPath(`/$HOME/test`)
     * @param params
     */
    public static parseToPath(params: string): string {
        if (!params) {
            return ''
        }
        if (params.includes(`$HOME`)) {
            params = params.replace(`$HOME`, `${homedir}`);
        }
        return path.resolve(params);
    }

}
