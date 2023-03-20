import { GitHelper } from "@fxs0819/git-helper";

export class GitlabUtil {

    private gitHelper: GitHelper;

    constructor(repository: string, branch: string, token: string) {
        this.gitHelper = new GitHelper({
            provider: 'gitlab',
            repository: repository,
            branch: branch,
            config: {
                privateToken: token,
            }
        });
    }

    public async readFile(path: string): Promise<string> {
        return await this.gitHelper.readFile(path);
    }

}
