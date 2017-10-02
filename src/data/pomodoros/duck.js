import * as Immutable from 'immutable';
import {
  createAction,
  createActions,
  handleActions,
} from 'redux-actions';
import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';
import shortid from 'shortid';
import { minToMil } from '../../utils/parsetime';

/**
 * DEFAULTS
 */
export const pomodoroTableItemMockup = {
  start: null,
  end: null,
  // task: null, //only added if its a working interval
};

export const pomodoroTableMockup = {
  working: [],
  resting: [],
};

export const pomodoroMockup = {
  id: null,
  created: null,
  target: {
    working: 0,
    resting: 0,
  },
  mode: null,
  table: pomodoroTableMockup,
};

export const pomodorosMockup = [];

/**
 * ACTIONS
 */
export const POMODOROS_ADD = 'POMODOROS/ADD';
export const POMODOROS_ADD_ITEM = 'POMODOROS/ADD_ITEM';
export const POMODOROS_FINISH_ITEM = 'POMODOROS/FINISH_ITEM';
export const POMODOROS_CHANGE_MODE = 'POMODOROS/CHANGE_MODE';

export const {
  pomodorosAdd,
  pomodorosAddItem,
  pomodorosFinishItem,
} = createActions({
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

export const pomodorosChangeMode = createAction(POMODOROS_CHANGE_MODE);

/*
 * SELECTORS
 */

export const lastPomodoroSelector = (state) => {
  return (state && state.last()) || Immutable.fromJS(pomodoroMockup);
};

const modeSelector = createSelector(
  lastPomodoroSelector,
  lastPomodoro => lastPomodoro.get('mode')
);
export const modeTimeSelector = createSelector(
  lastPomodoroSelector,
  modeSelector,
  (lastPomodoro, mode) => lastPomodoro && minToMil(lastPomodoro.get('target').get(mode)),
);
const lastModeTableSelector = createSelector(
  lastPomodoroSelector,
  modeSelector,
  (lastPomodoro, mode) => lastPomodoro && lastPomodoro.get('table').get(mode),
);
export const previousElapsedTimeSelector = createSelector(
  lastModeTableSelector,
  lastModeTable => lastModeTable && lastModeTable.reduce((sum, item) => {
    let toSum = 0;
    if (item.end) {
      toSum = item.end - item.start;
    }
    return sum + toSum;
  }, 0),
);
export const lastModeEntrySelector = createSelector(
  lastModeTableSelector,
  lastModeTable => lastModeTable && lastModeTable.last(),
);

export const taskPomodorosSelector = createSelector(
  state => state,
  pomodoros => memoize(
    (taskId) => {
      function filterByMode(table, mode) {
        return table.get(mode).filter(tableItem => tableItem.task === taskId);
      }

      function filterByAllModes(table) {
        return filterByMode(table, 'working').join(filterByMode(table, 'resting'));
      }
      return pomodoros.filter(
        pomodoro => filterByAllModes(pomodoro.get('table')),
      );
    },
  ),
);

export function elapsedTimeSelector(pomodoros, taskId, mode = 'working') {
  const taskPomodorosFilter = taskPomodorosSelector(pomodoros);
  return taskPomodorosFilter(taskId).reduce(
    (elapsedTime, pomodoro) =>
      elapsedTime + pomodoro.get('table').get(mode).reduce(
        (tableElapsedTime, tableItem) => {
          return tableElapsedTime + ((tableItem.end || Date.now()) - tableItem.start);
        }, 0)
  , 0);
}

/**
 * REDUCER
 */
export const initialState = Immutable.List(pomodorosMockup);

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
    const lastPomodoroTableMode = lastModeTableSelector(state);
    const newValue = Immutable.Map(lastPomodoroTableMode.last()).set('end', action.payload.end).toJS();
    const newTable = lastPomodoro.get('table').merge({
      [`${lastPomodoro.get('mode')}`]: lastPomodoroTableMode.set(-1, newValue),
    });
    const newState = state.set(-1, state.get(-1).merge({ table: newTable }));
    return newState;
  },
  [pomodorosChangeMode]: (state) => {
    let newMode = 'resting';
    if (state.get(-1).get('mode') === 'resting') {
      newMode = 'working';
    }
    if (typeof state.get(-1) === 'undefined') {
      return state;
    }
    return state.set(-1, state.get(-1).merge({
      mode: newMode,
    }));
  },
}, initialState);

export default pomodoros;
