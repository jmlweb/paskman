import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ModalView from './view';

function setup() {
  const props = {
    title: 'Testing',
    toggleModal: jest.fn(),
    modalOpen: false,
  };

  const enzymeWrapper = shallow(<ModalView {...props}><h1>Testing children</h1></ModalView>);

  return {
    props,
    enzymeWrapper,
  };
}

describe('ModalView', () => {
  const { enzymeWrapper } = setup();
  it('should render self and subcomponents', () => {
    expect(enzymeWrapper.find('.modal').hasClass('active')).toBe(false);
    expect(enzymeWrapper.find('h3').text()).toBe('Testing');
    expect(enzymeWrapper.find('h1').text()).toBe('Testing children');
    expect(toJson(enzymeWrapper)).toMatchSnapshot();
    enzymeWrapper.setProps({modalOpen: true});
    expect(enzymeWrapper.find('.modal').hasClass('active')).toBe(true);
  });
  /*it('should make active the modal on click', () => {
    enzymeWrapper.find('.close').simulate('click');
    expect(enzymeWrapper.find('.modal').hasClass('active')).toBe(true);
  });*/
});
