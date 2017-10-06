import omit from 'lodash.omit';
import * as duck from './duck';
import { settingsMockup } from '../settings/duck';

const initialPomodoroState = duck.pomodoros(undefined, []);
const secondPomodoroState = duck.pomodoros(duck.initialState, duck.pomodorosAdd({
  target: settingsMockup.target,
}));
const thirdPomodoroState = duck.pomodoros(secondPomodoroState, duck.pomodorosAdd({
  target: settingsMockup.target,
}));
const addedItemState = duck.pomodoros(thirdPomodoroState, duck.pomodorosAddItem({
  task: null
}));
const finishedItemState = duck.pomodoros(addedItemState, duck.pomodorosFinishItem());
const changedModeWithoutPomodoros = duck.pomodoros(secondPomodoroState, duck.pomodorosChangeMode());
const changedModeWithoutItems = duck.pomodoros(secondPomodoroState, duck.pomodorosChangeMode());
const changedModeWithItems = duck.pomodoros(changedModeWithoutItems, duck.pomodorosChangeMode());

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
    expect(initialPomodoroState).toBe(duck.initialState);
  });
  it('should handle pomodorosAdd', () => {
    expect(omit(secondPomodoroState.get(0).toJS(), ['created', 'id'])).toMatchObject({
      mode: 'working',
      table: {'resting': [], 'working': []},
      target: settingsMockup.target,
    });
  });
  it('should have 2 childrens after 2 calls to pomodorosAdd', () => {
    expect(thirdPomodoroState.toJS()).toHaveLength(2);
  });
  it('should handle pomodorosAddItem', () => {
    expect(addedItemState.get(-1).toJS().table.working).toHaveLength(1);
    expect(addedItemState.get(-1).toJS().table.working[0].end).toBeNull();
  });

  it('should handle pomodorosFinishItem', () => {
    expect(finishedItemState.get(-1).toJS().table.working[0].end).toBeDefined();
  });
  it('should handle pomodorosChangeMode without pomodoros', () => {
    expect(duck.pomodoros(duck.initialState, duck.pomodorosChangeMode())).toBe(duck.initialState);
  });
  it('should handle pomodorosChangeMode without items', () => {
    expect(omit(changedModeWithoutItems.get(-1).toJS(), ['created', 'id'])).toMatchObject({
      mode: 'resting',
      table: {'resting': [], 'working': []},
      target: settingsMockup.target,
    });
  });
  it('should handle pomodorosChangeMode with items', () => {
    expect(changedModeWithItems.get(-1).toJS().mode).toBe('working');
  });
});

describe('selectors', () => {
  it('should return last pomodoro', () => {
    expect(omit(duck.lastPomodoroSelector(secondPomodoroState).toJS(), ['created', 'id'])).toMatchObject({
      mode: 'working',
      table: {'resting': [], 'working': []},
      target: settingsMockup.target,
    });
  });
});