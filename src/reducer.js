import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import data from './data/reducer';
// import scenes from './scenes/reducer';

export default combineReducers({
  routing: routerReducer,
  data,
  // scenes,
});
