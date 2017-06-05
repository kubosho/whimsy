import { commands } from 'vscode'
import start from './start'
import stop from './stop'
import updateInterval from './update-interval'
import updateThemeList from './update-theme-list'

function registerCommand (name: string, func: () => void) {
    return commands.registerCommand(`extension.${name}`, func)
}

export const startCommand = registerCommand('start', start)
export const stopCommand = registerCommand('stop', stop)
export const updateIntervalCommand = registerCommand('updateInterval', updateInterval)
export const updateThemeListCommand = registerCommand('updateThemeList', updateThemeList)
