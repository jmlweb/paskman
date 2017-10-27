import React from 'react';
import { mount } from 'enzyme';
import Resizer from './Resizer';

describe('Resizer', () => {
  const dimensions = {
    width: 100,
    height: 100,
  };
  const appSetDimensions = jest.fn();
  const onWillMount = jest.fn();
  const onWillUnmount = jest.fn();
  let wrapper;
  beforeEach(() => {
    jest.useFakeTimers();
    Resizer.prototype.componentWillMount = onWillMount;
    Resizer.prototype.componentWillUnmount = onWillUnmount;
    wrapper = mount(
      <Resizer dimensions={dimensions} appSetDimensions={appSetDimensions} />,
      {attachTo: document.getElementById('root')}
    );
  });
  it('Render the component', () => {
    expect(wrapper).toBeTruthy();
    wrapper.unmount();
  });
  it('Render the component the second time', () => {
    window.resizeTo(1000, 1000);
    expect(wrapper).toBeTruthy();
    wrapper.unmount();
  });
});
