/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import ConnectedTimer from './';
import * as duck from './duck';
import * as settingsDuck from '../../../../data/settings/duck';
import * as pomodorosDuck from '../../../../data/pomodoros/duck';
import * as tasksDuck from '../../../../data/tasks/duck';
import * as mainDuck from '../../../main/duck';

describe('Timer', () => {
  const initialState = {
    data: {
      settings: settingsDuck.initialState,
      tasks: tasksDuck.initialState,
      pomodoros: pomodorosDuck.initialState,
    },
    scenes: {
      main: mainDuck.initialState,
      dashboard: {
        components: {
          timer: duck.initialState,
        },
      },
    },
  };
  const mockStore = configureStore();
  let store;
  let wrapper;
  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = mount(<Provider store={store}><ConnectedTimer /></Provider>);
  });
  it('Render the connected component', () => {
    expect(wrapper.find(ConnectedTimer).length).toEqual(1);
  });
});
