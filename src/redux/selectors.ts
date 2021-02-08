import { RootReducerState } from './reducers';

export const selectCount = (state: RootReducerState) => state.count.count;

export const selectUserDetails = (state: RootReducerState) => state.user.userDetails;
export const selectIsUserLoggedIn = (state: RootReducerState) => state.user.isLoggedIn;

// this selector is only for demo purpose, avoid using selector for whole store's state!!
export const selectWholeStoreState = (state: RootReducerState) => state;
