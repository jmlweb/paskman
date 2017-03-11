import * as Immutable from 'immutable';
import {
  createAction,
  handleActions,
} from 'redux-actions';
import shortid from 'shortid';

/**
 * ACTIONS
 */
const POMODOROS_ADD = 'POMODOROS/ADD';

export const pomodorosAdd = createAction(POMODOROS_ADD);

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
  [pomodorosAdd]: (state, action) => state.push(
    Immutable.fromJS(pomodoroMockup).merge(
      { ...action.payload, id: shortid.generate(), created: Date.now() },
    ),
  ),
}, initialState);

export default pomodoros;
