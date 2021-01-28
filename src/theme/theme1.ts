import { createMuiTheme } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';

const theme1 = createMuiTheme({
  name: 'Theme1',
  spacing: 8,
  status: {
    danger: orange[400],
  },
  color: {
    ctaBackground: '#7e57c2',
  },
});

export default theme1;
