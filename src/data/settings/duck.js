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

export const settingsChangeAction = createAction(SETTINGS_CHANGE, settings => settings);
export const settingsSetFetchingAction = createAction(SETTINGS_SET_FETCHING, value => value);
export const settingsFetchAction = createAction(SETTINGS_FETCH);
export const settingsSaveAction = createAction(SETTINGS_SAVE, newSettings => newSettings);
export const settingsSetSavingAction = createAction(SETTINGS_SET_SAVING, value => value);

/**
 * EPICS
 */

export const settingsFetchEpic = action$ =>
  action$.ofType(SETTINGS_FETCH)
    .mergeMap(() =>
      Rx.Observable.concat(
        Rx.Observable.of(settingsSetFetchingAction(true)),
        Rx.Observable.of(settingsSetFetchingAction(false))
          .delay(2000),
      ));

export const settingsSaveEpic = action$ =>
  action$.ofType(SETTINGS_SAVE)
    .mergeMap(action =>
      Rx.Observable.concat(
        Rx.Observable.of(settingsSetSavingAction(true)),
        Rx.Observable.of(settingsChangeAction(action.payload))
          .delay(2000),
        Rx.Observable.of(settingsSetSavingAction(false)),
      ));
/**
 * REDUCER
 */
export const initialState = stateMock.data.settings;

const reducer = handleActions({
  [SETTINGS_CHANGE]: (state, { payload }) => ({ ...state, ...payload }),
  [SETTINGS_SET_FETCHING]: (state, { payload }) => ({ ...state, isFetching: payload }),
  [SETTINGS_SET_SAVING]: (state, { payload }) => ({ ...state, isSaving: payload }),
}, initialState);

export default reducer;

