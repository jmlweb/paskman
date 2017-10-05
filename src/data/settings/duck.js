import * as Immutable from 'immutable';
import {
  createAction,
  handleActions,
} from 'redux-actions';

/**
 * ACTIONS
 */
export const SETTINGS_CHANGE = 'SETTINGS/CHANGE';

export const settingsChange = createAction(SETTINGS_CHANGE);

/**
 * DEFAULTS
 */
const settingsMockup = {
  target: {
    working: 0.1,
    resting: 0.1,
  },
  pauseBetween: false,
};

/**
 * REDUCER
 */
export const initialState = Immutable.Map(settingsMockup);

const settings = handleActions({
  [settingsChange]: (state, action) => state.set(action.payload),
}, initialState);

export default settings;

