import { DECREASE_COUNT, INCREASE_COUNT } from './types';

interface IncreaseCountAction {
  type: typeof INCREASE_COUNT;
  // payload
}

interface DecreaseCountAction {
  type: typeof DECREASE_COUNT;
}

export type CountActionTypes = IncreaseCountAction | DecreaseCountAction;

export function increaseCountAction(): IncreaseCountAction {
  return {
    type: INCREASE_COUNT,
  };
}

export function decreaseCountAction(): DecreaseCountAction {
  return {
    type: DECREASE_COUNT,
  };
}
