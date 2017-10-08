// @flow
import {
  createAction,
  handleAction,
  type ActionType
} from 'redux-actions';

/**
 * TYPES
 */

type State = {
  [name: string]: boolean
};

/**
 * CONSTANTS
 */
export const MODAL_TOGGLE: string = 'MODAL/TOGGLE';

/**
 * ACTIONS
 */

export const modalToggle = createAction(MODAL_TOGGLE, (name: string) => name);

/**
 * REDUCER
 */
export const initialState: State = {};

const reducer = handleAction(
  MODAL_TOGGLE,
  (state: State, {payload}: ActionType<typeof modalToggle>) => ({...state, payload: !state.payload}),
  initialState
);

export default reducer;
