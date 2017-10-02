import * as duck from './duck';

describe('actions', () => {
  it('should create the timer actions', () => {
    expect(duck.timerSetMode()).toEqual({
      type: duck.TIMER_SET_MODE,
    });
    expect(duck.timerSetAmount()).toEqual({
      type: duck.TIMER_SET_AMOUNT,
    });
    expect(duck.timerSetIsChanging()).toEqual({
      type: duck.TIMER_SET_IS_CHANGING,
    });
  });
});
