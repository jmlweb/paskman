import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';
import {
  dashboardEpic,
  dashboardReducer,
} from './Dashboard/reducer';

export const scenesEpic = combineEpics(dashboardEpic);

export const scenesReducer = combineReducers({
  dashboard: dashboardReducer,
});
