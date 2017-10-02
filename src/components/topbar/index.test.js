/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
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
  it('Should handle touch', () => {
    const topbarView = wrapper.find('TopbarView');
    topbarView.find('.menu').simulate('touchmove', {
      touches: [{
        clientY: 200,
      }],
    });
    expect(topbarView.prop('lastY')).toBe(200);
    topbarView.find('.menu').simulate('touchmove', {
      touches: [{
        clientY: 1,
      }],
    });
    expect(topbarView.prop('lastY')).toBe(1);
  });
  it('Should handle toggleMenu', () => {
    const topbarView = wrapper.find('TopbarView');
    topbarView.prop('toggleMenu')();
    setTimeout(() => {
      expect(topbarView.prop('menuOpen')).toBe(true);
    }, 50);
  });
  it('Should match snapshot', () => {
    expect(toJson(wrapper.render())).toMatchSnapshot();
  });
});
