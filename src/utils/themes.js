import {primaryFont} from "./typography"
import {blue,neutral} from "./colors"

const defaultTheme = {
    primaryColor:blue[200],
    primaryColorHover:blue[300],
    primaryColorActive:neutral[400],
    textColorOnPrimary:neutral[100],
    textColor:neutral[600],
    textColorInverted:neutral[100],
    primaryFont,
    primaryColorFocus:blue[200],
    primaryColorDisabled:neutral[400],
    textColorOnDisabled:neutral[300]
}
export {defaultTheme}