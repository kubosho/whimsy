'use strict';

import {
    ExtensionContext,
    commands,
    workspace,
} from 'vscode';

const transitionTime = 1000 * 60 * 30;
let timerId;

function changeColorTheme() {
    const config = workspace.getConfiguration('workbench');
    const currentTheme = config.get('colorTheme');
    const themes = [
        'Default Dark+', 'Monokai', 'Monokai Dimmed', 'Solarized Dark', 'Abyss',
        'Default Dark+', 'Monokai', 'Monokai Dimmed', 'Solarized Dark', 'Abyss'
    ];
    const themeRandomIndex = Math.floor(Math.random() * 10);
    config.update('colorTheme', themes[themeRandomIndex], true);
}

export function activate(context: ExtensionContext) {
    let disposable = commands.registerCommand('extension.whimsy', () => {
        timerId = setInterval(changeColorTheme, transitionTime);
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {
    clearInterval(timerId);
}
