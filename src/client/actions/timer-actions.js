import { createAction } from 'redux-actions';

export const TOGGLE_ENABLED = 'TOGGLE_ENABLED';
export const SET_AMOUNT = 'SET_AMOUNT';

export const toggleEnabled = createAction(TOGGLE_ENABLED);
export const setAmout = createAction(SET_AMOUNT);
