import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import Button from './Button';

configure({ adapter: new Adapter() });

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
