import constants from './constants';

describe('Dashboard constants', () => {
  it('should return a valid object', () => {
    expect(constants).toBeTruthy();
  });
  it('should have the add task modal name key', () => {
    expect(constants).toHaveProperty('addTaskModalName');
  });
});
