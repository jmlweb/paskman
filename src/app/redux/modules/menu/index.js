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
const menuMockup = {
  open: false,
};

/**
 * REDUCER
 */
const initialState = Immutable.Map(menuMockup);

const menu = handleActions({
  [menuToggleOpen]: state => state.set('open', !state.get('open')),
}, initialState);

export default menu;
