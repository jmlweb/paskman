import { combineReducers } from 'redux';
import main from './main/duck';
import dashboard from './dashboard/reducer';

export default combineReducers({
  main,
  dashboard,
});
