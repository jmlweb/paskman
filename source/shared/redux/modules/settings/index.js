import * as Immutable from 'immutable';
import { createAction } from 'redux-actions';

/* ACTIONS */
const SETTINGS_FETCH = 'SETTINGS/FETCH';
const SETTINGS_SET = 'SETTINGS/SET';

export const settingsFetch = createAction(SETTINGS_FETCH);
export const settingsSet = createAction(SETTINGS_SET);

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
    case SETTINGS_SET:
      return state.merge(action.payload);
    case SETTINGS_FETCH:
    default:
      return state;
  }
};

export default settings;
