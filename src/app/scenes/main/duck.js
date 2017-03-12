import * as Immutable from 'immutable';
import {
  createAction,
  handleActions,
} from 'redux-actions';

/**
 * ACTIONS
 */
const MAIN_SET_DIMENSIONS = 'MAIN/SET_DIMENSIONS';

export const mainSetDimensions = createAction(MAIN_SET_DIMENSIONS);

/**
 * DEFAULTS
 */
const mainMockup = {
  dimensions: {
    width: 320,
    height: 568,
  },
};

/**
 * REDUCER
 */
const initialState = Immutable.Map(mainMockup);

const main = handleActions({
  [mainSetDimensions]: (state, action) => state.set('dimensions', action.payload),
}, initialState);

export default main;
