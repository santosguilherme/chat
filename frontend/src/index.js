import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './redux/store';

function renderApp() {
  ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.getElementById('root')
  );
}

function startApp(){
  renderApp();
  // Learn more about service workers: https://bit.ly/CRA-PWA
  serviceWorker.register();
}

startApp();
