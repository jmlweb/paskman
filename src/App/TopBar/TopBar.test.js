import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import TopBar from './TopBar';

configure({ adapter: new Adapter() });

describe('TopBar', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<TopBar menuOpen={true} routes={[]} />);
  });
  it('Render the component', () => {
    expect(wrapper.find(TopBar).length).toEqual(1);
  });
  it('Matchs snapshot', () => {
    const tree = renderer.create(wrapper).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
