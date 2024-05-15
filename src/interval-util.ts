export class IntervalUtil {

    private static timers: NodeJS.Timer[] = [];

    public static addInterval<TArgs extends any[]>(callback: (...args: TArgs) => void, ms?: number, ...args: TArgs): NodeJS.Timer {
        const timer = setInterval(callback, ms, ...args);
        this.timers.push(timer);
        return timer;
    }

    public static clearIntervals() {
        this.timers.forEach(timer => {
            clearInterval(timer);
        });
    }

}
