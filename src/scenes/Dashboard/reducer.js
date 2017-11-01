import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';
import addTask, {
  addTaskNameChangeEpic,
  addTaskDescriptionChangeEpic,
  addTaskToggleTimeModeEpic,
  addTaskTimeChangeEpic,
  addTaskSaveEpic,
} from './AddTask/duck';

export const dashboardEpic = combineEpics(
  addTaskNameChangeEpic,
  addTaskDescriptionChangeEpic,
  addTaskToggleTimeModeEpic,
  addTaskTimeChangeEpic,
  addTaskSaveEpic,
);

export const dashboardReducer = combineReducers({
  addTask,
});
