import { combineReducers } from 'redux';
import countReducer from './countReducer';

export const rootReducer = combineReducers({
  count: countReducer,
  anotherCount: countReducer,
});

export type RootReducerState = ReturnType<typeof rootReducer>;
