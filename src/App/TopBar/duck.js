// @flow
import {
  createAction,
  handleAction,
} from 'redux-actions';

/**
 * TYPES
 */

export type State = {
  +menuOpen: boolean,
};

/**
 * CONSTANTS
 */
export const TOP_BAR_TOGGLE_MENU: string = 'TOP_BAR/TOGGLE_MENU';

/**
 * ACTIONS
 */

export const topBarToggleMenu = createAction(TOP_BAR_TOGGLE_MENU);

/**
 * REDUCER
 */
export const initialState: State = {
  menuOpen: false,
};

const reducer = handleAction(
  TOP_BAR_TOGGLE_MENU,
  (state: State) => ({...state, menuOpen: !state.menuOpen}),
  initialState
);

export default reducer;
