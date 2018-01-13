import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import app from '../App/reducer';
import components from '../components/reducer';
import { dataReducer } from '../data/reducer';
import { scenesReducer } from '../scenes/reducer';

export default combineReducers({
  app,
  components,
  data: dataReducer,
  routing: routerReducer,
  scenes: scenesReducer,
});
