import * as Immutable from 'immutable';
import {
  createAction,
  handleActions,
} from 'redux-actions';

/**
 * ACTIONS
 */
export const TIMER_SET_MODE = 'TIMER/SET_MODE';

export const timerSetMode = createAction(TIMER_SET_MODE);

/**
 * DEFAULTS
 */
const timerMockup = {
  mode: 'stopped',
};

/**
 * REDUCER
 */
const initialState = Immutable.Map(timerMockup);

const timer = handleActions({
  [timerSetMode]: (state, action) => state.set('mode', action.payload),
}, initialState);

export default timer;
