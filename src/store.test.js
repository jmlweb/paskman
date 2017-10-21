import {history, configureStore} from './store';

describe('History', () => {
  it('should return a valid object', () => {
    expect(history).toBeTruthy();
  });
});

describe('Store', () => {
  it('should return a valid function', () => {
    expect(configureStore()).toBeTruthy();
  });
});
