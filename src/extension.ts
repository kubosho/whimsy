'use strict';

import { ColorTheme } from './color-theme';
import { Timer } from './timer';
import {
    ExtensionContext,
    commands,
} from 'vscode';

const colorTheme = new ColorTheme();
const timer = new Timer();

export function activate(context: ExtensionContext) {
    let disposable = commands.registerCommand('extension.whimsy', () => {
        timer.start(() => {
            colorTheme.update(colorTheme.rand());
        });
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {
    timer.stop();
}
