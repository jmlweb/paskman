import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { AddTask } from './AddTask';

describe('Heading', () => {
  it('Render the component', () => {
    const wrapper = mount(<AddTask />);
    expect(wrapper.find(AddTask).length).toEqual(1);
  });
  it('Matchs snapshot', () => {
    const wrapper = mount(<AddTask />);
    const tree = renderer.create(wrapper).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
