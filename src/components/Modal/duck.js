import {
  createAction,
  handleActions,
} from 'redux-actions';

/**
 * CONSTANTS
 */
export const MODAL_TOGGLE = 'MODAL/TOGGLE';
export const MODAL_OPEN = 'MODAL/OPEN';
export const MODAL_CLOSE = 'MODAL/CLOSE';

/**
 * ACTIONS
 */

export const modalOpen = createAction(MODAL_OPEN, name => name);
export const modalClose = createAction(MODAL_CLOSE, name => name);
export const modalToggle = createAction(MODAL_TOGGLE, name => name);

/**
 * REDUCER
 */
export const initialState = {};

const reducer = handleActions({
  [MODAL_OPEN]: (state, {payload}) => ({...state, [payload]: true}),
  [MODAL_CLOSE]: (state, {payload}) => ({...state, [payload]: false}),
  [MODAL_TOGGLE]: (state, {payload}) => ({...state, [payload]: !state[payload]}),
}, initialState);

export default reducer;
