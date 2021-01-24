import {
  // applyMiddleware,
  // compose,
  createStore,
} from 'redux';

// import monitorReducersEnhancer from "./enhancers/monitorReducers";
// import loggerMiddleware from "./middleware/logger";
import { rootReducer } from './reducers';

export default function configureStore() {
  // const middlewares = [loggerMiddleware, thunkMiddleware]
  // const middlewareEnhancer = applyMiddleware(...middlewares)

  // const enhancers = [middlewareEnhancer, monitorReducersEnhancer]
  // const composedEnhancers = compose(...enhancers)

  const store = createStore(
    rootReducer,
    // preloadedState,
    // composedEnhancers
  );

  return store;
}
