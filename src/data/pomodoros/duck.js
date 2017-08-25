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
  // task: null, //only added if its a working interval
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
export const POMODOROS_ADD = 'POMODOROS/ADD';
export const POMODOROS_ADD_ITEM = 'POMODOROS/ADD_ITEM';
export const POMODOROS_FINISH_ITEM = 'POMODOROS/ADD_ITEM';

export const { pomodorosAdd, pomodorosAddItem, pomodorosFinishItem } = createActions({
  POMODOROS_ADD: payload => (
    { ...pomodoroMockup, ...payload, id: shortid.generate(), created: Date.now(), mode: 'working' }
  ),
  POMODOROS_ADD_ITEM: payload => (
    { ...pomodoroTableItemMockup, ...payload, start: Date.now() }
  ),
  POMODOROS_FINISH_ITEM: payload => (
    { ...pomodoroTableItemMockup, ...payload, end: Date.now() }
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
    const newState = state.set(-1, state.get(-1).merge({ table: newTable }));
    return newState;
  },
  [pomodorosFinishItem]: (state, action) => {
    const lastPomodoro = lastPomodoroSelector(state);
    const lastPomodoroTableMode = lastPomodoro.get('table').get(lastPomodoro.get('mode'));
    const newValue = Immutable.Map(lastPomodoroTableMode.last()).set('end', action.payload.end).toJS();
    const newTable = lastPomodoro.get('table').merge({
      [`${lastPomodoro.get('mode')}`]: lastPomodoroTableMode.set(-1, newValue),
    });
    const newState = state.set(-1, state.get(-1).merge({ table: newTable }));
    return newState;
  },
}, initialState);

export default pomodoros;
