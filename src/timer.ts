import { whimsyConfig } from './config'
import convertMilliseconds from './utils/convert-milliseconds'

class Timer {
    private _id: NodeJS.Timer

    start(callback: () => void): void {
        const interval = convertMilliseconds(whimsyConfig().get('interval'))
        this._id = setInterval(callback, interval)
    }

    stop(): void {
        clearInterval(this._id)
        this._id = null
    }
}

export const timer = new Timer()
