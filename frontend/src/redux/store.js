import {createStore} from 'redux';

import rootReducer from './reducers';

const store = createStore(rootReducer, {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

if (process.env.NODE_ENV === 'development' && module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept('./reducers', () => {
    const nextReducer = require('./reducers').default;
    store.replaceReducer(nextReducer);
  });
}

export default store;
