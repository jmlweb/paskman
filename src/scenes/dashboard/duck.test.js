import * as duck from './duck';

describe('actions', () => {
  it('should create an action to toggle modal', () => {
    expect(duck.dashboardToggleTasksModal()).toEqual({
      type: duck.DASHBOARD_TOGGLE_TASKS_MODAL,
    });
  });
});
