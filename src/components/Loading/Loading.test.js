import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Loading from './Loading';
import LoadingWrapper from './LoadingWrapper/LoadingWrapper';

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
