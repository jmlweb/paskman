import { combineReducers } from 'redux';
import dashboard from './duck';
import components from './components/reducer';

export default combineReducers({
  dashboard,
  components,
});
