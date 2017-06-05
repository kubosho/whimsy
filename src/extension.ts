'use strict'

import { ExtensionContext } from 'vscode'
import {
    startCommand,
    stopCommand,
    updateIntervalCommand,
    updateThemeListCommand,
} from './commands'
import { timer } from './timer'

export function activate(context: ExtensionContext) {
    context.subscriptions.push(
        startCommand,
        stopCommand,
        updateIntervalCommand,
        updateThemeListCommand,
    )
}

export function deactivate() {
    timer.stop()
}
