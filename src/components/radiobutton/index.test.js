import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import RadioButton from './';

function setup() {
  const props = {
    options: [
      {
        description: '1 pom',
        value: 25,
      },
      {
        description: '2 pom',
        value: 50,
      },
      {
        description: '3 pom',
        value: 75,
      },
      {
        description: '4 pom',
        value: 100,
      },
      {
        description: '5 pom',
        value: 125,
      },
    ],
    value: 25,
    onChange: jest.fn(),
  };

  const enzymeWrapper = shallow(<RadioButton {...props} />);

  return {
    props,
    enzymeWrapper,
  };
}

describe('RadioButton', () => {
  it('should render self and subcomponents', () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper.find('.selected').hasClass('item')).toBe(true);
    expect(enzymeWrapper.find('.item')).toHaveLength(5);
    expect(enzymeWrapper.find('.selected input').props().value).toBe(25);
    expect(toJson(enzymeWrapper)).toMatchSnapshot();
  });
});
