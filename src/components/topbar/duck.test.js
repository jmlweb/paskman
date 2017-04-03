import * as duck from './duck';

describe('actions', () => {
  it('should create an action to toggle menu', () => {
    expect(duck.menuToggleOpen()).toEqual({
      type: duck.MENU_TOGGLE_OPEN,
    });
  });
});

describe('reducers', () => {
  it('should return the initial state', () => {
    expect(
      duck.default(undefined, {}),
    ).toEqual(duck.initialState);
  });
  it('should handle toggle menu', () => {
    expect(
      duck.default(duck.initialState, {
        type: duck.MENU_TOGGLE_OPEN,
      }),
    ).toEqual(duck.initialState.set('menuOpen', true));
  });
  it('should handle toggle menu', () => {
    expect(
      duck.default(duck.initialState.set('menuOpen', true), {
        type: duck.MENU_TOGGLE_OPEN,
      }),
    ).toEqual(duck.initialState);
  });
});
