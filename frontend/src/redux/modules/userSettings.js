import { createActions, handleActions } from 'redux-actions';

export const STATE_KEY = 'userSettings';

/* Actions Types */
const UPDATE_USER_NAME = 'UPDATE_USER_NAME';
const UPDATE_INTERFACE_COLOR = 'UPDATE_INTERFACE_COLOR';
const UPDATE_HOUR_12 = 'UPDATE_HOUR_12';
const UPDATE_ENTER_MODE = 'UPDATE_ENTER_MODE';
const UPDATE_LANGUAGE = 'UPDATE_LANGUAGE';
const RESET_DEFAULTS = 'RESET_DEFAULTS';

/* Actions */
const {
  updateUserName,
  updateInterfaceColor,
  updateHour12,
  updateEnterMode,
  updateLanguage,
  resetDefaults,
} = createActions(
  UPDATE_USER_NAME,
  UPDATE_INTERFACE_COLOR,
  UPDATE_HOUR_12,
  UPDATE_ENTER_MODE,
  UPDATE_LANGUAGE,
  RESET_DEFAULTS,
  { prefix: STATE_KEY },
);

export const actions = {
  updateUserName,
  updateInterfaceColor,
  updateHour12,
  updateEnterMode,
  updateLanguage,
  resetDefaults,
};

/* State */
const initialState = {
  userName: 'Guest',
  interfaceColor: 'light',
  hour12: true,
  enterMode: false,
  language: 'en-US',
};

const createUpdateHandler = stateAttr => (state, action) => ({
  ...state,
  [stateAttr]: action.payload,
});

/* Reducer */
export default handleActions({
  [updateUserName]: createUpdateHandler('userName'),
  [updateInterfaceColor]: createUpdateHandler('interfaceColor'),
  [updateHour12]: createUpdateHandler('hour12'),
  [updateEnterMode]: createUpdateHandler('enterMode'),
  [updateLanguage]: createUpdateHandler('language'),
  [resetDefaults]: () => ({
    ...initialState,
  }),
}, initialState);

/* Selectors */
export const selectors = {
  getUserName: state => state[STATE_KEY].userName,
  getInterfaceColor: state => state[STATE_KEY].interfaceColor,
  getHour12: state => state[STATE_KEY].hour12,
  getEnterMode: state => state[STATE_KEY].enterMode,
  getLanguage: state => state[STATE_KEY].language,
};
