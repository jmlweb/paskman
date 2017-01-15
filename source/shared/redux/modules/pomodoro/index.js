import * as Immutable from 'immutable';
import {
  createActions,
  handleActions,
} from 'redux-actions';
import { createSelector } from 'reselect';
import moment from 'moment';
import {
  MODES,
} from '../settings';
import { minToMil } from '../../../utils/parse-time';

/* ACTIONS */
const CONFIG_LOADED = 'CONFIG_LOADED';
const SET_TARGET = 'SET_TARGET';
const TOGGLE_ACTIVE = 'TOGGLE_ACTIVE';
const TOGGLE_MODE = 'TOGGLE_MODE';
const ADD_TO_TABLE = 'ADD_TO_TABLE';
const PUSH_TIME = 'PUSH_TIME';
const RESET = 'RESET';


export const {
  configLoaded,
  setTarget,
  toggleActive,
  toggleMode,
  addToTable,
  pushTime,
  reset,
} = createActions(
  CONFIG_LOADED,
  SET_TARGET,
  TOGGLE_ACTIVE,
  TOGGLE_MODE,
  ADD_TO_TABLE,
  PUSH_TIME,
  RESET,
);

/* DEFAULTS */
const PomodoroTableMockup = Immutable.Map({
  [MODES.working.name]: Immutable.List(),
  [MODES.resting.name]: Immutable.List(),
});

export const pomodoroMockup = {
  hasConfig: false,
  target: {
    working: 0,
    resting: 0,
  },
  isActive: false,
  mode: MODES.working.name,
  table: PomodoroTableMockup,
};

const targetSelector = ({ pomodoro }) => pomodoro.get('target');
const modeSelector = ({ pomodoro }) => pomodoro.get('mode');
const tableSelector = ({ pomodoro }) => pomodoro.get('table');

export const modeTargetSelector = createSelector(
  modeSelector,
  targetSelector,
  (mode, target) => minToMil(Immutable.Map(target).get(mode)),
);

export const modeTableSelector = createSelector(
  modeSelector,
  tableSelector,
  (mode, table) => table.get(mode),
);

export const elapsedTimeSelector = createSelector(
  modeTableSelector,
  (modeTable) => {
    const differencesArr = modeTable.map((timeItem) => {
      const timeStart = moment(timeItem.get('start'));
      const timeEnd = moment(timeItem.get('end'));
      return timeEnd.diff(timeStart);
    }).toJS();
    if (differencesArr.length) {
      const reduced = differencesArr.reduce((total, n) => total + n);
      if (!isNaN(reduced) && reduced > 0) {
        return reduced;
      }
    }
    return 0;
  },
);

export const amountTimeSelector = createSelector(
  modeTargetSelector,
  elapsedTimeSelector,
  (modeTarget, elapsedTime) => {
    if (elapsedTime > modeTarget) {
      return 0;
    }
    return modeTarget - elapsedTime;
  },
);


/* REDUCER */
const initialState = Immutable.Map(pomodoroMockup);

const pomodoro = handleActions({
  [configLoaded]: state => state.merge({
    hasConfig: true,
  }),
  [setTarget]: (state, action) => state.merge({
    target: action.payload,
  }),
  [toggleActive]: state => state.set('isActive', !state.get('isActive')),
  [toggleMode]: state => state.set(
    'mode',
    state.get('mode') === MODES.working.name ? MODES.resting.name : MODES.working.name,
  ),
  [pushTime]: (state, action) => {
    const type = state.get('isActive') ? 'end' : 'start';
    const mode = state.get('table').get(state.get('mode'));
    const pushedMode = type === 'start' ? mode.push(Immutable.Map({})) : mode;
    const pushedSize = pushedMode.size - 1;
    const appendedMode = pushedMode.set(
      pushedSize,
      pushedMode.get(pushedSize).set(type, action.payload),
    );
    return state.merge({
      table: state.get('table').set(state.get('mode'), appendedMode),
    });
  },
  [reset]: state => state.merge(pomodoroMockup),
}, initialState);

export default pomodoro;
