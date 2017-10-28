import {
  createAction,
  handleAction,
} from 'redux-actions';
import stateMock from '../../stateMock';

/**
 * CONSTANTS
 */
export const TOP_BAR_TOGGLE_MENU = 'TOP_BAR/TOGGLE_MENU';

/**
 * ACTIONS
 */

export const topBarToggleMenu = createAction(TOP_BAR_TOGGLE_MENU);

/**
 * REDUCER
 */
export const initialState = stateMock.app.topBar;

const reducer = handleAction(
  TOP_BAR_TOGGLE_MENU,
  state => ({ ...state, menuOpen: !state.menuOpen }),
  initialState,
);

export default reducer;
