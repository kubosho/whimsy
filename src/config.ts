import { workspace } from 'vscode'

export function whimsyConfig(): any {
    return workspace.getConfiguration('whimsy')
}

export function workbenchConfig(): any {
    return workspace.getConfiguration('workbench')
}
