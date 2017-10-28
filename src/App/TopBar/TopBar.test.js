import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import TopBar from './TopBar';

describe('TopBar', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<TopBar menuOpen={true} topBarToggleMenu={jest.fn()} routes={[]} />);
  });
  it('Render the component', () => {
    expect(wrapper.find(TopBar).length).toEqual(1);
  });
  it('Matchs snapshot', () => {
    const tree = renderer.create(wrapper).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
