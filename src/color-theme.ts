import { workspace } from 'vscode';
import * as shuffle from 'lodash.shuffle';

export class ColorTheme {
    private _config = workspace.getConfiguration('workbench');
    private _themes = [
        'Default Dark+',
        'Monokai',
        'Monokai Dimmed',
        'Solarized Dark',
        'Abyss',
    ];

    getCurrentTheme(): string {
        return <string>this._config.get('colorTheme');
    }

    rand(): string {
        return shuffle(this._themes)[0];
    }

    update(themeName: string): void {
        this._config.update('colorTheme', themeName, true);
    }
}
