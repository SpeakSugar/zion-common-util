export class RandomUtil {

    public static uuid(): string {
        return Math.random().toString(36).slice(2);
    }

}
