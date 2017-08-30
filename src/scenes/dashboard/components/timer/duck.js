import * as Immutable from 'immutable';
import {
  createAction,
  handleActions,
} from 'redux-actions';

/**
 * ACTIONS
 */
export const TIMER_SET_MODE = 'TIMER/SET_MODE';
export const TIMER_SET_AMOUNT = 'TIMER/SET_AMOUNT';

export const timerSetMode = createAction(TIMER_SET_MODE);
export const timerSetAmount = createAction(TIMER_SET_AMOUNT);

/**
 * DEFAULTS
 */
const timerMockup = {
  mode: 'stopped',
  amount: 0,
};

/**
 * REDUCER
 */
export const initialState = Immutable.Map(timerMockup);

const timer = handleActions({
  [timerSetMode]: (state, action) => state.set('mode', action.payload),
  [timerSetAmount]: (state, action) => state.set('amount', action.payload),
}, initialState);

export default timer;
