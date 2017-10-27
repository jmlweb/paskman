import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Label from './Label';

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
