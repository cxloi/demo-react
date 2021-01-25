import { applyMiddleware, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import Config from '../Config';
import { rootReducer } from './reducers';

const middlewares = [];
if (Config.isDebuggable) {
  middlewares.push(createLogger());
}

const enhancers = compose(applyMiddleware(...middlewares));

const persistConfig = {
  key: 'root',
  whitelist: ['user'],
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  const store = createStore(persistedReducer, {}, enhancers);
  const persistor = persistStore(store);
  return { store, persistor };
};
