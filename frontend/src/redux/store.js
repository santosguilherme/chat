import {createStore} from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import {STATE_KEY as userSettingsKey } from './modules/userSettings';
import rootReducer from './reducers';

const persistConfig = {
  key: 'chat',
  storage,
  whitelist: [userSettingsKey]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

if (process.env.NODE_ENV === 'development' && module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept('./reducers', () => {
    const nextReducer = require('./reducers').default;
    store.replaceReducer(nextReducer);
  });
}

export default () => {
  return {
    store,
    persistor: persistStore(store)
  };
};
