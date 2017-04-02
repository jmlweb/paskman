import { combineReducers } from 'redux';
import main from './main/duck';
import dashboard from './dashboard/duck';

export default combineReducers({
  main,
  dashboard,
});
