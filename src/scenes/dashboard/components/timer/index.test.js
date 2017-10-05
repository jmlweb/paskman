/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { mount } from 'enzyme';
import { spy } from 'sinon';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import ConnectedTimer, { Timer, mapStateToProps } from './';
import * as duck from './duck';
import * as settingsDuck from '../../../../data/settings/duck';
import * as pomodorosDuck from '../../../../data/pomodoros/duck';
import * as tasksDuck from '../../../../data/tasks/duck';
import * as mainDuck from '../../../main/duck';

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

describe('Connected Timer', () => {
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

describe('Timer', () => {
  const methods = {
    pomodorosAdd: spy(),
    pomodorosAddItem: spy(),
    pomodorosFinishItem: spy(),
    pomodorosChangeMode: spy(),
    timerSetMode: spy(),
    timerSetAmount: spy(),
    timerSetIsChanging: spy(),
  };
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<Timer {...mapStateToProps(initialState)} {...methods} />);
  });
  it('Test methods', () => {
    wrapper.instance().handleClick();
    wrapper.instance().componentWillUnmount();
    wrapper.setProps(
      {
        timerData: Object.assign({}, wrapper.props('timerData'), {mode: 'started', amount: 5100}),
        modeTime: 5000,
      }
    );
    wrapper.instance().handleClick();
    wrapper.instance().componentWillUnmount();
    wrapper.instance().handleInterval();
    wrapper.setProps(
      {
        timerData: Object.assign({}, wrapper.props('timerData'), {mode: 'paused', amount: 5100}),
        settings: Object.assign({}, wrapper.props('settings'), {pauseBetween: false}),
        modeTime: 6000,
      }
    );
    wrapper.instance().handleInterval();
    wrapper.instance().handleStop();
  });
});
