import * as Immutable from 'immutable';
import {
  TOGGLE_ENABLED,
  SET_AMOUNT,
} from '../actions/timer-actions';

const initialState = Immutable.Map({
  isEnabled: false,
  amount: 0,
});

const timerReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_ENABLED:
      return state.set('isEnabled', !state.get('isEnabled'));
    case SET_AMOUNT:
      return state.set('amount', action.payload);
    default:
      return state;
  }
};

export default timerReducer;
