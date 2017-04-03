import * as duck from './duck';

describe('actions', () => {
  it('should create an action to set Dimensions', () => {
    expect(duck.mainSetDimensions()).toEqual({
      type: duck.MAIN_SET_DIMENSIONS,
    });
  });
});
