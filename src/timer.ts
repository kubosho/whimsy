import { whimsyConfig } from './config'

class Timer {
    private _id: NodeJS.Timer

    start(callback: () => void): void {
        this._id = setInterval(callback, whimsyConfig().get('interval'))
    }

    stop(): void {
        clearInterval(this._id)
        this._id = null
    }
}

export const timer = new Timer()
