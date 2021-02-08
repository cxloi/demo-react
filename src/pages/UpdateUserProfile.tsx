import { CustomButton } from 'demo-sb-react-components';
import React, { CSSProperties, useEffect, useReducer } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UserDetails } from '../model/UserModel';
import { userUpdateDetails } from '../redux/actions/userActions';
import { selectIsUserLoggedIn, selectUserDetails } from '../redux/selectors';

const inputContainerStyle: CSSProperties = {
  marginTop: 5,
  marginBottom: 15,
};

const USER_FORM_ACTIONS = {
  UPDATE: 'USER_FORM_ACTIONS/UPDATE',
};

interface UserDetailsFormState extends UserDetails {}

interface UserDetailsFormAction {
  type: typeof USER_FORM_ACTIONS.UPDATE;
  payload: UserDetailsFormState;
}

const userDetailsFormReducer = (
  state: UserDetailsFormState,
  action: UserDetailsFormAction,
): UserDetailsFormState => {
  switch (action.type) {
    case USER_FORM_ACTIONS.UPDATE:
      return { ...state, ...action.payload };
    default:
      return { ...state };
  }
};

const UpdateUserProfile = () => {
  const dispatch = useDispatch();
  const isUserLoggedIn = useSelector(selectIsUserLoggedIn);
  const userDetails = useSelector(selectUserDetails);

  const [state, userDetailsFormDispatch] = useReducer(userDetailsFormReducer, userDetails);
  const { userName = '', age = 0 } = state;

  useEffect(() => {
    userDetailsFormDispatch({ type: USER_FORM_ACTIONS.UPDATE, payload: userDetails });
  }, [userDetails]);

  return (
    <div data-testid="updatePage">
      <h2>Update User Profile</h2>

      <div>
        {isUserLoggedIn ? (
          <>
            <div>User Name:</div>
            <input
              type="text"
              aria-label="input-custom-name"
              value={userName}
              onChange={(event) =>
                userDetailsFormDispatch({
                  type: USER_FORM_ACTIONS.UPDATE,
                  payload: { userName: event.target.value },
                })
              }
              style={inputContainerStyle}
            />

            <div>Age:</div>
            <input
              value={age}
              onChange={(event) =>
                userDetailsFormDispatch({
                  type: USER_FORM_ACTIONS.UPDATE,
                  payload: { age: event.target.valueAsNumber },
                })
              }
              type="number"
              style={inputContainerStyle}
            />

            <br />
            <CustomButton
              data-testid="updateButton"
              label="Submit"
              onClick={() => dispatch(userUpdateDetails(state))}
            />
          </>
        ) : (
          <div>Please log in to update user profile.</div>
        )}
      </div>
    </div>
  );
};

export default UpdateUserProfile;
