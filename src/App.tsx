import React, { CSSProperties, useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { CustomButton, Theme1, Theme2 } from 'demo-sb-react-components';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';
import { decreaseCountAction, increaseCountAction } from 'countModule';
import { selectCount, selectIsUserLoggedIn, selectUserDetails } from './redux/selectors';
import StoreState from './pages/StoreState';
import { userLoggedInSuccess, userLoggedOutSuccess } from './redux/actions/userActions';
import UpdateUserProfile from './pages/UpdateUserProfile';
import ResponsiveList from './component/ResponsiveList';

const styles: Record<string, CSSProperties> = {
  countContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  countTextContainer: {
    width: 120,
  },
  userDetailsContainer: {
    marginTop: 10,
    marginBottom: 10,
  },
};

export default function App() {
  const [theme, setTheme] = useState(Theme1);

  const dispatch = useDispatch();
  const count = useSelector(selectCount);
  const isUserLoggedIn = useSelector(selectIsUserLoggedIn);
  const userDetails = useSelector(selectUserDetails);

  useEffect(() => {
    const intervalID = setInterval(() => {
      setTheme(theme === Theme1 ? Theme2 : Theme1);
    }, 3000);
    return () => clearInterval(intervalID);
  });

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div style={{ padding: 10 }}>
          <ul>
            <li>
              <Link data-testid="linkState" to="/">
                Store State
              </Link>
            </li>
            <li>
              <Link data-testid="linkUpdate" to="/update-user-profile">
                Update User Profile
              </Link>
            </li>
          </ul>

          <div style={styles.countContainer}>
            <CustomButton label="-" onClick={() => dispatch(decreaseCountAction())} />
            <div style={styles.countTextContainer}>COUNT: {count}</div>
            <CustomButton label="+" onClick={() => dispatch(increaseCountAction())} />
          </div>

          <div style={styles.userDetailsContainer}>
            {isUserLoggedIn ? (
              <>
                <div>Name: {userDetails.userName}</div>
                <div>Age: {userDetails.age}</div>
                <CustomButton label="Log Out" onClick={() => dispatch(userLoggedOutSuccess())} />
              </>
            ) : (
              <CustomButton
                label="Log In"
                onClick={() => dispatch(userLoggedInSuccess('dan-abramov-user-id'))}
              />
            )}
          </div>

          <hr />

          <Switch>
            <Route exact path="/">
              <StoreState />
            </Route>
            <Route path="/update-user-profile">
              <UpdateUserProfile />
              <ResponsiveList />
            </Route>
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}
