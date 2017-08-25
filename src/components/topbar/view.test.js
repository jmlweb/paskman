import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import TopbarView from './view';

function setup() {
  const props = {
    menuOpen: false,
    toggleMenu: jest.fn(),
    handleTouchMove: jest.fn(),
    lastY: 5,
    opacity: 1,
  };

  const enzymeWrapper = shallow(<TopbarView {...props} />);

  return {
    props,
    enzymeWrapper,
  };
}

describe('TopbarView', () => {
  let toggleMenu;
  beforeEach(() => {
    toggleMenu = jest.fn();
  });
  it('should render self and subcomponents', () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper.find('.topbar')).toHaveLength(1);
    expect(enzymeWrapper.find('.wrapper')).toHaveLength(1);
    expect(enzymeWrapper.find('.nav')).toHaveLength(1);
    expect(enzymeWrapper.find('.btn')).toHaveLength(1);
    expect(enzymeWrapper.find('Menu')).toHaveLength(1);
    expect(enzymeWrapper.find('Menu').props().menuOpen).toBe(false);
    expect(toJson(enzymeWrapper)).toMatchSnapshot();
  });
});
