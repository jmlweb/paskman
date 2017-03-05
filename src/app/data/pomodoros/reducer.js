import * as Immutable from 'immutable';
import {
  createAction,
  handleActions,
} from 'redux-actions';
import shortid from 'shortid';

/**
 * ACTIONS
 */
const POMODOROS_CREATE = 'POMODOROS/CREATE';

export const pomodorosCreate = createAction(POMODOROS_CREATE);

/**
 * DEFAULTS
 */
const pomodoroTableMockup = {
  working: [],
  resting: [],
};

const pomodoroMockup = {
  id: null,
  created: null,
  target: {
    working: 0,
    resting: 0,
  },
  mode: null,
  table: pomodoroTableMockup,
};

const pomodorosMockup = [];

/**
 * REDUCER
 */
const initialState = Immutable.Map(pomodorosMockup);

const pomodoros = handleActions({
  [pomodorosCreate]: (state, action) => state.push(
    Immutable.fromJS(pomodoroMockup).merge(
      { ...action.payload, id: shortid.generate(), created: Date.now() },
    ),
  ),
}, initialState);

export default pomodoros;
