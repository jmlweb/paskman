import { rootReducer } from './reducer';

describe('Global reducer', () => {
  it('should return a valid object', () => {
    expect(rootReducer).toBeTruthy();
  });
});
