import * as Immutable from 'immutable';
import {
  SETTINGS_FETCH,
  SETTINGS_SET_MINUTES,
  SETTINGS_SET_PAUSE_BETWEEN,
} from './actions';
import settingsMockup from './mockup';

const initialState = Immutable.Map(settingsMockup);

const settings = (state = initialState, action) => {
  switch (action.type) {
    case SETTINGS_SET_MINUTES:
      return state.merge({
        minutes: state.get('minutes').set(action.payload.mode, action.payload.value),
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
