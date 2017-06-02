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
    const activate = commands.registerCommand('extension.activate', () => {
        timer.start(() => {
            colorTheme.update(colorTheme.rand());
        });
    });

    context.subscriptions.push(activate);
}

export function deactivate() {
    timer.stop();
}
