'use strict'

import { ExtensionContext } from 'vscode'
import {
    startCommand,
    stopCommand,
    updateIntervalCommand,
} from './commands'
import { timer } from './timer'

export function activate(context: ExtensionContext) {
    context.subscriptions.push(
        startCommand,
        stopCommand,
        updateIntervalCommand,
    )
}

export function deactivate() {
    timer.stop()
}
