// @flow
import {
  createAction,
  handleActions,
  type ActionType,
} from 'redux-actions';

/**
 * TYPES
 */
export type State = {
  +isLoading: boolean,
  +target: {
    working: number,
    resting: number,
  },
  +pauseBetween: boolean,
  +confirmEndingTask: boolean,
};

/**
 * CONSTANTS
 */
export const SETTINGS_CHANGE: string = 'SETTINGS/CHANGE';
export const SETTINGS_SET_LOADING: string = 'SETTINGS/SET_LOADING';

/**
 * ACTIONS
 */

export const settingsChange = createAction(SETTINGS_CHANGE, (settings: State) => settings);
export const settingsSetLoading = createAction(SETTINGS_SET_LOADING, (value: boolean) => value);

/**
 * THUNKS
 */
export function settingsFetch() {
  return (dispatch: (ActionType<typeof settingsSetLoading>) => void) => {
    setTimeout(() => {
      // @todo call
      dispatch(settingsSetLoading(false));
    }, 1000);
  };
};

export function settingsSave(newSettings: State) {
  return (dispatch: (ActionType<typeof settingsSetLoading>) => void) => {
    dispatch(settingsSetLoading(true));
    setTimeout(() => {
      // @todo call
      dispatch(settingsChange({
        ...newSettings,
      }));
      dispatch(settingsSetLoading(false));
    }, 2000);
  };
}

/**
 * REDUCER
 */
export const initialState: State = {
  isLoading: false,
  target: {
    working: 25,
    resting: 5,
  },
  pauseBetween: false,
  confirmEndingTask: true,
};

const reducer = handleActions({
  // @todo ActionType<typeof settingsChange>
  [SETTINGS_CHANGE]: (state: State, action: any) => {
    return { ...state, ...action.payload };
  },
  [SETTINGS_SET_LOADING]: (state: State, action: ActionType<typeof settingsChange>) => {
    return {...state, isLoading: action.payload};
  },
}, initialState);

export default reducer;

