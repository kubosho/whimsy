'use strict';

import {
    ExtensionContext,
    commands,
    workspace,
} from 'vscode';
import * as shuffle from 'lodash.shuffle';

export class ColorTheme {
    private config = workspace.getConfiguration('workbench');
    private themes = [
        'Default Dark+',
        'Monokai',
        'Monokai Dimmed',
        'Solarized Dark',
        'Abyss',
    ];

    getCurrentTheme(): string {
        return <string>this.config.get('colorTheme');
    }

    rand(): string {
        return shuffle(this.themes)[0];
    }

    update(themeName: string): void {
        this.config.update('colorTheme', themeName, true);
    }
}

const colorTheme = new ColorTheme();
let timerId;

export function activate(context: ExtensionContext) {
    let disposable = commands.registerCommand('extension.whimsy', () => {
        timerId = setInterval(() => {
            colorTheme.update(colorTheme.rand());
        }, 1000 * 60 * 30);
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {
    clearInterval(timerId);
}
