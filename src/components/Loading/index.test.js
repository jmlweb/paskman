import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import Loading from './';

configure({ adapter: new Adapter() });

describe('Loading', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<Loading />);
  });
  it('Render the connected component', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });
  it('Matchs snapshot', () => {
    const tree = renderer.create(wrapper).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
