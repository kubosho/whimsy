import { window } from 'vscode'
import { colorTheme } from '../color-theme'

export default async function updateThemeList () {
    const option = {
        prompt: 'Enter theme names separated with commas.',
    }
    const themes: string = await window.showInputBox(option)

    colorTheme.themes = themes
        .split(',')
        .map((theme: string) => theme.trim())
}
