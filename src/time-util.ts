export class TimeUtil {

    public static format(timestamp: number): string {

        // 创建一个Date对象
        const date = new Date(timestamp);

        // 使用Date对象的方法来获取日期和时间
        const year = date.getFullYear();
        const month = date.getMonth() + 1; // 月份从0开始，需要加1
        const day = date.getDate();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();

        // 格式化日期和时间
        const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
        const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        return `${formattedDate} ${formattedTime}`;
    }
}
