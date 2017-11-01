import {
  createAction,
  handleActions,
} from 'redux-actions';
import Rx from 'rxjs';
import stateMock from '../../stateMock';

/**
 * INITIAL STATE
 */
export const initialState = stateMock.data.tasks;

/**
 * CONSTANTS
 */
export const TASKS_ADD = 'TASKS/ADD';
export const TASKS_SAVE = 'TASKS/SAVE';

/**
 * ACTIONS
 */
export const tasksAdd = createAction(TASKS_ADD, ({ type, newTask }) => ({ type, newTask }));
export const tasksSave = createAction(TASKS_SAVE, newData => newData);

/**
 * EPICS
 */
export const tasksAddEpic = (action$, store) =>
  action$.ofType(TASKS_ADD)
    .mergeMap(({ payload }) => {
      const state = store.getState().data.tasks;
      const typeState = state[`${payload.type}`];
      const newData = {
        [`${payload.type}`]: {
          ...typeState,
          list: [...typeState.list, payload.newTask].slice(0, typeState.perPage),
        },
      };
      return Rx.Observable.of(tasksSave(newData)).delay(1000);
    });

/**
 * REDUCER
 */

export default handleActions({
  [TASKS_SAVE]: (state, { payload }) => ({ ...state, ...payload }),
}, initialState);
