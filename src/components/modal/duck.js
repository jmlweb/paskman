import * as Immutable from 'immutable';
import {
  createAction,
  handleActions,
} from 'redux-actions';

/**
 * ACTIONS
 */
export const MODAL_TOGGLE = 'MODAL/TOGGLE';

export const modalToggle = createAction(MODAL_TOGGLE);

/**
 * DEFAULTS
 */
const modalMockup = {
};

/**
 * REDUCER
 */
export const initialState = Immutable.Map(modalMockup);

const modal = handleActions({
  [modalToggle]: (state, action) => state.set(action.payload, !state.get(action.payload)),
}, initialState);

export default modal;
