export interface Theme {
  name: string;
  status: {
    danger: string;
  };
  color: {
    'cta-background': string;
  };
}

export interface ThemeOptions {
  name: string;
  status?: {
    danger?: string;
  };
  color?: {
    'cta-background'?: string;
  };
}
