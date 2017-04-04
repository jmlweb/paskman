import * as duck from './duck';

describe('actions', () => {
  it('should create an action to toggle modal', () => {
    expect(duck.modalToggle()).toEqual({
      type: duck.MODAL_TOGGLE,
    });
  });
});

describe('reducers', () => {
  const firstCall = duck.default(undefined, {
    type: duck.MODAL_TOGGLE,
    payload: 'testing'
  });
  it('should open the modal', () => {
    expect(
      firstCall.toJS(),
    ).toEqual({
      'testing': true,
    });
  });
  it('should close the modal', () => {
    expect(
      duck.default(firstCall, {
        type: duck.MODAL_TOGGLE,
        payload: 'testing'
      }).toJS(),
    ).toEqual({
      'testing': false,
    });
  });
});
