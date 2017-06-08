import {
    whimsyConfig,
    workbenchConfig,
} from './config'
import * as shuffle from 'lodash.shuffle'

class ColorTheme {
    getCurrentTheme(): string {
        return workbenchConfig().get('colorTheme')
    }

    rand(): string {
        const themes = shuffle(
            whimsyConfig().get('themes').map((theme: string) => theme.trim())
        )

        return themes.indexOf(this.getCurrentTheme()) === 0
            ? themes[1]
            : themes[0]
    }

    update(themeName: string): void {
        workbenchConfig().update('colorTheme', themeName, true)
    }
}

export const colorTheme = new ColorTheme()
