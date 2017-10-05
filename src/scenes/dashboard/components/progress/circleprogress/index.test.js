/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { mount } from 'enzyme';
import { spy } from 'sinon';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import ConnectedCircleProgress, { CircleProgress, mapStateToProps } from './';
import * as settingsDuck from '../../../../../data/settings/duck';
import * as pomodorosDuck from '../../../../../data/pomodoros/duck';
import * as tasksDuck from '../../../../../data/tasks/duck';
import * as mainDuck from '../../../../main/duck';

const initialState = {
  data: {
    settings: settingsDuck.initialState,
    tasks: tasksDuck.initialState,
    pomodoros: pomodorosDuck.initialState,
  },
  scenes: {
    main: mainDuck.initialState,
  },
};

describe('Connected CircleProgress', () => {
  const mockStore = configureStore();
  let store;
  let wrapper;
  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = mount(<Provider store={store}><ConnectedCircleProgress /></Provider>);
  });
  it('Render the connected component', () => {
    expect(wrapper.find(ConnectedCircleProgress).length).toEqual(1);
  });
});