import {
  createAction,
  handleAction,
} from 'redux-actions';

import stateMock from '../../stateMock';
/**
 * CONSTANTS
 */
export const APP_SET_DIMENSIONS = 'APP/SET_DIMENSIONS';

/**
 * ACTIONS
 */

export const appSetDimensions = createAction(APP_SET_DIMENSIONS, dimensions => dimensions);

/**
 * REDUCER
 */
export const initialState = stateMock.app.resizer;

const reducer = handleAction(
  APP_SET_DIMENSIONS,
  (state, {payload}) => ({...state, dimensions: payload }),
  initialState,
);

export default reducer;
