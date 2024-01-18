import { ProcessUtil } from "./process-util";
import { StringUtil } from "./string-util";

export class SystemUtil {

    static getPlatformName() {
        switch (process.platform) {
            case "win32": return "win";
            case "darwin": return "mac";
            default: return "linux";
        }
    }

    static async getArch() {
        const arch = process.arch;
        const platform = process.platform;
        if (platform == "win32") {
            try {
                let result = await ProcessUtil.exec(`wmic cpu get Name`);
                if (result.toLowerCase().includes(`arm`) || result.toLowerCase().includes(`snapdragon`)) {
                    return "arm";
                } else {
                    return "intel";
                }
            } catch (e) {
                return "intel";
            }
        } else {
            if (arch.includes("arm") || arch.includes("ia32")) {
                return "arm";
            } else {
                return "intel";
            }
        }
    }

    static async getPlatformVersion() {
        try {
            if (this.getPlatformName() == `mac`) {
                const result = await ProcessUtil.exec(`sw_vers`);
                let osVersion = result.split(`\n`).find(x => x.includes(`ProductVersion:`))!
                osVersion = osVersion.replace('ProductVersion:', '').trim();
                return osVersion;
            }
            if (this.getPlatformName() == `win`) {
                const result = await ProcessUtil.exec(`systeminfo | findstr /B /C:\"OS Name\"`);
                return result.replace(`OS Name`, ``);
            }
        } catch (e) {
            return `unknown`;
        }
        return `unsupported os: ${this.getPlatformName()}`;
    }

    static async currentUser() {
        let result = await ProcessUtil.exec(`echo $HOME`);
        return StringUtil.substringFromLastChar(result, '/').replace('\n', ``);
    }

}
