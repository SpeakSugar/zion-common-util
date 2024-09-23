import { CronJob } from "cron";

export class CronUtil {

    private static tasks: CronJob[] = [];

    public static schedule(cronExpression: string, callback: () => void) {
        const task = new CronJob(
            cronExpression,
            callback,
            null,
            true,
            'Asia/Shanghai'
        )

        this.tasks.push(task);
        return task;
    }

    public static stop() {
        this.tasks.forEach(task => {
            task.stop();
        });
    }
}
