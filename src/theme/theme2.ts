import { createMuiTheme } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';

const theme2 = createMuiTheme({
  breakpoints: {
    values: {
      xs: 50,
      sm: 100,
      md: 400,
      lg: 500,
      xl: 600,
    },
  },
  name: 'Theme2',
  spacing: 8,
  status: {
    danger: purple[400],
  },
  colors: {
    ctaBackground: '#ffa726',
  },
  fonts: {
    titleFont: {},
  },
});

theme2.fonts.titleFont = {
  fontSize: '1.2rem',
  [theme2.breakpoints.up('sm')]: {
    fontSize: '1.8rem',
  },
  [theme2.breakpoints.up('md')]: {
    fontSize: '2.4rem',
  },
};

export default theme2;
