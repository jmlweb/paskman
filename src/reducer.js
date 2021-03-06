import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import app from './App/reducer';
import components from './components/reducer';
import { dataEpic, dataReducer } from './data/reducer';
import { scenesEpic, scenesReducer } from './scenes/reducer';

export const rootEpic = combineEpics(
  dataEpic,
  scenesEpic,
);

export const rootReducer = combineReducers({
  app,
  components,
  data: dataReducer,
  routing: routerReducer,
  scenes: scenesReducer,
});
