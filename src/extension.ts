'use strict';

import { ColorTheme } from './color-theme';
import { Timer } from './timer';
import {
    ExtensionContext,
    commands,
    window,
} from 'vscode';

const colorTheme = new ColorTheme();
const timer = new Timer();

export function activate(context: ExtensionContext) {
    const activate = commands.registerCommand('extension.activate', () => {
        timer.start(() => {
            colorTheme.update(colorTheme.rand());
        });
    });

    const updateInterval = commands.registerCommand('extension.updateInterval', () => {
        const option = {
            prompt: 'Enter the time interval for change color theme. The unit is milliseconds.',
        };

        window.showInputBox(option)
            .then((interval: string) => {
                const intervalValue = Number(interval);
                if (Number.isNaN(intervalValue)) {
                    return;
                }

                timer.stop();
                timer.interval = intervalValue;
                timer.start(() => {
                    colorTheme.update(colorTheme.rand());
                });
            });
    });

    const updateThemeList = commands.registerCommand('extension.updateThemeList', () => {
        const option = {
            prompt: 'Enter theme names separated with commas.',
        };

        window.showInputBox(option)
            .then((themes: string) => {
                colorTheme.themes = themes
                    .split(',')
                    .map((theme: string) => theme.trim());
            });
    });

    context.subscriptions.push(
        activate,
        updateInterval,
        updateThemeList,
    );
}

export function deactivate() {
    timer.stop();
}
