import { createAction } from 'redux-actions';

export const TOGGLE_ENABLED = 'TOGGLE_ENABLED';
export const toggleEnabled = createAction(TOGGLE_ENABLED, () => true);
