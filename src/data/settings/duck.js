import {
  createAction,
  handleActions,
} from 'redux-actions';
import Rx from 'rxjs';
import stateMock from '../../stateMock';

/**
 * CONSTANTS
 */
export const SETTINGS_CHANGE = 'SETTINGS/CHANGE';
export const SETTINGS_SET_LOADING = 'SETTINGS/SET_LOADING';
export const SETTINGS_FETCH = 'SETTINGS/FETCH';
export const SETTINGS_SAVE = 'SETTINGS/SAVE';

/**
 * ACTIONS
 */

export const settingsChange = createAction(SETTINGS_CHANGE, settings => settings);
export const settingsSetLoading = createAction(SETTINGS_SET_LOADING, value => value);
export const settingsFetch = createAction(SETTINGS_FETCH);
export const settingsSave = createAction(SETTINGS_SAVE, newSettings => newSettings);

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
    .mergeMap(action =>
      Rx.Observable.concat(
        Rx.Observable.of(settingsSetLoading(true)),
        Rx.Observable.of(settingsChange(action.payload))
          .delay(2000),
        Rx.Observable.of(settingsSetLoading(false))
      ));
/**
 * REDUCER
 */
export const initialState = stateMock.data.settings;

const reducer = handleActions({
  [SETTINGS_CHANGE]: (state, { payload }) => ({ ...state, ...payload }),
  [SETTINGS_SET_LOADING]: (state, { payload }) => ({ ...state, isLoading: payload }),
}, initialState);

export default reducer;

