'use strict'

import { colorTheme } from './color-theme'
import { timer } from './timer'
import {
    ExtensionContext,
    commands,
    window,
} from 'vscode'

export function activate(context: ExtensionContext) {
    const start = commands.registerCommand('extension.start', () => {
        timer.start(() => {
            colorTheme.update(colorTheme.rand())
        })
    })

    const stop = commands.registerCommand('extension.stop', () => {
        timer.stop()
    })

    const updateInterval = commands.registerCommand('extension.updateInterval', async () => {
        const option = {
            prompt: 'Enter the time interval for change color theme. The unit is milliseconds.',
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
    })

    const updateThemeList = commands.registerCommand('extension.updateThemeList', async () => {
        const option = {
            prompt: 'Enter theme names separated with commas.',
        }
        const themes: string = await window.showInputBox(option)

        colorTheme.themes = themes
            .split(',')
            .map((theme: string) => theme.trim())
    })

    context.subscriptions.push(
        start,
        stop,
        updateInterval,
        updateThemeList,
    )
}

export function deactivate() {
    timer.stop()
}
