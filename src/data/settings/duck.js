// @flow
import {
  createAction,
  handleActions,
  type ActionType,
} from 'redux-actions';
import Rx from 'rxjs';
import stateMock from '../../stateMock';

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
export const SETTINGS_FETCH: string = 'SETTINGS/FETCH';
export const SETTINGS_SAVE: string = 'SETTINGS/SAVE';

/**
 * ACTIONS
 */

export const settingsChange = createAction(SETTINGS_CHANGE, (settings: State) => settings);
export const settingsSetLoading = createAction(SETTINGS_SET_LOADING, (value: boolean) => value);
export const settingsFetch = createAction(SETTINGS_FETCH);
export const settingsSave = createAction(SETTINGS_SAVE, (newSettings: State) => newSettings);

/**
 * EPICS
 */

export const settingsFetchEpic = action$ =>
  action$.ofType(SETTINGS_FETCH)
    .mergeMap(() =>
      Rx.Observable.concat(
        Rx.Observable.of(settingsSetLoading(true)),
        Rx.Observable.of(settingsSetLoading(false))
          .delay(2000)
      )
    );

export const settingsSaveEpic = action$ =>
  action$.ofType(SETTINGS_SAVE)
    .mergeMap((action) =>
      Rx.Observable.concat(
        Rx.Observable.of(settingsSetLoading(true)),
        Rx.Observable.of(settingsChange(action.payload))
        .delay(2000),
        Rx.Observable.of(settingsSetLoading(false))
      )
    );
/**
 * REDUCER
 */
export const initialState: State = stateMock.data.settings;

const reducer = handleActions({
  // @todo ActionType<typeof settingsChange>
  [SETTINGS_CHANGE]: (state: State, action: any) => {
    console.log(action);
    return { ...state, ...action.payload };
  },
  [SETTINGS_SET_LOADING]: (state: State, action: ActionType<typeof settingsChange>) => {
    return {...state, isLoading: action.payload};
  },
}, initialState);

export default reducer;

