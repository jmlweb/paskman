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
export const SETTINGS_SET_FETCHING = 'SETTINGS/SET_FETCHING';
export const SETTINGS_SET_SAVING = 'SETTINGS/SET_SAVING';
export const SETTINGS_FETCH = 'SETTINGS/FETCH';
export const SETTINGS_SAVE = 'SETTINGS/SAVE';

/**
 * ACTIONS
 */

export const settingsChange = createAction(SETTINGS_CHANGE, settings => settings);
export const settingsSetFetching = createAction(SETTINGS_SET_FETCHING, value => value);
export const settingsFetch = createAction(SETTINGS_FETCH);
export const settingsSave = createAction(SETTINGS_SAVE, newSettings => newSettings);
export const settingsSetSaving = createAction(SETTINGS_SET_SAVING, value => value);

/**
 * EPICS
 */

export const settingsFetchEpic = action$ =>
  action$.ofType(SETTINGS_FETCH)
    .mergeMap(() =>
      Rx.Observable.concat(
        Rx.Observable.of(settingsSetFetching(true)),
        Rx.Observable.of(settingsSetFetching(false))
          .delay(2000),
      ));

export const settingsSaveEpic = action$ =>
  action$.ofType(SETTINGS_SAVE)
    .mergeMap(action =>
      Rx.Observable.concat(
        Rx.Observable.of(settingsSetSaving(true)),
        Rx.Observable.of(settingsChange(action.payload))
          .debounceTime(1000)
          .delay(2000),
        Rx.Observable.of(settingsSetSaving(false)),
      ));
/**
 * REDUCER
 */
export const initialState = stateMock.data.settings;

export default handleActions({
  [SETTINGS_CHANGE]: (state, { payload }) => ({ ...state, ...payload }),
  [SETTINGS_SET_FETCHING]: (state, { payload }) => ({ ...state, isFetching: payload }),
  [SETTINGS_SET_SAVING]: (state, { payload }) => ({ ...state, isSaving: payload }),
}, initialState);
