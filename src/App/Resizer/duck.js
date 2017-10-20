// @flow
import {
  createAction,
  handleAction,
  type ActionType
} from 'redux-actions';

import stateMock from '../../stateMock';

/**
 * TYPES
 */

type Dimensions = {
  width: number,
  height: number,
};

export type State = {
  +dimensions: Dimensions,
};

/**
 * CONSTANTS
 */
export const APP_SET_DIMENSIONS: string = 'APP/SET_DIMENSIONS';

/**
 * ACTIONS
 */

export const appSetDimensions = createAction(APP_SET_DIMENSIONS, (dimensions: Dimensions) => dimensions);

/**
 * REDUCER
 */
export const initialState: State = stateMock.app.resizer;

const reducer = handleAction(
  APP_SET_DIMENSIONS,
  (state: State, {payload}: ActionType<typeof appSetDimensions>) => ({...state, dimensions: payload}),
  initialState
);

export default reducer;
