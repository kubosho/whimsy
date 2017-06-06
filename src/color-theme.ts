import { workspace } from 'vscode'
import * as shuffle from 'lodash.shuffle'

class ColorTheme {
    private getThemes(): any {
        return workspace.getConfiguration('whimsy').get('themes')
    }

    private getWorkbench(): any {
        return workspace.getConfiguration('workbench')
    }

    getCurrentTheme(): string {
        return this.getWorkbench().get('colorTheme')
    }

    rand(): string {
        const themes = shuffle(
            this.getThemes().map((theme: string) => theme.trim())
        )

        return themes.indexOf(this.getCurrentTheme()) === 0
            ? themes[1]
            : themes[0]
    }

    update(themeName: string): void {
        this.getWorkbench().update('colorTheme', themeName, true)
    }
}

export const colorTheme = new ColorTheme()
