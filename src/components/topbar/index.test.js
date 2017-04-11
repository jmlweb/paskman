import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Topbar } from './';

describe('Topbar', () => {
  it('should render self and subcomponents', () => {
    const { enzymeWrapper } = shallow(<Topbar menuOpen={false} menuToggleOpen={jest.fn()} />);
    expect(toJson(enzymeWrapper)).toMatchSnapshot();
  });
});
