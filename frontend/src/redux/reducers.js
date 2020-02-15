import {combineReducers} from 'redux';

import userSettings, {STATE_KEY as userSettingsKey} from './modules/userSettings';
import messages, {STATE_KEY as messagesKey} from './modules/messages';

export default combineReducers({
  [userSettingsKey]: userSettings,
  [messagesKey]: messages
});
