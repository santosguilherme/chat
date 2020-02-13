import { createActions, handleActions } from 'redux-actions';

const STATE_KEY = 'userSettings';

/* Actions Types */
const UPDATE_USER_NAME = 'UPDATE_USER_NAME';
const UPDATE_INTERFACE_COLOR = 'UPDATE_INTERFACE_COLOR';
const UPDATE_CLOCK_DISPLAY = 'UPDATE_CLOCK_DISPLAY';
const UPDATE_ENTER_MODE = 'UPDATE_ENTER_MODE';
const UPDATE_LANGUAGE = 'UPDATE_LANGUAGE';

export const types = {

};

/* Actions */
const {
  updateUserName,
  updateInterfaceColor,
  updateClockDisplay,
  updateEnterMode,
  updateLanguage
} = createActions(
  UPDATE_USER_NAME,
  UPDATE_INTERFACE_COLOR,
  UPDATE_CLOCK_DISPLAY,
  UPDATE_ENTER_MODE,
  UPDATE_LANGUAGE,
  { prefix: STATE_KEY }
);

export const actions = {
  updateUserName,
  updateInterfaceColor,
  updateClockDisplay,
  updateEnterMode,
  updateLanguage
};

/* State */
const initialState = {
  userName: 'Guilherme X',
  interfaceColor: 'light',
  clockDisplay: '12',
  enterMode: false,
  language: 'enUS',
};

const createUpdateHandler = stateAttr => (state, action) => ({
  ...state,
  [stateAttr]: action.payload
});

/* Reducers */
export default handleActions({
  [updateUserName]: createUpdateHandler('userName'),
  [updateInterfaceColor]: createUpdateHandler('interfaceColor'),
  [updateClockDisplay]: createUpdateHandler('clockDisplay'),
  [updateEnterMode]: createUpdateHandler('enterMode'),
  [updateLanguage]: createUpdateHandler('language'),
}, initialState);

/* Selectors */
export const selectors = {
  getUserName: state => state[STATE_KEY].userName,
  getInterfaceColor: state => state[STATE_KEY].interfaceColor,
  getClockDisplay: state => state[STATE_KEY].clockDisplay,
  getEnterMode: state => state[STATE_KEY].enterMode,
  getLanguage: state => state[STATE_KEY].language,
};
