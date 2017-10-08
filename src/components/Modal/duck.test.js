import { MODAL_TOGGLE, modalToggle } from './duck';

describe('Modal actions', () => {
  it('should create an action to toggle modal', () => {
    expect(modalToggle()).toEqual({
      type: MODAL_TOGGLE,
    });
  });
});
