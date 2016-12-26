import { createAction } from 'redux-actions';

export const TOGGLE_ENABLED = 'TOGGLE_ENABLED';
export const SET_AMOUNT = 'SET_AMOUNT';
export const SET_STATE = 'SET_STATE';

export const toggleEnabled = createAction(TOGGLE_ENABLED);
export const setAmount = createAction(SET_AMOUNT);
export const setState = createAction(SET_STATE);
