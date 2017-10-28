import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import createDynamicComponent from './DynamicComponent';

describe('DynamicComponent', () => {
  it('should render the dynamic component with import', () => {
    const component = createDynamicComponent(
      () => import('../Button'),
      () => require('../Button'),
    );
    expect(mount(<component />)).toBeTruthy();
  });
  it('should render the dynamic component with require', () => {
    const component = createDynamicComponent(
      null,
      () => require('../Button'),
      true,
    );
    expect(mount(<component />)).toBeTruthy();
  });
  it('Matchs snapshot', () => {
    const component = createDynamicComponent(
      () => import('../Button'),
      () => require('../Button'),
      true,
    );
    const wrapper = mount(<component />);
    const tree = renderer.create(wrapper).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
