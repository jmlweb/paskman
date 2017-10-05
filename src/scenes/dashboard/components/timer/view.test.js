import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import TimerView from './view';

function setup() {
  const props = {
    amount: 0,
    progress: 0,
    state: 'stopped',
    handleClick: jest.fn(),
    handleStop: jest.fn(),
  };

  const enzymeWrapper = shallow(<TimerView />);

  return {
    props,
    enzymeWrapper,
  };
}

describe('TimerView', () => {
  it('should render self and subcomponents', () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper.find('.state').text()).toBe('stopped');
    expect(toJson(enzymeWrapper)).toMatchSnapshot();
  });
  it('should start the timer', () => {
    const { enzymeWrapper } = setup();
    enzymeWrapper.find('Btn').simulate('click');
    //expect(toJson(enzymeWrapper)).toMatchSnapshot();
  });
});
