import { combineReducers } from 'redux';
import countReducer from '../../countModule/countReducer';
import userReducer from './userReducer';

export const rootReducer = combineReducers({
  count: countReducer,
  user: userReducer,
});

export type RootReducerState = ReturnType<typeof rootReducer>;
