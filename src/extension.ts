'use strict'

import { ExtensionContext } from 'vscode'
import {
    startCommand,
    stopCommand,
    updateIntervalCommand,
} from './commands'
import { timer } from './timer'
import start from './commands/start'
import stop from './commands/stop'

export function activate(context: ExtensionContext) {
    start()

    context.subscriptions.push(
        startCommand,
        stopCommand,
        updateIntervalCommand,
    )
}

export function deactivate() {
    stop()
}
