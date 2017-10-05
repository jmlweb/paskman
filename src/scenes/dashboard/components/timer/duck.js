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
export const TIMER_SET_IS_CHANGING = 'TIMER/SET_IS_CHANGING';

export const timerSetMode = createAction(TIMER_SET_MODE);
export const timerSetAmount = createAction(TIMER_SET_AMOUNT);
export const timerSetIsChanging = createAction(TIMER_SET_IS_CHANGING);

/**
 * DEFAULTS
 */
const timerMockup = {
  mode: 'stopped',
  amount: 0,
  isChanging: false,
};

/**
 * REDUCER
 */
export const initialState = Immutable.Map(timerMockup);

const timer = handleActions({
  [timerSetMode]: (state, action) => state.set('mode', action.payload),
  [timerSetAmount]: (state, action) => state.set('amount', action.payload),
  [timerSetIsChanging]: (state, action) => state.set('isChanging', action.payload),
}, initialState);

export default timer;
