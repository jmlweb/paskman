import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import Heading from './Heading';

configure({ adapter: new Adapter() });

describe('Heading', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<Heading>Dummy</Heading>);
  });
  it('Render the component', () => {
    expect(wrapper.find(Heading).length).toEqual(1);
  });
  it('Render the component with tag', () => {
    wrapper.setProps({level: '2', color: 'primary', tag: 'p'});
    expect(wrapper.find(Heading).length).toEqual(1);
  });
  it('Render the component with level lower than 1', () => {
    wrapper.setProps({level: '0'});
    expect(wrapper.find(Heading).length).toEqual(1);
  });
  it('Render the component with level heigher than 6', () => {
    wrapper.setProps({level: '7'});
    expect(wrapper.find(Heading).length).toEqual(1);
  });
  it('Matchs snapshot', () => {
    const tree = renderer.create(wrapper).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
