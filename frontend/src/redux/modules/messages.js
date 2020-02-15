import { createActions, handleActions } from 'redux-actions';

export const STATE_KEY = 'messages';

/* Actions Types */
const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_MESSAGES = 'UPDATE_MESSAGES';
const CHAT_JOIN = 'CHAT_JOIN';
const CLOSE_APP = 'CLOSE_APP'; // TODO

export const types = {
  SEND_MESSAGE,
  UPDATE_MESSAGES,
  CLOSE_APP,
  CHAT_JOIN
};

/* Actions */
const {
  sendMessage,
  updateMessages,
  chatJoin
} = createActions(
  SEND_MESSAGE,
  UPDATE_MESSAGES,
  CHAT_JOIN,
  { prefix: STATE_KEY }
);

export const actions = {
  sendMessage,
  updateMessages,
  chatJoin
};

/* State */
const initialState = {
  userId: '',
  messages: {}
};

/* Reducer */
export default handleActions({
  [updateMessages]: (state, action) => ({
    ...state,
    messages: {
      ...state.messages,
      [action.payload.id]: action.payload
    }
  }),
  [chatJoin]: (state, action) => ({
    ...state,
    userId: action.payload
  })
}, initialState);

/* Selectors */
export const selectors = {
  getUserId: state => state[STATE_KEY].userId,
  getMessages: state => toArray(state[STATE_KEY].messages) // TODO: ordenar
};

function toArray(list = {}) {
  return Object.keys(list).map(id => list[id]) || [];
}
