import { UserDetails } from '../../model/UserModel';
import {
  USER_LOGGED_IN_SUCCESS,
  USER_LOGGED_OUT_SUCCESS,
  USER_UPDATE_DETAILS,
} from '../actions/types';
import { UserActionTypes } from '../actions/userActions';

interface UserState {
  isLoggedIn: boolean;
  userDetails: UserDetails;
}

const INITIAL_STATE: UserState = {
  isLoggedIn: false,
  userDetails: {
    userName: undefined,
    age: undefined,
  },
};

const userReducer = (state = INITIAL_STATE, action: UserActionTypes): UserState => {
  switch (action.type) {
    case USER_LOGGED_IN_SUCCESS: {
      const danUserDetails: UserDetails = {
        userName: 'Dan Abramov',
        age: 36,
      };
      return { ...state, isLoggedIn: true, userDetails: danUserDetails };
    }
    case USER_LOGGED_OUT_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
        userDetails: INITIAL_STATE.userDetails,
      };
    case USER_UPDATE_DETAILS:
      return {
        ...state,
        userDetails: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
