import { combineReducers } from 'redux';
import resizer from './Resizer/duck';
import topBar from './TopBar/duck';

export default combineReducers({
  resizer,
  topBar,
});
