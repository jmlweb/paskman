import reducer, { MODAL_TOGGLE, modalToggle, initialState } from './duck';

describe('Modal actions', () => {
  it('should create an action to toggle modal', () => {
    expect(modalToggle()).toEqual({
      type: MODAL_TOGGLE,
    });
  });
});

describe('Modal reducer', () => {
  it('should return initialState', () => {
    expect(initialState).toEqual({});
  });
  it('should return opened state for "dummy" key on first call', () => {
    expect(reducer(initialState, modalToggle('dummy'))).toMatchObject({
      dummy: true,
    });
  });
  it('should return closed state for "dummy" key on second call', () => {
    expect(reducer({dummy: true, other: false}, modalToggle('dummy'))).toMatchObject({
      dummy: false,
    });
  });
});
