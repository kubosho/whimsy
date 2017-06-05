import { window } from 'vscode'
import { colorTheme } from '../color-theme'
import { message } from '../constants'
import { timer } from '../timer'

export default async function updateInterval () {
    const option = {
        prompt: message.updateInterval,
    }
    const interval: string = await window.showInputBox(option)
    const intervalValue = Number(interval)

    if (Number.isNaN(intervalValue)) {
        return
    }

    timer.stop()
    timer.interval = intervalValue
    timer.start(() => {
        colorTheme.update(colorTheme.rand())
    })
}
