import {combineReducers} from 'redux';

import userSettings, {STATE_KEY as userSettingsKey} from './modules/userSettings';

export default combineReducers({
  [userSettingsKey]: userSettings,
});
