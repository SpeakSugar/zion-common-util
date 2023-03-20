import { GitlabUtil } from "../src/gitlab-util";

it('gitlab util test', async function () {
    let gitlabUtil = new GitlabUtil('https://git.ringcentral.com/circus/machine-config.git', 'main', 'XDU9tUuV1cQ_6yzY6UKb');
    let result = await gitlabUtil.readFile('base-info/jupiter-video-machines.json');
    console.table(JSON.parse(result));
}, 30000);
