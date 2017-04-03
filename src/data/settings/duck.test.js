import * as duck from './duck';

describe('actions', () => {
  it('should create an action to change Settings', () => {
    expect(duck.settingsChange()).toHaveProperty('type', duck.SETTINGS_CHANGE);
  });
});
