import { combineReducers } from 'redux-immutable';
import timerReducer from '../timer/reducer';

export default combineReducers({
  timer: timerReducer,
});
