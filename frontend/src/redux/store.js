import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { STATE_KEY as userSettingsKey } from './modules/userSettings';
import saga from './chat'; // TODO
import rootReducer from './reducers';

const persistConfig = {
  key: 'chat',
  storage,
  whitelist: [userSettingsKey],
};

const sagaMiddleware = createSagaMiddleware();
const persistedReducer = persistReducer(persistConfig, rootReducer);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(persistedReducer, {}, composeEnhancers(applyMiddleware(sagaMiddleware)));

if (process.env.NODE_ENV === 'development' && module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept('./reducers', () => {
    const nextReducer = require('./reducers').default;
    store.replaceReducer(nextReducer);
  });
}

export default () => {
  sagaMiddleware.run(saga);

  return {
    store,
    persistor: persistStore(store),
  };
};
