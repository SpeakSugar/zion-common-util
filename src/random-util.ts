export class RandomUtil {

    public static uuid(): string {
        return Math.random().toString(36).slice(2);
    }

    public static number(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

}
