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

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: ExtensionContext) {

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable = commands.registerCommand('extension.whimsy', () => {
        setTimeout(changeColorTheme, 1000 * 60 * 30);
    });

    setTimeout(changeColorTheme, 1000 * 60 * 30);
    context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {
}
