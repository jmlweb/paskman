import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Button from './Button';

describe('Button', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<Button color="primary">Dummy</Button>);
  });
  it('Render the component', () => {
    expect(wrapper.find(Button).length).toEqual(1);
  });
  it('Matchs snapshot', () => {
    const tree = renderer.create(wrapper).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
