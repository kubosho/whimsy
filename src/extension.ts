'use strict';
import {
    ExtensionContext,
    commands,
    workspace,
} from 'vscode';

function changeColorTheme() {
    const config = workspace.getConfiguration('workbench');
    const currentTheme = config.get('colorTheme');
    const themes = [
        'Default Dark+', 'Monokai', 'Monokai Dimmed', 'Solarized Dark', 'Abyss',
        'Default Dark+', 'Monokai', 'Monokai Dimmed', 'Solarized Dark', 'Abyss'
    ];
    const themeRandomIndex = Math.floor(Math.random() * 10);
    config.update('colorTheme', themes[themeRandomIndex], true)
        .then(() => {
            setTimeout(changeColorTheme, 1000 * 60 * 30);
        });
}

export function activate(context: ExtensionContext) {
    let disposable = commands.registerCommand('extension.whimsy', () => {
        setTimeout(changeColorTheme, 1000 * 60 * 30);
    });

    setTimeout(changeColorTheme, 1000 * 60 * 30);
    context.subscriptions.push(disposable);
}

export function deactivate() {
}
