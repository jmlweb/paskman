import { combineReducers } from 'redux';
import pomodoros from './pomodoros/duck';
import settings from './settings/duck';
import tasks from './tasks/duck';

export default combineReducers({
  settings,
  pomodoros,
  tasks,
});
