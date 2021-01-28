import { Breakpoints, BreakpointsOptions } from '@material-ui/core/styles/createBreakpoints';
import { Palette } from '@material-ui/core/styles/createPalette';
import { Spacing, SpacingOptions } from '@material-ui/core/styles/createSpacing';
import { TypographyStyle, TypographyStyleOptions } from '@material-ui/core/styles/createTypography';

export type Variant =
  | 'titleFont';

interface CustomTypography extends Record<Variant, TypographyStyle> { }
export interface CustomTypographyOptions
  extends Partial<Record<Variant, TypographyStyleOptions>> { }

export interface Theme {
  breakpoints: Breakpoints;
  spacing: Spacing;

  name: string;
  fonts: CustomTypography;
  status: {
    danger: string;
  };
  colors: {
    ctaBackground: string;
  };
}

export interface ThemeOptions {
  breakpoints?: BreakpointsOptions;
  spacing: SpacingOptions;

  name: string;
  // eslint-disable-next-line no-unused-vars
  fonts?: CustomTypographyOptions | ((palette: Palette) => CustomTypographyOptions);
  status?: {
    danger?: string;
  };
  colors?: {
    ctaBackground?: string;
  };
}
