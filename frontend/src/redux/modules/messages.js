import { createActions, handleActions } from 'redux-actions';

import { toArray } from 'commons/utils/object/toArray';

export const STATE_KEY = 'messages';

/* Actions Types */
const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_MESSAGES = 'UPDATE_MESSAGES';
const RESET_UNREAD_MESSAGES = 'RESET_UNREAD_MESSAGES';
const CHAT_JOIN = 'CHAT_JOIN';

// TODO: rename to chat.js

/* Actions */
const {
  sendMessage,
  updateMessages,
  resetUnreadMessages,
  chatJoin,
} = createActions(
  SEND_MESSAGE,
  UPDATE_MESSAGES,
  RESET_UNREAD_MESSAGES,
  CHAT_JOIN,
  { prefix: STATE_KEY },
);

export const actions = {
  sendMessage,
  updateMessages,
  resetUnreadMessages,
  chatJoin,
};

/* State */
const initialState = {
  userId: '',
  unreadMessages: 0,
  messages: {},
};

/* Reducer */
export default handleActions({
  [updateMessages]: (state, action) => {
    const newState = { ...state };
    const newMessage = { ...action.payload };

    newState.messages = {
      ...state.messages,
      [newMessage.id]: newMessage,
    };

    if (newMessage.userId !== state.userId) {
      newState.unreadMessages = state.unreadMessages + 1;
    }

    return newState;
  },
  [resetUnreadMessages]: state => ({
    ...state,
    unreadMessages: 0,
  }),
  [chatJoin]: (state, action) => ({
    ...state,
    userId: action.payload,
  }),
}, initialState);

/* Selectors */
export const selectors = {
  getUserId: state => state[STATE_KEY].userId,
  getUnreadMessages: state => state[STATE_KEY].unreadMessages,
  getMessages: state => toArray(state[STATE_KEY].messages),
};
