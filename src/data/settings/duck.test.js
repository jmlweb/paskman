import reducer, { SETTINGS_CHANGE, settingsChange, initialState } from './duck';

describe('Settings actions', () => {
  it('should create an action to change Settings', () => {
    expect(settingsChange()).toEqual({
      type: SETTINGS_CHANGE,
    });
  });
});

describe('Settings reducer', () => {
  it('should return initialState', () => {
    expect(
      reducer(initialState, settingsChange(initialState))
    ).toEqual(initialState);
  });
  it('should change pauseBetween settings', () => {
    expect(
      reducer(initialState, settingsChange({...initialState, pauseBetween: true})).pauseBetween
    ).toEqual(true);
  });
});
