import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Heading from './Heading';

describe('Heading', () => {
  it('Render the component', () => {
    const wrapper = mount(<Heading>Dummy</Heading>);
    expect(wrapper.find(Heading).length).toEqual(1);
  });
  it('Render the component with tag', () => {
    const wrapper = mount(<Heading level="2" color="primary" tag="p">Dummy</Heading>);
    expect(wrapper.find(Heading).length).toEqual(1);
  });
  it('Render the component with level lower than 1', () => {
    const wrapper = mount(<Heading level="0">Dummy</Heading>);
    expect(wrapper.find(Heading).length).toEqual(1);
  });
  it('Render the component with level heigher than 6', () => {
    const wrapper = mount(<Heading level="7">Dummy</Heading>);
    expect(wrapper.find(Heading).length).toEqual(1);
  });
  it('Matchs snapshot', () => {
    const wrapper = mount(<Heading>Dummy</Heading>);
    const tree = renderer.create(wrapper).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
