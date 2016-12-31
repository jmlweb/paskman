import { createAction } from 'redux-actions';

export const POMODORO_TOGGLE_ACTIVE = 'POMODORO/TOGGLE_ACTIVE';
export const POMODORO_TOGGLE_MODE = 'POMODORO/TOGGLE_MODE';
export const POMODORO_ADD_TO_TABLE = 'POMODORO/ADD_TO_TABLE';
export const POMODORO_RESET = 'POMODORO/RESET';

export const toggleActive = createAction(POMODORO_TOGGLE_ACTIVE);
export const toggleMode = createAction(POMODORO_TOGGLE_MODE);
export const addToTable = createAction(POMODORO_ADD_TO_TABLE);
export const reset = createAction(POMODORO_RESET);
