import { createMuiTheme } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';

const theme1 = createMuiTheme({
  name: 'Theme1',
  spacing: 8,
  status: {
    danger: orange[400],
  },
  colors: {
    ctaBackground: '#7e57c2',
  },
  fonts: {
    titleFont: {},
  },
});

theme1.typography.h4 = {
  fontSize: '1.2rem',
  [theme1.breakpoints.up('sm')]: {
    fontSize: '1.8rem',
  },
  [theme1.breakpoints.up('md')]: {
    fontSize: '2.4rem',
  },
};

theme1.fonts.titleFont = {
  fontSize: '1.2rem',
  [theme1.breakpoints.up('sm')]: {
    fontSize: '1.8rem',
  },
  [theme1.breakpoints.up('md')]: {
    fontSize: '2.4rem',
  },
};

export default theme1;
