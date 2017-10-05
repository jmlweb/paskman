/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { mount, shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import ConnectedFeaturedTask from './';
import * as settingsDuck from '../../../../data/settings/duck';
import * as pomodorosDuck from '../../../../data/pomodoros/duck';
import * as tasksDuck from '../../../../data/tasks/duck';
import * as mainDuck from '../../../main/duck';

describe('FeaturedTask', () => {
  const initialState = {
    data: {
      settings: settingsDuck.initialState,
      pomodoros: pomodorosDuck.initialState,
      tasks: tasksDuck.initialState,
    },
    scenes: {
      main: mainDuck.initialState,
    },
  };
  const mockStore = configureStore();
  let store;
  let wrapper;
  const connectedFeaturedTask = <ConnectedFeaturedTask />;
  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = mount(
      <Provider store={store}>
        {connectedFeaturedTask}
      </Provider>
    );
  });
  it('Render the connected component', () => {
    expect(wrapper.find('FeaturedTaskView').length).toEqual(1);
  });
});