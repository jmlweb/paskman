import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';
import settings, {
  settingsFetchEpic,
  settingsSaveEpic,
} from './settings/duck';

export const dataEpic = combineEpics(
  settingsFetchEpic,
  settingsSaveEpic,
);

export const dataReducer = combineReducers({
  settings,
});
