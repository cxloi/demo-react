import React from 'react';
import { useSelector } from 'react-redux';
import { selectWholeStoreState } from 'redux/selectors';
import {
  makeStyles,
  createStyles,
  // Theme as AugmentedTheme,
  useTheme,
} from '@material-ui/core/styles';
import { Theme } from 'theme/interface';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      ...theme.fonts.titleFont,
      color: theme.status.danger,
      margin: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        margin: theme.spacing(4),
      },
      '&$checked': {
        color: theme.status.danger,
      },
    },
    sub: {
      color: theme.colors.ctaBackground,
    },
    checked: {},
  }),
  // eslint-disable-next-line function-paren-newline
);

const StoreState = () => {
  const wholeStoreState = useSelector(selectWholeStoreState);
  const classes = useStyles();
  const themeObj = useTheme();

  return (
    <div>
      <h2 className={classes.root}>
        {`Store State (${themeObj.name})`}
      </h2>
      <div className={classes.sub} style={{ whiteSpace: 'pre-wrap' }}>{JSON.stringify(wholeStoreState, null, 4)}</div>
    </div>
  );
};

export default StoreState;
