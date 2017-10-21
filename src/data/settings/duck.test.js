import reducer, {
  SETTINGS_CHANGE,
  SETTINGS_SET_LOADING,
  settingsChange,
  settingsFetch,
  settingsSetLoading,
  settingsSave,
  initialState,
} from './duck';

describe('Settings actions', () => {
  it('should create an action to change Settings', () => {
    expect(settingsChange()).toEqual({
      type: SETTINGS_CHANGE,
    });
  });
  it('should create an action to fetch Settings', () => {
    expect(settingsFetch()).resolves.toEqual({
      type: SETTINGS_CHANGE,
    });
  });
  it('should create an action to change loading', () => {
    expect(settingsSetLoading()).toEqual({
      type: SETTINGS_SET_LOADING,
    });
  });
  it('should create an action to save', () => {
    expect(settingsSave()).resolves.toEqual({
      type: SETTINGS_SET_LOADING,
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
  it('should set loading', () => {
    expect(
      reducer(initialState, settingsSetLoading(true)).isLoading
    ).toEqual(true);
  });
});
