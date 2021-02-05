import React, { CSSProperties } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { CustomButton } from 'demo-sb-react-components';
import { useDispatch, useSelector } from 'react-redux';
import { Counter } from 'countModule';
import { selectIsUserLoggedIn, selectUserDetails } from './redux/selectors';
import StoreState from './pages/StoreState';
import { userLoggedInSuccess, userLoggedOutSuccess } from './redux/actions/userActions';
import UpdateUserProfile from './pages/UpdateUserProfile';
import ResponsiveList from './component/ResponsiveList';

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

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
  const isUserLoggedIn = useSelector(selectIsUserLoggedIn);
  const userDetails = useSelector(selectUserDetails);

  const dispatch = useDispatch();

  return (
    <Router>
      <div style={{ padding: 10 }}>
        <ul>
          <li>
            <Link to="/">Store State</Link>
          </li>
          <li>
            <Link to="/update-user-profile">Update User Profile</Link>
          </li>
        </ul>

        <Counter />

        <div style={styles.userDetailsContainer}>
          {isUserLoggedIn ? (
            <>
              <div>Name: {userDetails.userName}</div>
              <div>Age: {userDetails.age}</div>
              <CustomButton label="Log Out" onClick={() => dispatch(userLoggedOutSuccess())} />
            </>
          )
            : (
              <CustomButton
                label="Log In"
                onClick={() => dispatch(userLoggedInSuccess('dan-abramov-user-id'))}
              />
            )}
        </div>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
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
  );
}
