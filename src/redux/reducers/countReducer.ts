import { CountActionTypes } from '../actions/countActions';
import { DECREASE_COUNT, INCREASE_COUNT } from '../actions/types';

interface CountState {
  count: number;
}

const INITIAL_STATE: CountState = {
  count: 0,
};

export default function countReducer(
  state = INITIAL_STATE,
  action: CountActionTypes,
): CountState {
  switch (action.type) {
    case INCREASE_COUNT:
      // don't do state.count++
      // return { ...state, count: state.count++ };
      return { ...state, count: state.count + 1 };
    case DECREASE_COUNT:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
}
