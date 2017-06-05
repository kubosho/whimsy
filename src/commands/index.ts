import { commands } from 'vscode'
import start from './start'
import stop from './stop'
import updateInterval from './update-interval'
import updateThemeList from './update-theme-list'

export const startCommand = commands.registerCommand('extension.start', start)
export const stopCommand = commands.registerCommand('extension.stop', stop)
export const updateIntervalCommand = commands.registerCommand('extension.updateInterval', updateInterval)
export const updateThemeListCommand = commands.registerCommand('extension.updateThemeList', updateThemeList)
