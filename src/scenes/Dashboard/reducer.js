import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';
import addTask, {
  addTaskNameChangeEpic,
  addTaskSaveEpic,
} from './AddTask/duck';

export const dashboardEpic = combineEpics(
  addTaskNameChangeEpic,
  addTaskSaveEpic,
);

export const dashboardReducer = combineReducers({
  addTask,
});
