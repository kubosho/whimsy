import {
    window,
    workspace,
} from 'vscode'
import { colorTheme } from '../color-theme'
import { message } from '../constants'
import { timer } from '../timer'
import { whimsyConfig } from '../config'
import convertMilliseconds from '../utils/convert-milliseconds'

export default async function updateInterval () {
    const option = {
        prompt: message.updateInterval,
    }
    const interval: string = await window.showInputBox(option)

    if (!Number.isNaN(Number(interval))) {
        return
    }

    whimsyConfig().update('interval', interval, true)

    timer.stop()
    timer.start(() => {
        colorTheme.update(colorTheme.rand())
    })
}
