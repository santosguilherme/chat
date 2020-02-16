import {combineReducers} from 'redux';

import app, {STATE_KEY as appKey} from './modules/app';
import messages, {STATE_KEY as messagesKey} from './modules/messages';
import userSettings, {STATE_KEY as userSettingsKey} from './modules/userSettings';

export default combineReducers({
  [appKey]: app,
  [messagesKey]: messages,
  [userSettingsKey]: userSettings,
});
