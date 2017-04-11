import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import DashboardView from './view';

describe('TopbarView', () => {
  it('should render dashboard', () => {
    const enzymeWrapper = shallow(<DashboardView />);
    expect(toJson(enzymeWrapper)).toMatchSnapshot();
  });
});