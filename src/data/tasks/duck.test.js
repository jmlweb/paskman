import * as duck from './duck';

describe('actions', () => {
  it('should create an action to add a Task', () => {
    expect(duck.tasksAdd()).toHaveProperty('type', duck.TASKS_ADD);
  });
});
