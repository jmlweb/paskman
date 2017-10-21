import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import app from './App/reducer';
import components from './components/reducer';
import data from './data/reducer';

export default combineReducers({
  app,
  components,
  data,
  routing: routerReducer,
});
