import { ProcessUtil } from "./process-util";
import { StringUtil } from "./string-util";
import * as _ from "lodash";
import * as os from "os";
import * as si from "systeminformation";

export class CpuInfo {
    length!: number
    model!: string
}

export class MemInfo {
    total!: number
}

export class DiskInfo {
    total!: number
}

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
                let result = await ProcessUtil.exec(`powershell -Command "Get-CimInstance -ClassName Win32_Processor | Select-Object -Property Name"`);
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

    static getCpuInfo(): CpuInfo {
        const cpus = os.cpus();
        return {
            length: cpus.length,
            model: cpus[0].model,
        };
    }

    static async getCpuUsage(): Promise<string> {
        if (this.getPlatformName() == `win`) {
            const stdout = await ProcessUtil.exec(`powershell -Command "Get-CimInstance -ClassName Win32_Processor | Select-Object -Property LoadPercentage"`);
            const result = parseInt(stdout.split(`\n`)?.[3].trim());
            if (result) {
                return (result / 100).toFixed(2);
            } else {
                return Number(0).toFixed(2);
            }
        } else {
            const stdout = await ProcessUtil.exec(`top -l 1 | grep "CPU usage"`);
            const match = stdout.match(/\d+(\.\d+)?%/);
            return (parseFloat(match![0]) / 100).toFixed(2);
        }
    }

    static async getAvailableMem() {
        const mem = await si.mem();
        const availableMemGB = mem.available / (1024 * 1024 * 1024);
        return availableMemGB.toFixed(2);
    }

    static async getDiskInfo(): Promise<DiskInfo | string> {
        try {
            if (this.getPlatformName() == `mac`) {
                const result = await ProcessUtil.exec(`diskutil info / | grep "Total Space"`);
                const match = result.match(new RegExp(/\d+(\.\d+)?\s(GB|TB)/))!
                if (match[0].includes(`TB`)) {
                    return { total: parseInt(match[0].replace(`TB`, ``)) * 1024 };
                } else {
                    return { total: parseInt(match[0].replace(`GB`, ``)) };
                }

            }
            if (this.getPlatformName() == `win`) {
                const result = await ProcessUtil.exec(`powershell -Command "Get-CimInstance -ClassName Win32_LogicalDisk | Select-Object -Property Size"`);
                const lines = result.trim().split(`\n`);
                let totalSize = 0;
                for (let i = 1; i < lines.length; i++) {
                    const size = parseInt(lines[i].trim());
                    if (!isNaN(size)) {
                        totalSize += size;
                    }
                }
                return {
                    total: Math.round(totalSize / (1024 * 1024 * 1024))
                }
            }
        } catch (e) {
            return `get disk info exception`;
        }
        return `unsupported os: ${this.getPlatformName()}`;
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
                return result.replace(`OS Name:`, ``).trim();
            }
        } catch (e) {
            return `get platform version exception`;
        }
        return `unsupported os: ${this.getPlatformName()}`;
    }

    static async currentUser() {
        let result = await ProcessUtil.exec(`echo $HOME`);
        return StringUtil.substringFromLastChar(result, '/').replace('\n', ``);
    }

    static async getChromeVersion() {
        try {
            if (this.getPlatformName() == `mac`) {
                const result = await ProcessUtil.exec(`'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome' --version`);
                return result.trim().substring("Google Chrome".length).trim();
            }
            if (this.getPlatformName() == `win`) {
                let result = await ProcessUtil.exec(`powershell -Command \"Get-CimInstance CIM_DataFile -Filter \\\"Name='C:\\\\Program Files\\\\Google\\\\Chrome\\\\Application\\\\chrome.exe'\\\" | Select-Object Version\"`);
                if (_.isEmpty(result?.trim())) {
                    result = await ProcessUtil.exec(`powershell -Command \"Get-CimInstance CIM_DataFile -Filter \\\"Name='C:\\\\Program Files (x86)\\\\Google\\\\Chrome\\\\Application\\\\chrome.exe'\\\" | Select-Object Version\"`);
                }
                return result.split(`\n`)?.[3].trim();
            }
        } catch (e) {
            return `get chrome version exception`;
        }
        return `unsupported os: ${this.getPlatformName()}`;
    }

    static async getChromeBetaVersion() {
        try {
            if (this.getPlatformName() == `mac`) {
                const result = await ProcessUtil.exec(`'/Applications/Google Chrome Beta.app/Contents/MacOS/Google Chrome Beta' --version`);
                return result.trim().substring("Google Chrome".length).trim();
            }
            if (this.getPlatformName() == `win`) {
                let result = await ProcessUtil.exec(`powershell -Command \"Get-CimInstance CIM_DataFile -Filter \\\"Name='C:\\\\Program Files\\\\Google\\\\Chrome Beta\\\\Application\\\\chrome.exe'\\\" | Select-Object Version\"`);
                if (_.isEmpty(result?.trim())) {
                    result = await ProcessUtil.exec(`powershell -Command \"Get-CimInstance CIM_DataFile -Filter \\\"Name='C:\\\\Program Files (x86)\\\\Google\\\\Chrome Beta\\\\Application\\\\chrome.exe'\\\" | Select-Object Version\"`);
                }
                return result.split(`\n`)?.[3].trim();
            }
        } catch (e) {
            return `get chrome beta version exception`;
        }
        return `unsupported os: ${this.getPlatformName()}`;
    }

    static async getEdgeVersion() {
        try {
            if (this.getPlatformName() == `mac`) {
                const result = await ProcessUtil.exec(`'/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge' --version`);
                return result.trim().substring("Microsoft Edge".length).trim();
            }
            if (this.getPlatformName() == `win`) {
                let result = await ProcessUtil.exec(`reg query "HKEY_CURRENT_USER\\Software\\Microsoft\\Edge\\BLBeacon" /v version`);
                return result.match(new RegExp(/\d+\.\d+\.\d+\.\d+/))![0]
            }
        } catch (e) {
            return `get edge version exception`;
        }
        return `unsupported os: ${this.getPlatformName()}`;
    }

    static async getElectronVersion() {
        try {
            if (this.getPlatformName() == `mac`) {
                return (await ProcessUtil.exec(`/usr/libexec/PlistBuddy -c "Print :CFBundleShortVersionString" /Applications/RingCentral.app/Contents/Info.plist`)).trim();
            }
            if (this.getPlatformName() == `win`) {
                let result = await ProcessUtil.exec(`powershell -Command \"Get-CimInstance CIM_DataFile -Filter \\\"Name='C:\\\\Program Files\\\\RingCentral\\\\RingCentral.exe'\\\" | Select-Object Version\"`);
                if (_.isEmpty(result?.trim())) {
                    result = await ProcessUtil.exec(`powershell -Command \"Get-CimInstance CIM_DataFile -Filter \\\"Name='C:\\\\Program Files (x86)\\\\RingCentral\\\\RingCentral.exe'\\\" | Select-Object Version\"`);
                }
                return result.split(`\n`)?.[3].trim();
            }
        } catch (e) {
            return `get electron version exception`;
        }
        return `unsupported os: ${this.getPlatformName()}`;
    }

    static async getFirefoxVersion() {
        try {
            if (this.getPlatformName() == `mac`) {
                const result = await ProcessUtil.exec(`'/Applications/Firefox.app/Contents/MacOS/firefox' --version`);
                return result.trim().substring("Mozilla Firefox".length).trim();
            }
            if (this.getPlatformName() == `win`) {
                let result = await ProcessUtil.exec(`powershell -Command \"Get-CimInstance CIM_DataFile -Filter \\\"Name='C:\\\\Program Files\\\\Mozilla Firefox\\\\firefox.exe'\\\" | Select-Object Version\"`);
                if (_.isEmpty(result?.trim())) {
                    result = await ProcessUtil.exec(`powershell -Command \"Get-CimInstance CIM_DataFile -Filter \\\"Name='C:\\\\Program Files (x86)\\\\Mozilla Firefox\\\\firefox.exe'\\\" | Select-Object Version\"`);
                }
                return result.split(`\n`)?.[3].trim();
            }
        } catch (e) {
            return `get firefox version exception`;
        }
        return `unsupported os: ${this.getPlatformName()}`;
    }

    static async getSafariVersion() {
        if (this.getPlatformName() == `mac`) {
            return (await ProcessUtil.exec(`defaults read /Applications/Safari.app/Contents/Info.plist CFBundleShortVersionString`)).trim();
        }
        return `unsupported os: ${this.getPlatformName()}`;
    }

}
