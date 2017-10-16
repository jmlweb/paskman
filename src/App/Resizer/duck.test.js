import reducer, { APP_SET_DIMENSIONS, appSetDimensions, initialState } from './duck';

describe('App actions', () => {
  it('should create an action to set dimensions', () => {
    expect(appSetDimensions()).toEqual({
      type: APP_SET_DIMENSIONS,
    });
  });
});

describe('Modal reducer', () => {
  it('should return initialState', () => {
    expect(initialState).toEqual({
      dimensions: {
        width: 320,
        height: 568,
      },
    });
  });
  it('should return correct dimensions', () => {
    expect(reducer(initialState, appSetDimensions({width: 600, height: 600}))).toMatchObject({
      dimensions: {
        width: 600,
        height: 600,
      },
    });
  });
});
