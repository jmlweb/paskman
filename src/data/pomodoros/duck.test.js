import * as duck from './duck';

describe('actions', () => {
  it('should create an action to add a Pomodoro', () => {
    expect(duck.pomodorosAdd()).toHaveProperty('type', 'POMODOROS_ADD');
  });
  it('should create an action to add a Pomodoro Item', () => {
    expect(duck.pomodorosAddItem()).toHaveProperty('type', 'POMODOROS_ADD_ITEM');
  });
});
