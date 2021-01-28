import { Spacing, SpacingOptions } from "@material-ui/core/styles/createSpacing";

export interface Theme {
  name: string;
  spacing: Spacing;
  status: {
    danger: string;
  };
  color: {
    ctaBackground: string;
  };
}

export interface ThemeOptions {
  name: string;
  spacing: SpacingOptions;
  status?: {
    danger?: string;
  };
  color?: {
    ctaBackground?: string;
  };
}
