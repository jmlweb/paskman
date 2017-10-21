import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import Loading from './Loading';
import LoadingWrapper from './LoadingWrapper/LoadingWrapper';

configure({ adapter: new Adapter() });

describe('Loading', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<Loading />);
  });
  it('Render the component', () => {
    expect(wrapper.find(LoadingWrapper).length).toEqual(1);
  });
  it('Matchs snapshot', () => {
    const tree = renderer.create(wrapper).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
