export class Timer {
    private _id: NodeJS.Timer;

    private _delay = 1000 * 60 * 30;
    private _interval: number;

    set delay(milliseconds: number) {
        this._delay = milliseconds;
    }

    set interval(milliseconds: number) {
        this._interval = milliseconds;
    }

    start(callback: () => void): void {
        if (this._interval) {
            this._id = setInterval(callback, this._interval);
            return;
        }

        this._id = setTimeout(callback, this._delay);
    }

    stop(): void {
        this._interval ? clearInterval(this._id) : clearTimeout(this._id);
        this._id = null;
    }
}
