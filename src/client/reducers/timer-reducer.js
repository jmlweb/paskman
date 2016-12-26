import * as Immutable from 'immutable';
import { TOGGLE_ENABLED } from '../actions/timer-actions';

const initialState = Immutable.Map({
  isEnabled: false,
});

const timerReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_ENABLED:
      return state.set('isEnabled', action.payload);
    default:
      return state;
  }
};

export default timerReducer;
