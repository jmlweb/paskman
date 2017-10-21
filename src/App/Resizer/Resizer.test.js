import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import Resizer from './Resizer';

configure({ adapter: new Adapter() });

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
    wrapper = mount(<Resizer dimensions={dimensions} appSetDimensions={appSetDimensions} />);
  });
  it('Render the component', () => {
    expect(wrapper).toBeTruthy();
  });
});
