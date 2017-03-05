import * as Immutable from 'immutable';
import {
  createAction,
  handleActions,
} from 'redux-actions';

/**
 * ACTIONS
 */
const MENU_TOGGLE_OPEN = 'MENU/TOGGLE_OPEN';

export const menuToggleOpen = createAction(MENU_TOGGLE_OPEN);

/**
 * DEFAULTS
 */
const topbarMockup = {
  menuOpen: false,
};

/**
 * REDUCER
 */
const initialState = Immutable.Map(topbarMockup);

const topbar = handleActions({
  [menuToggleOpen]: state => state.set('menuOpen', !state.get('menuOpen')),
}, initialState);

export default topbar;
