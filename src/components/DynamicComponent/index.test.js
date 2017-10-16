import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import createDynamicComponent from './';

configure({ adapter: new Adapter() });

describe('DynamicComponent', () => {
  it('should render the dynamic component with import', () => {
    const component = createDynamicComponent(
      () => import('../../scenes/Home'),
      () => require('../../scenes/Home'),
    );
    expect(mount(<component />)).toBeTruthy();
  });
  it('should render the dynamic component with require', () => {
    const component = createDynamicComponent(
      null,
      () => require('../../scenes/Home'),
      true,
    );
    expect(mount(<component />)).toBeTruthy();
  });
  it('Matchs snapshot', () => {
    const component = createDynamicComponent(
      () => import('../../scenes/Home'),
      () => require('../../scenes/Home'),
      true,
    );
    const wrapper = mount(<component />);
    const tree = renderer.create(wrapper).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
