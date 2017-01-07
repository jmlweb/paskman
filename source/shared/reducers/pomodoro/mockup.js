import * as Immutable from 'immutable';
import {
  MODES,
} from '../../constants/pomodoro';

const PomodoroTableMockup = Immutable.Map({
  [MODES.working.name]: Immutable.List(),
  [MODES.resting.name]: Immutable.List(),
});

export default {
  isActive: false,
  mode: MODES.working.name,
  table: PomodoroTableMockup,
};
