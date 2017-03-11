import * as Immutable from 'immutable';
import {
  createAction,
  handleActions,
} from 'redux-actions';
import shortid from 'shortid';

/**
 * ACTIONS
 */
const TASKS_ADD = 'TASKS/ADD';

export const tasksAdd = createAction(TASKS_ADD);

/**
 * DEFAULTS
 */
const taskMockup = {
  id: null,
  created: null,
  name: '',
  description: '',
  finished: false,
  weight: 1,
};

const tasksMockup = [];

/**
 * REDUCER
 */
const initialState = Immutable.fromJS(tasksMockup);

const tasks = handleActions({
  [tasksAdd]: (state, action) => state.push(
    Immutable.fromJS(taskMockup).merge(
      { ...action.payload, id: shortid.generate(), created: Date.now() },
    ),
  ),
}, initialState);

export default tasks;

