import { colorTheme } from '../color-theme'
import { timer } from '../timer'

export default function start () {
    timer.start(() => {
        colorTheme.update(colorTheme.rand())
    })
}
