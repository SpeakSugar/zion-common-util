import * as path from "path";
import { PathUtilException } from "./exception/path-util-exception";

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

}
