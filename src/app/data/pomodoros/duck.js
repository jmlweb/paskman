import * as Immutable from 'immutable';
import {
  createActions,
  handleActions,
} from 'redux-actions';
import shortid from 'shortid';

/**
 * DEFAULTS
 */
const pomodoroTableItemMockup = {
  start: null,
  end: null,
  task: null,
};

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
 * ACTIONS
 */
export const { pomodorosAdd, pomodorosAddItem } = createActions({
  POMODOROS_ADD: payload => (
    { ...pomodoroMockup, ...payload, id: shortid.generate(), created: Date.now(), mode: 'working' }
  ),
  POMODOROS_ADD_ITEM: payload => (
    { ...pomodoroTableItemMockup, ...payload, start: Date.now() }
  ),
});

/*
 * SELECTORS
 */
export const lastPomodoroSelector = state => state.last();

/**
 * REDUCER
 */
const initialState = Immutable.List(pomodorosMockup);

const pomodoros = handleActions({
  [pomodorosAdd]: (state, action) => state.push(
    Immutable.fromJS(pomodoroMockup).merge(action.payload),
  ),
  [pomodorosAddItem]: (state, action) => {
    const lastPomodoro = lastPomodoroSelector(state);
    const newTable = lastPomodoro.get('table').merge({
      [`${lastPomodoro.get('mode')}`]: lastPomodoro.get('table').get(lastPomodoro.get('mode')).push(action.payload),
    });
    return state.set(state.last(), newTable);
  },
}, initialState);

export default pomodoros;
