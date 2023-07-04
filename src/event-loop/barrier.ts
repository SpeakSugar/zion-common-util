export class Barrier {
    private _isOpen: boolean;
    private readonly _promise: Promise<boolean>;
    private _completePromise!: (v: boolean) => void;

    constructor() {
        this._isOpen = false;
        this._promise = new Promise<boolean>(resolve => {
            this._completePromise = resolve;
        });
    }

    isOpen(): boolean {
        return this._isOpen;
    }

    open(): void {
        this._isOpen = true;
        this._completePromise(true);
    }

    wait(): Promise<boolean> {
        if (this._isOpen) {
            return Promise.resolve(true);
        }
        return this._promise;
    }
}
