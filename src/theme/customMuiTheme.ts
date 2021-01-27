import { Theme as customTheme, ThemeOptions as customThemeOptions } from './interface';

declare module '@material-ui/core/styles/createMuiTheme' {
    export interface Theme extends customTheme { }
    export interface ThemeOptions extends customThemeOptions { }
}

export { };
