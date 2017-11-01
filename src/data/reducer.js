import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';
import settings, {
  settingsFetchEpic,
  settingsSaveEpic,
} from './settings/duck';
import tasks, {
  tasksAddEpic,
} from './tasks/duck';

export const dataEpic = combineEpics(
  settingsFetchEpic,
  settingsSaveEpic,
  tasksAddEpic,
);

export const dataReducer = combineReducers({
  settings,
  tasks,
});
