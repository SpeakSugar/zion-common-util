export class FuncUtil {

    public static async ignoreError<T>(cb: () => Promise<T> | T): Promise<T> {
        try {
            return await cb();
        } catch (e) {
            return undefined as any;
        }
    }

}
