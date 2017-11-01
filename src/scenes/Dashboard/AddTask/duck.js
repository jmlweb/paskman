import {
  createAction,
  handleActions,
} from 'redux-actions';
import Rx from 'rxjs';
import stateMock from '../../../stateMock';
import { tasksAdd } from '../../../data/tasks/duck';

/**
 * INITIAL STATE
 */
export const initialState = stateMock.scenes.dashboard.addTask;

/**
 * CONSTANTS
 */
export const ADD_TASK_NAME_CHANGE = 'ADD_TASK/NAME_CHANGE';
export const ADD_TASK_NAME_BLUR = 'ADD_TASK/NAME_BLUR';
export const ADD_TASK_DESCRIPTION_CHANGE = 'ADD_TASK/DESCRIPTION_CHANGE';
export const ADD_TASK_TOGGLE_TIMEMODE = 'ADD_TASK/TOGGLE_TIMEMODE';
export const ADD_TASK_TIME_CHANGE = 'ADD_TASK/TIME_CHANGE';
export const ADD_TASK_SET_DATA = 'ADD_TASK/SET_DATA';
export const ADD_TASK_SAVE = 'ADD_TASK/SAVE';
export const ADD_TASK_RESET = 'ADD_TASK/RESET';

/**
 * ACTIONS
 */

export const addTaskNameChange = createAction(ADD_TASK_NAME_CHANGE, value => ({
  value,
  isValid: value.length >= 3,
}));
export const addTaskNameBlur = createAction(ADD_TASK_NAME_BLUR, hasBlur => ({
  hasChanged: hasBlur,
}));
export const addTaskDescriptionChange = createAction(ADD_TASK_DESCRIPTION_CHANGE);
export const addTaskToggleTimeMode = createAction(ADD_TASK_TOGGLE_TIMEMODE);
export const addTaskTimeChange = createAction(ADD_TASK_TIME_CHANGE, value => +value);
export const addTaskSetData = createAction(ADD_TASK_SET_DATA);
export const addTaskSave = createAction(ADD_TASK_SAVE);
export const addTaskReset = createAction(ADD_TASK_RESET);

/**
 * SELECTORS
 */
export const timeToPomodorosSelector = state =>
  Math.round(state.scenes.dashboard.addTask.timeRequired / state.data.settings.target.working);

/**
 * EPICS
 */
export const addTaskNameChangeEpic = (action$, store) => {
  const getCurrentName = state => state.scenes.dashboard.addTask.name;
  return action$
    .filter(action => action.type === ADD_TASK_NAME_CHANGE || action.type === ADD_TASK_NAME_BLUR)
    .mergeMap(({ payload }) => Rx.Observable.of(addTaskSetData({
      name: { ...getCurrentName(store.getState()), ...payload },
    })));
};

export const addTaskDescriptionChangeEpic = action$ =>
  action$.ofType(ADD_TASK_DESCRIPTION_CHANGE)
    .mergeMap(({ payload }) =>
      Rx.Observable.of(addTaskSetData({
        description: payload,
      })));

export const addTaskToggleTimeModeEpic = (action$, store) => {
  return action$.ofType(ADD_TASK_TOGGLE_TIMEMODE)
    .mergeMap(() => {
      const addTaskState = store.getState().scenes.dashboard.addTask;
      const targetTime = store.getState().data.settings.target.working;
      return Rx.Observable.of(addTaskSetData({
        timeRequired: addTaskState.timeMode
          ? timeToPomodorosSelector(store.getState()) * targetTime
          : addTaskState.timeRequired,
        timeMode: !addTaskState.timeMode,
      }));
    });
};

export const addTaskTimeChangeEpic = action$ =>
  action$.ofType(ADD_TASK_TIME_CHANGE)
    .mergeMap(({ payload }) => Rx.Observable.of(addTaskSetData({
      timeRequired: payload,
    })));

export const addTaskSaveEpic = action$ =>
  action$.ofType(ADD_TASK_SAVE)
    .mergeMap((action) => {
      const { callback, ...newTask } = action.payload;
      return Rx.Observable.concat(
        Rx.Observable.of(addTaskSetData({
          isSaving: true,
        })),
        Rx.Observable.of(tasksAdd({
          type: 'pending',
          newTask,
        })).debounceTime(1000).delay(1000),
        Rx.Observable.of(addTaskSetData({
          isSaving: false,
        })),
        Rx.Observable.of(addTaskReset()),
        Rx.Observable.of(callback),
      );
    });

/**
 * REDUCER
 */

export default handleActions({
  [ADD_TASK_SET_DATA]: (state, { payload }) => ({ ...state, ...payload }),
  [ADD_TASK_RESET]: () => initialState,
}, initialState);
