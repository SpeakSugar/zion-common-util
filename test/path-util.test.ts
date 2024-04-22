import { PathUtil } from "../src";
import * as path from "path";
import * as os from "os";

it('path util test', async function () {
    PathUtil.getAbsolutePath("");
}, 30000);

it('path join', () => {
    console.log(path.join(os.homedir(), `.config`));
    console.log(path.resolve(os.homedir(), `.config`));
});
