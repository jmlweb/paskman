import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import SimpleWrapper from './SimpleWrapper';

configure({ adapter: new Adapter() });

describe('SimpleWrapper', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<SimpleWrapper><div>Dummy</div></SimpleWrapper>);
  });
  it('Render the component', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });
  it('Matchs snapshot', () => {
    const tree = renderer.create(wrapper).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
