import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import createDynamicComponent from './';

configure({ adapter: new Adapter() });

Object.defineProperty(window.navigator, "userAgent", (function(_value){
  return {
    get: function _get() {
      return _value;
    },
    set: function _set(v) {
        _value = v;
    }
  };
})(window.navigator.userAgent));
Object.defineProperty(window, "reactSnapshotRender", (function(_value){
  return {
    get: function _get() {
      return _value;
    },
    set: function _set(v) {
        _value = v;
    }
  };
})(window.reactSnapshotRender));

describe('DynamicComponent', () => {
  let wrapper;
  beforeEach(() => {
    window.navigator.userAgent = 'Node.js';
    window.reactSnapshotRender = true;
    const component = createDynamicComponent(
      () => import('../../scenes/Home'), () => require('../../scenes/Home')
    );
    wrapper = mount(<component />);
  });
  it('should render the dynamic component with require', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });
  it('Matchs snapshot', () => {
    const tree = renderer.create(wrapper).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
