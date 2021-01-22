import { RootReducerState } from './reducers';

export const selectCount = (state: RootReducerState) => state.count.count;
