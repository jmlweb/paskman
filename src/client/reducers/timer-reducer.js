import * as Immutable from 'immutable';
import {
  TOGGLE_ACTIVE,
  TOGGLE_MODE,
  ADD_TO_TABLE,
  POMODORO_RESET,
} from '../actions/timer-actions';
import {
  WORKING_MODE,
  RESTING_MODE,
} from '../constants/timer-constants';

const mockup = {};
const tableMockup = Immutable.Map({
  [WORKING_MODE]: Immutable.List(),
  [RESTING_MODE]: Immutable.List(),
});


mockup.isActive = false;
mockup.mode = WORKING_MODE;
mockup.table = tableMockup;

const initialState = Immutable.Map(mockup);

const pomodoroReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_ACTIVE:
      return state.set('isActive', !state.get('isActive'));
    case TOGGLE_MODE:
      return state.set('mode', state.get('mode') === WORKING_MODE ? RESTING_MODE : WORKING_MODE);
    case ADD_TO_TABLE:
      return state.set(
        'table',
        state.get('table').set(action.payload.mode, action.payload.table),
      );
    case POMODORO_RESET:
      return state.merge(mockup);
    default:
      return state;
  }
};

export default pomodoroReducer;
