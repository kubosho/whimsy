import { window } from 'vscode'
import { colorTheme } from '../color-theme'
import { message } from '../constants'

export default async function updateThemeList () {
    const option = {
        prompt: message.updateThemeList,
    }
    const themes: string = await window.showInputBox(option)

    colorTheme.themes = themes
        .split(',')
        .map((theme: string) => theme.trim())
}
