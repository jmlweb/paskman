import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import scenes from './scenes/reducer';

export default combineReducers({
  routing: routerReducer,
  scenes,
});
