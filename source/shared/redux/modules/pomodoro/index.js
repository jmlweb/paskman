import * as Immutable from 'immutable';
import { createAction } from 'redux-actions';
import {
  MODES,
} from '../settings';

/* ACTIONS */
const POMODORO_TOGGLE_ACTIVE = 'POMODORO/TOGGLE_ACTIVE';
const POMODORO_TOGGLE_MODE = 'POMODORO/TOGGLE_MODE';
const POMODORO_ADD_TO_TABLE = 'POMODORO/ADD_TO_TABLE';
const POMODORO_RESET = 'POMODORO/RESET';

export const toggleActive = createAction(POMODORO_TOGGLE_ACTIVE);
export const toggleMode = createAction(POMODORO_TOGGLE_MODE);
export const addToTable = createAction(POMODORO_ADD_TO_TABLE);
export const reset = createAction(POMODORO_RESET);


/* DEFAULTS */
const PomodoroTableMockup = Immutable.Map({
  [MODES.working.name]: Immutable.List(),
  [MODES.resting.name]: Immutable.List(),
});

export const pomodoroMockup = {
  isActive: false,
  mode: MODES.working.name,
  table: PomodoroTableMockup,
};

/* REDUCER */
const initialState = Immutable.Map(pomodoroMockup);

const pomodoro = (state = initialState, action) => {
  switch (action.type) {
    case POMODORO_TOGGLE_ACTIVE:
      return state.merge({
        isActive: !state.get('isActive'),
      });
    case POMODORO_TOGGLE_MODE:
      return state.merge({
        mode: state.get('mode') === MODES.working.name ? MODES.resting.name : MODES.working.name,
      });
    case POMODORO_ADD_TO_TABLE:
      return state.set('table', state.get('table').set(action.payload.mode, action.payload.table));
    case POMODORO_RESET:
      return state.merge(pomodoroMockup);
    default:
      return state;
  }
};

export default pomodoro;
