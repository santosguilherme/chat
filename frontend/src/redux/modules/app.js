import { createActions, handleActions } from 'redux-actions';

export const STATE_KEY = 'app';

/* Actions Types */
const CONNECT_WEBSOCKET = 'CONNECT_WEBSOCKET';
const DISCONNECT_WEBSOCKET = 'DISCONNECT_WEBSOCKET';
const SET_WEBSOCKET_CONNECTED = 'SET_WEBSOCKET_CONNECTED';

/* Actions */
const {
  connectWebsocket,
  disconnectWebsocket,
  setWebsocketConnected,
} = createActions(
  CONNECT_WEBSOCKET,
  DISCONNECT_WEBSOCKET,
  SET_WEBSOCKET_CONNECTED,
  { prefix: STATE_KEY },
);

export const actions = {
  connectWebsocket,
  disconnectWebsocket,
  setWebsocketConnected,
};

/* State */
const initialState = {
  isWebsocketConnected: false,
};

/* Reducer */
export default handleActions({
  [setWebsocketConnected]: state => ({
    ...state,
    isWebsocketConnected: true,
  }),
}, initialState);

/* Selectors */
export const selectors = {
  getWebsocketConnected: state => state[STATE_KEY].isWebsocketConnected,
};
