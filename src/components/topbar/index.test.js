/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import ConnectedTopbar from './';
import * as duck from './duck';

describe('Topbar', () => {
  const initialState = {
    components: {
      topbar: duck.initialState,
    },
  };
  const mockStore = configureStore();
  let store;
  let wrapper;
  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = mount(<Provider store={store}><ConnectedTopbar /></Provider>);
  });
  it('Render the connected component', () => {
    expect(wrapper.find(ConnectedTopbar).length).toEqual(1);
  });
});
