import { createMuiTheme } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';

const theme2 = createMuiTheme({
  name: 'Theme2',
  spacing: 8,
  status: {
    danger: purple[400],
  },
  color: {
    'cta-background': '#ffa726',
  },
});

export default theme2;
