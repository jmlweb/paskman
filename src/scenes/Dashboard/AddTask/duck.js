import {
  createAction,
  handleActions,
} from 'redux-actions';
import Rx from 'rxjs';
import stateMock from '../../../stateMock';

export const initialState = stateMock.scenes.dashboard.addTask;

/**
 * CONSTANTS
 */
export const ADD_TASK_NAME_CHANGE = 'ADD_TASK/NAME_CHANGE';
export const ADD_TASK_DESCRIPTION_CHANGE = 'ADD_TASK/DESCRIPTION_CHANGE';
export const ADD_TASK_NAME_BLUR = 'ADD_TASK/NAME_BLUR';
export const ADD_TASK_SET_DATA = 'ADD_TASK/SET_DATA';
export const ADD_TASK_SAVE_EPIC = 'ADD_TASK/SAVE_EPIC';

/**
 * ACTIONS
 */

export const addTaskNameChangeAction = createAction(ADD_TASK_NAME_CHANGE, value => ({
  value,
  isValid: value.length >= 3,
}));

export const addTaskNameBlurAction = createAction(ADD_TASK_NAME_BLUR, hasBlur => ({
  hasChanged: hasBlur,
}));

export const addTaskDescriptionChangeAction = createAction(ADD_TASK_DESCRIPTION_CHANGE);

export const addTaskSetDataAction = createAction(ADD_TASK_SET_DATA);

/**
 * EPICS
 */
export const addTaskNameChangeEpic = (action$, store) => {
  const getCurrentName = state => state.scenes.dashboard.addTask.name;
  return action$
    .filter(action => action.type === ADD_TASK_NAME_CHANGE || action.type === ADD_TASK_NAME_BLUR)
    .mergeMap(({ payload }) => Rx.Observable.of(addTaskSetDataAction({
      name: { ...getCurrentName(store.getState()), ...payload },
    })));
};

export const addTaskDescriptionChangeEpic = action$ =>
  action$.ofType(ADD_TASK_DESCRIPTION_CHANGE)
    .mergeMap(({ payload }) => Rx.Observable.of(addTaskSetDataAction({
      description: payload,
    })));

export const addTaskSaveEpic = action$ =>
  action$.ofType(ADD_TASK_SAVE_EPIC)
    .debounceTime(1000)
    .mergeMap(() => Rx.Observable.of(addTaskSetDataAction(initialState)));

/**
 * REDUCER
 */

export default handleActions({
  [ADD_TASK_SET_DATA]: (state, { payload }) => ({ ...state, ...payload }),
}, initialState);
