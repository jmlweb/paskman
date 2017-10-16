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
  target: {
    working: number,
    resting: number,
  },
  pauseBetween: boolean,
  confirmEndingTask: boolean,
};

/**
 * CONSTANTS
 */
export const SETTINGS_CHANGE: string = 'SETTINGS/CHANGE';

/**
 * ACTIONS
 */

export const settingsChange = createAction(SETTINGS_CHANGE, (settings: State) => settings);

/**
 * REDUCER
 */
export const initialState: State = {
  target: {
    working: 0.1,
    resting: 0.1,
  },
  pauseBetween: false,
  confirmEndingTask: true,
};

const reducer = handleActions({
  [SETTINGS_CHANGE]: (state: State, action: ActionType<typeof settingsChange>) => {
    return {...state, ...action.payload};
  },
}, initialState);

export default reducer;

