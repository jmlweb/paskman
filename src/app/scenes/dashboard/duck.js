import * as Immutable from 'immutable';
import {
  createAction,
  handleActions,
} from 'redux-actions';

/**
 * ACTIONS
 */
const DASHBOARD_TOGGLE_TASKS_MODAL = 'DASHBOARD/TOGGLE_TASKS_MODAL';

export const dashboardToggleTasksModal = createAction(DASHBOARD_TOGGLE_TASKS_MODAL);

/**
 * DEFAULTS
 */
const dashboardMockup = {
  tasksModalOpen: false,
};

/**
 * REDUCER
 */
const initialState = Immutable.Map(dashboardMockup);

const dashboard = handleActions({
  [dashboardToggleTasksModal]: state => state.set('tasksModalOpen', !state.get('tasksModalOpen')),
}, initialState);

export default dashboard;
