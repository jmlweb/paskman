import * as duck from './duck';

describe('actions', () => {
  it('should create an action to add a Task', () => {
    expect(duck.tasksAdd()).toHaveProperty('type', duck.TASKS_ADD);
  });
});

describe('reducers', () => {
  it('should return the initial state', () => {
    expect(
      duck.default(undefined, {}),
    ).toEqual(duck.initialState);
  });
  it('should add a task', () => {
    const newTask = {
      id: 12,
      created: Date.now(),
      name: 'Jest testing',
      description: 'Test tasks reducer',
      timeRequired: 150000,
      finished: false,
      weight: 1,
    };
    expect(
      duck.default(duck.initialState, {
        type: duck.TASKS_ADD,
        payload: newTask,
      }).toJS(),
    ).toEqual(duck.initialState.push(newTask).toJS());
  });
  /*it('should add a second task', () => {
    expect(
      duck.default(duck.initialState.set('menuOpen', true), {
        type: duck.MENU_TOGGLE_OPEN,
      }),
    ).toEqual(duck.initialState);
  });*/
});
