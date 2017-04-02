import { combineReducers } from 'redux';
import modal from './modal/duck';
import topbar from './topbar/duck';

export default combineReducers({
  modal,
  topbar,
});
