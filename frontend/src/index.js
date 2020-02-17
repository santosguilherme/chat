import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import App from 'app/App';
import configureStore from 'redux/store';

import * as serviceWorker from './serviceWorker';

function renderApp() {
  const { store, persistor } = configureStore();

  ReactDOM.render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>,
    document.getElementById('root'),
  );
}

function startApp() {
  renderApp();
  // Learn more about service workers: https://bit.ly/CRA-PWA
  serviceWorker.register();
}

startApp();
