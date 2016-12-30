import { createAction } from 'redux-actions';

export const TOGGLE_ACTIVE = 'TOGGLE_ACTIVE';
export const SET_MODE = 'SET_MODE';
export const ADD_TO_TABLE = 'ADD_TO_TABLE';
export const POMODORO_RESET = 'POMODORO_RESET';

export const toggleActive = createAction(TOGGLE_ACTIVE);
export const setMode = createAction(SET_MODE);
export const addToTable = createAction(ADD_TO_TABLE);
export const pomodoroReset = createAction(POMODORO_RESET);
