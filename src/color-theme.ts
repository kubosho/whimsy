import { workspace } from 'vscode';
import * as shuffle from 'lodash.shuffle';

export class ColorTheme {
    private _themes = [
        'Default Dark+',
        'Monokai',
        'Monokai Dimmed',
        'Solarized Dark',
        'Abyss',
    ];

    set themes(list: Array<string>) {
        this._themes = list;
    }

    private getConfig(): any {
        return workspace.getConfiguration('workbench');
    }

    getCurrentTheme(): string {
        return <string>this.getConfig().get('colorTheme');
    }

    rand(): string {
        return shuffle(this._themes)[0];
    }

    update(themeName: string): void {
        this.getConfig().update('colorTheme', themeName, true);
    }
}
