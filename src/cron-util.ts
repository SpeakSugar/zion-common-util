import * as cron from "node-cron";

export class CronUtil {

    private static tasks: cron.ScheduledTask[] = [];

    public static schedule(cronExpression: string, callback: () => void) {
        const task = cron.schedule(cronExpression, callback);
        this.tasks.push(task);
        return task;
    }

    public static stop() {
        this.tasks.forEach(task => {
            task.stop();
        });
    }
}
