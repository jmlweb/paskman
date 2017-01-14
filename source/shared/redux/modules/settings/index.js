import * as Immutable from 'immutable';
import { createAction } from 'redux-actions';

/* ACTIONS */
const SETTINGS_FETCH = 'SETTINGS/FETCH';
const SETTINGS_SET_MODE = 'SETTINGS/SET_MODE';
const SETTINGS_SET_PAUSE_BETWEEN = 'SETTINGS/SET_PAUSE_BETWEEN';

export const settingsFetch = createAction(SETTINGS_FETCH);
export const settingsSetMode = createAction(SETTINGS_SET_MODE);
export const settingsSetPauseBetween = createAction(SETTINGS_SET_PAUSE_BETWEEN);

/* DEFAULTS */
const PAUSE_BETWEEN = true;
export const MODES = {
  working: {
    name: 'working',
    minutes: 25,
  },
  resting: {
    name: 'resting',
    minutes: 5,
  },
};

export const settingsMockup = {
  modes: MODES,
  pauseBetween: PAUSE_BETWEEN,
};

/* REDUCER */
const initialState = Immutable.fromJS(settingsMockup);

const settings = (state = initialState, action) => {
  switch (action.type) {
    case SETTINGS_SET_MODE:
      return state.merge({
        modes: state.get('modes').set(action.payload.mode, action.payload.value),
      });
    case SETTINGS_SET_PAUSE_BETWEEN:
      return state.merge({
        pauseBetween: action.payload,
      });
    case SETTINGS_FETCH:
    default:
      return state;
  }
};

export default settings;
