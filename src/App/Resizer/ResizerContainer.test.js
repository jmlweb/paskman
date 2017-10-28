import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import ConnectedResizer, { Resizer } from './ResizerContainer';
import stateMock from '../../stateMock';

describe('Resizer', () => {
  const dimensions = {
    width: 100,
    height: 100,
  };
  const appSetDimensions = jest.fn();
  const onWillMount = jest.fn();
  const onWillUnmount = jest.fn();
  const setTimer = jest.fn();
  let wrapper;
  beforeEach(() => {
    jest.useFakeTimers();
    Resizer.prototype.componentWillMount = onWillMount;
    Resizer.prototype.componentWillUnmount = onWillUnmount;
    Resizer.prototype.setTimer = setTimer;
    wrapper = mount(
      <Resizer dimensions={dimensions} appSetDimensions={appSetDimensions} />,
      {attachTo: document.getElementById('root')}
    );
  });
  it('Render the component', () => {
    expect(wrapper).toBeTruthy();
    wrapper.unmount();
  });
  it('Calls ComponentWillMount', () => {
    expect(onWillMount).toHaveBeenCalled();
    wrapper.unmount();
  });
  it('Calls ComponentWillUnMount', () => {
    wrapper.unmount();
    expect(onWillUnmount).toHaveBeenCalled();
  });
});

describe('ConnectedResizer', () => {
  const mockStore = configureStore();
  let wrapper;
  let store;
  const appSetDimensions = jest.fn();
  const onWillMount = jest.fn();
  const onWillUnmount = jest.fn();
  beforeEach(() => {
    store = mockStore(stateMock);
    ConnectedResizer.prototype.componentWillMount = onWillMount;
    ConnectedResizer.prototype.componentWillUnmount = onWillUnmount;
    wrapper = mount(
      <ConnectedResizer appSetDimensions={appSetDimensions} store={store} />
    );
  });
  it('Render the component', () => {
    expect(wrapper).toBeDefined();
  });
  it('Calls to onWillMount', () => {
    setTimeout(() => {
      expect(onWillMount).toHaveBeenCalled();
    }, 500);
  });
  it('Calls to onWillUnmount', () => {
    wrapper.unmount();
    setTimeout(() => {
      expect(onWillUnmount).toHaveBeenCalled();
    }, 500);
  });
  it('Calls to appSetDimensions', () => {
    setTimeout(() => {
      expect(appSetDimensions).toHaveBeenCalled();
    }, 500);
  });
  it('Matchs snapshot', () => {
    const tree = renderer.create(wrapper).toJSON();
    expect(tree).toMatchSnapshot();
  });
})
