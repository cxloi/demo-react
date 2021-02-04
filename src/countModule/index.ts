import countReducer from './countReducer';

export * from './Components/index';
export { increaseCountAction } from './countActions'; // limit export of actions to component outside of the folder/module

// reducer will need to be exported so that it can be included in store creation
export { countReducer };
