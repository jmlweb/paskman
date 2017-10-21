import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import AddTask from './AddTask';

configure({ adapter: new Adapter() });

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
