import * as duck from './duck';

describe('actions', () => {
  it('should create the timer actions', () => {
    expect(duck.timerSetMode()).toEqual({
      type: duck.TIMER_SET_MODE,
    });
    expect(duck.timerSetElapsed()).toEqual({
      type: duck.TIMER_SET_ELAPSED,
    });
  });
});
