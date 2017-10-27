import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import SimpleWrapper from './SimpleWrapper';

describe('SimpleWrapper', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<SimpleWrapper key={Date.now()}><div>Dummy</div></SimpleWrapper>);
  });
  it('Render the component', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });
  it('Matchs snapshot', () => {
    const tree = renderer.create(wrapper).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
