import * as duck from './duck';
import { settingsMockup } from '../settings/duck';

describe('actions', () => {
  it('should create an action to add a Pomodoro', () => {
    expect(duck.pomodorosAdd()).toHaveProperty('type', 'POMODOROS_ADD');
  });
  it('should create an action to add a Pomodoro Item', () => {
    expect(duck.pomodorosAddItem()).toHaveProperty('type', 'POMODOROS_ADD_ITEM');
  });
  it('should create an action to finish a Pomodoro Item', () => {
    expect(duck.pomodorosFinishItem()).toHaveProperty('type', 'POMODOROS_FINISH_ITEM');
  });
  it('should create an action change a Pomodoro Item mode', () => {
    expect(duck.pomodorosChangeMode()).toHaveProperty('type', 'POMODOROS/CHANGE_MODE');
  });
});

describe('reducer', () => {
  it('should return initialState', () => {
    expect(duck.pomodoros(undefined, [])).toBe(duck.initialState);
  });
  it('should handle pomodorosAdd', () => {
    expect(
      duck.pomodoros(duck.initialState, duck.pomodorosAdd({
        target: settingsMockup.target,
      }))[0]
    ).objectContaining({
      mode: 'working', 
      table: {'resting': [], 'working': []}, 
      target: settingsMockup.target,
    });
  });
});
