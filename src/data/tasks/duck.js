import * as Immutable from 'immutable';
import {
  createAction,
  handleActions,
} from 'redux-actions';
import { createSelector } from 'reselect';
import shortid from 'shortid';

/**
 * ACTIONS
 */
export const TASKS_ADD = 'TASKS/ADD';

export const tasksAdd = createAction(TASKS_ADD, payload => (
  { ...payload, id: shortid.generate(), created: Date.now() }
));

/**
 * DEFAULTS
 */
const taskMockup = {
  id: null,
  created: null,
  name: '',
  description: '',
  timeRequired: 0,
  finished: false,
  weight: 1,
};

const tasksMockup = [];

/**
 * SELECTORS
 */

const remainingTasksSelector = state => state.filter(task => !task.get('finished'));
export const remainingTasksCount = createSelector(
  remainingTasksSelector,
  remainingTasks => remainingTasks.count(),
);
export const remainingTasksTime = createSelector(
  remainingTasksSelector,
  (remainingTasks) => {
    if (!remainingTasks.count()) {
      return 0;
    }
    return remainingTasks.map(
      task => task.get('timeRequired'),
    ).reduce(
      (sum, current) => sum + current,
    );
  },
);

export const firstTaskSelector = createSelector(
  remainingTasksSelector,
  (remainingTasks) => {
    if (!remainingTasks.size) {
      return taskMockup;
    }
    return remainingTasks.first().toJS();
  },
);

/**
 * REDUCER
 */
export const initialState = Immutable.fromJS(tasksMockup);

const tasks = handleActions({
  [tasksAdd]: (state, action) => state.push(
    Immutable.fromJS(taskMockup).merge(action.payload),
  ),
}, initialState);

export default tasks;

