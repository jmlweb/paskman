import { combineReducers } from 'redux-immutable';
import { routerReducer as routing } from 'react-router-redux';

import timerReducer from './timer-reducer';

export default combineReducers({
  timerReducer,
  routing,
});
