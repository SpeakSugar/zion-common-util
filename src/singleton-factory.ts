export class SingletonFactory {

    private static instanceMap: Map<string, Object> = new Map<string, Object>();

    public static getInstance<T>(ctor: new(...args: any[]) => T, ...args: any[]): T {
        let instance = this.instanceMap.get(`${ctor.name}`);
        if (!instance) {
            instance = new ctor(args);
            this.instanceMap.set(`${ctor.name}`, instance);
        }
        return instance as T;
    }
}
