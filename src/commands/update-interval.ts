import {
    window,
    workspace,
} from 'vscode'
import { colorTheme } from '../color-theme'
import { message } from '../constants'
import { timer } from '../timer'
import { whimsyConfig } from '../config'

export default async function updateInterval () {
    const option = {
        prompt: message.updateInterval,
    }
    const interval: string = await window.showInputBox(option)
    const intervalValue = Number(interval)

    if (Number.isNaN(intervalValue)) {
        return
    }

    whimsyConfig().update('interval', intervalValue, true)

    timer.stop()
    timer.start(() => {
        colorTheme.update(colorTheme.rand())
    })
}
