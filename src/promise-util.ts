export class PromiseUtil {

    public static sleep(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    public static async withTimeout<T>(fn: () => Promise<T>, timeout: number): Promise<T> {
        return await Promise.race([
            fn(),
            new Promise<any>((resolve) => {
                setTimeout(resolve, timeout);
            })
        ]);
    }

}
