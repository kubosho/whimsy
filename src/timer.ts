class Timer {
    private _id: NodeJS.Timer
    private _interval = 1000 * 60 * 30

    set interval(milliseconds: number) {
        this._interval = milliseconds
    }

    start(callback: () => void): void {
        this._id = setInterval(callback, this._interval)
    }

    stop(): void {
        clearInterval(this._id)
        this._id = null
    }
}

export const timer = new Timer()
