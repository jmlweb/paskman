import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import Label from './Label';

configure({ adapter: new Adapter() });

describe('Label', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<Label>Dummy</Label>);
  });
  it('Render the component', () => {
    expect(wrapper.find(Label).length).toEqual(1);
  });
  it('Matchs snapshot', () => {
    const tree = renderer.create(wrapper).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
