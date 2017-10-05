/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { mount, shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import ConnectedAddTask from './';
import * as modalDuck from '../../../../components/modal/duck';

describe('AddTask', () => {
  const initialState = {
    components: {
      modal: modalDuck.initialState,
    },
  };
  const mockStore = configureStore();
  let store;
  let wrapper;
  const connectedAddTask = <ConnectedAddTask />;
  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = mount(
      <Provider store={store}>
      {connectedAddTask}
      </Provider>
    );
  });
  it('Render the connected component', () => {
    expect(wrapper.find(ConnectedAddTask).length).toEqual(1);
  });
});