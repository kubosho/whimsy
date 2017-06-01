'use strict';

import {
    ExtensionContext,
    commands,
    workspace,
} from 'vscode';
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

export class Timer {
    private _id: NodeJS.Timer;

    private _delay = 1000 * 60 * 30;
    private _interval: number;

    set delay(milliseconds: number) {
        this._delay = milliseconds;
    }

    set interval(milliseconds: number) {
        this._interval = milliseconds;
    }

    start(callback: () => void): void {
        if (this._interval) {
            this._id = setInterval(callback, this._interval);
            return;
        }

        this._id = setTimeout(callback, this._delay);
    }

    stop(): void {
        this._interval ? clearInterval(this._id) : clearTimeout(this._id);
        this._id = null;
    }
}

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
