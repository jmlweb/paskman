import { createAction } from 'redux-actions';

export const SETTINGS_FETCH = 'SETTINGS/FETCH';
export const SETTINGS_SET_MINUTES = 'SETTINGS/SET_MINUTES';
export const SETTINGS_SET_PAUSE_BETWEEN = 'SETTINGS/SET_PAUSE_BETWEEN';

export const settingsFetch = createAction(SETTINGS_FETCH);
export const settingsSetMinutes = createAction(SETTINGS_SET_MINUTES);
export const settingsSetPauseBetween = createAction(SETTINGS_SET_PAUSE_BETWEEN);

