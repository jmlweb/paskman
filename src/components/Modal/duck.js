// @flow
import {
  createAction,
  handleActions,
  type ActionType
} from 'redux-actions';

/**
 * TYPES
 */

type State = {
  +[name: string]: boolean
};

/**
 * CONSTANTS
 */
export const MODAL_TOGGLE: string = 'MODAL/TOGGLE';
export const MODAL_OPEN: string = 'MODAL/OPEN';
export const MODAL_CLOSE: string = 'MODAL/CLOSE';

/**
 * ACTIONS
 */

export const modalOpen = createAction(MODAL_OPEN, (name: string) => name);
export const modalClose = createAction(MODAL_CLOSE, (name: string) => name);
export const modalToggle = createAction(MODAL_TOGGLE, (name: string) => name);

/**
 * REDUCER
 */
export const initialState: State = {};

const reducer = handleActions({
  [MODAL_OPEN]: (state: State, {payload}: ActionType<typeof modalToggle>) => ({...state, [payload]: true}),
  [MODAL_CLOSE]: (state: State, {payload}: ActionType<typeof modalToggle>) => ({...state, [payload]: false}),
  [MODAL_TOGGLE]: (state: State, {payload}: ActionType<typeof modalToggle>) => ({...state, [payload]: !state[payload]}),
}, initialState);

export default reducer;
