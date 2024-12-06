import * as moment from "moment-timezone";

export class TimeUtil {

    public static format(timestamp: number, tz: string = `Asia/Shanghai`): string {
        return moment(timestamp).tz(tz).format('YYYY-MM-DD HH:mm:ss');
    }

    public static getStampRangeBeforeNDays(days: number, tz: string = `Asia/Shanghai`) {
        const startOfDay = moment.tz(tz).subtract(days, 'days').startOf('day');
        const endOfDay = moment.tz(tz).subtract(days, 'days').endOf('day');
        const startTimestamp = startOfDay.valueOf();
        const endTimestamp = endOfDay.valueOf();
        return {
            startTimestamp, endTimestamp
        }
    }
}
