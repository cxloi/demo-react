import { Theme as customTheme, ThemeOptions as customThemeOptions } from 'demo-sb-react-components';

declare module '@material-ui/core/styles/createMuiTheme' {
    export interface Theme extends customTheme { }
    export interface ThemeOptions extends customThemeOptions { }
}

export { };
