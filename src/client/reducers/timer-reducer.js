import * as Immutable from 'immutable';
import {
  TOGGLE_ENABLED,
  SET_AMOUNT,
  SET_STATE,
} from '../actions/timer-actions';
import {
  POMODORO_MIN,
  POMODORO_STATE,
} from '../constants/timer-constants';
import { minToMil } from '../utils/parse-time';

const initialState = Immutable.Map({
  isEnabled: false,
  amount: minToMil(POMODORO_MIN),
  state: POMODORO_STATE,
});

const timerReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_ENABLED:
      return state.set('isEnabled', !state.get('isEnabled'));
    case SET_AMOUNT:
      return state.set('amount', action.payload);
    case SET_STATE:
      return state.set('state', action.payload);
    default:
      return state;
  }
};

export default timerReducer;
