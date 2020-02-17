import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import CssBaseline from '@material-ui/core/CssBaseline';

import App from 'app/App';
import configureStore from 'redux/store';
import GlobalStyle from 'commons/components/GlobalStyle/GlobalStyle';

import * as serviceWorker from './serviceWorker';

function renderApp() {
  const { store, persistor } = configureStore();

  ReactDOM.render(
    <StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <CssBaseline />
          <GlobalStyle />
          <App />
        </PersistGate>
      </Provider>
    </StrictMode>,
    document.getElementById('root'),
  );
}

function startApp() {
  renderApp();
  // Learn more about service workers: https://bit.ly/CRA-PWA
  serviceWorker.register();
}

startApp();
