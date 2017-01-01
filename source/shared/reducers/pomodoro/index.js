import * as Immutable from 'immutable';
import {
  POMODORO_TOGGLE_ACTIVE,
  POMODORO_TOGGLE_MODE,
  POMODORO_ADD_TO_TABLE,
  POMODORO_RESET,
} from './actions';
import {
  WORKING_MODE,
  RESTING_MODE,
} from '../../constants/pomodoro';

const mockup = {};
const tableMockup = Immutable.Map({
  [WORKING_MODE]: Immutable.List(),
  [RESTING_MODE]: Immutable.List(),
});


mockup.isActive = false;
mockup.mode = WORKING_MODE;
mockup.table = tableMockup;

const initialState = Immutable.fromJS(mockup);

const pomodoro = (state = initialState, action) => {
  switch (action.type) {
    // case POMODORO_TOGGLE_ACTIVE:
    //   return {
    //     isActive: !state.isActive,
    //   };
    // case POMODORO_TOGGLE_MODE:
    //   return Object.assign({}, state, {
    //     mode: state.mode === WORKING_MODE ? RESTING_MODE : WORKING_MODE,
    //   });
    // case POMODORO_ADD_TO_TABLE:
    //   return Object.assign(
    //     {},
    //     state.table,
    //     state.table.set(action.payload.mode, action.payload.table),
    //   );
    // case POMODORO_RESET:
    //   return state.merge(mockup);
    default:
      return Immutable.Map.isMap(state) ? state : Immutable.Map(state);
  }
};

export default pomodoro;
