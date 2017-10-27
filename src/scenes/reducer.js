import { combineReducers } from 'redux';
import dashboard from './Dashboard/reducer';
import settingsConfig from './SettingsConfig/duck';

export default combineReducers({
  dashboard,
  settingsConfig,
});
