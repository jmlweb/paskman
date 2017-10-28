import reducer, {
  SETTINGS_CHANGE,
  SETTINGS_FETCH,
  SETTINGS_SET_FETCHING,
  SETTINGS_SAVE,
  settingsChangeAction as settingsChange,
  settingsFetchAction as settingsFetch,
  settingsSetFetchingAction as settingsSetFetching,
  settingsSaveAction as settingsSave,
  initialState,
} from './duck';

describe('Settings actions', () => {
  it('should create an action to change Settings', () => {
    expect(settingsChange()).toEqual({
      type: SETTINGS_CHANGE,
    });
  });
  it('should create an action to fetch Settings', () => {
    expect(settingsFetch()).toEqual({
      type: SETTINGS_FETCH,
    });
  });
  it('should create an action to change fetching', () => {
    expect(settingsSetFetching()).toEqual({
      type: SETTINGS_SET_FETCHING,
    });
  });
  it('should create an action to save', () => {
    expect(settingsSave()).toEqual({
      type: SETTINGS_SAVE,
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
  it('should set fetching', () => {
    expect(
      reducer(initialState, settingsSetFetching(true)).isFetching
    ).toEqual(true);
  });
});
