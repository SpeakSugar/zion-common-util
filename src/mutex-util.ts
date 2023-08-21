export class MutexUtil<K> {

    private map = new Map<K, Semaphore>();

    constructor() { }

    async lock(key: K) {
        let sempahore = this.map.get(key);
        if (!sempahore) {
            sempahore = new Semaphore(1);
            this.map.set(key, sempahore);
        }
        await sempahore.wait();
    }

    release(key: K) {
        const sempahore = this.map.get(key);
        if (!sempahore) {
            throw Error(`key: ${key} has not been locked`)
        }
        sempahore.signal();
        if (1 === sempahore.size) {
            this.map.delete(key);  // remove keyword when lock is free, or else will have memory leak
        }
    }

    getPending(key: K) {
        const sempahore = this.map.get(key);
        return sempahore ? (1 - sempahore.size) : 0;
    }

}

class Semaphore {
    queue: ((value?: any) => void)[] = [];

    constructor(public size: number) { }

    async wait() {
        if (this.size - 1 < 0) {
            await new Promise(resolve => this.queue.push(resolve));
        }
        this.size -= 1;
    }

    signal() {
        this.size += 1;
        const resolve = this.queue.shift();
        if (resolve) resolve();
    }

    async withLock<T>(fn: () => Promise<T>): Promise<T> {
        try {
            await this.wait();
            return await fn();
        } finally {
            this.signal();
        }
    }
}
