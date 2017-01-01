import * as Immutable from 'immutable';
import {
  WORKING_MODE,
  RESTING_MODE,
} from '../../constants/pomodoro';

const PomodoroTableMockup = Immutable.Map({
  [WORKING_MODE]: Immutable.List(),
  [RESTING_MODE]: Immutable.List(),
});

export default {
  isActive: false,
  mode: WORKING_MODE,
  table: PomodoroTableMockup,
};
