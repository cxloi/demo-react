import { UserDetails } from '../../model/UserModel';
import { USER_LOGGED_IN_SUCCESS, USER_LOGGED_OUT_SUCCESS, USER_UPDATE_DETAILS } from './types';

interface UserLoggedInSuccessAction {
  type: typeof USER_LOGGED_IN_SUCCESS;
  payload: string;
}

interface UserLoggedOutSuccessAction {
  type: typeof USER_LOGGED_OUT_SUCCESS;
}

interface UserUpdateDetailsAction {
  type: typeof USER_UPDATE_DETAILS;
  payload: UserDetails;
}

export type UserActionTypes =
  | UserLoggedInSuccessAction
  | UserLoggedOutSuccessAction
  | UserUpdateDetailsAction;

export function userLoggedInSuccess(userId: string): UserActionTypes {
  return {
    type: USER_LOGGED_IN_SUCCESS,
    payload: userId,
  };
}

export function userLoggedOutSuccess(): UserActionTypes {
  return {
    type: USER_LOGGED_OUT_SUCCESS,
  };
}

export function userUpdateDetails(userDetails: UserDetails): UserActionTypes {
  return {
    type: USER_UPDATE_DETAILS,
    payload: userDetails,
  };
}
