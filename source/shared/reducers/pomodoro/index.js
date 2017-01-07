import * as Immutable from 'immutable';
import {
  POMODORO_TOGGLE_ACTIVE,
  POMODORO_TOGGLE_MODE,
  POMODORO_ADD_TO_TABLE,
  POMODORO_RESET,
} from './actions';
import {
  MODES,
} from '../../constants/pomodoro';
import pomodoroMockup from './mockup';

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
