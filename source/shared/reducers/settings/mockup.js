import {
  PAUSE_BETWEEN,
  MODES,
} from '../../constants/pomodoro';

export default {
  minutes: {
    [MODES.working.name]: MODES.working.minutes,
    [MODES.resting.name]: MODES.resting.minutes,
  },
  pauseBetween: PAUSE_BETWEEN,
};
