import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import MainView from './view';

describe('MainView', () => {
  it('should render main', () => {
    const enzymeWrapper = shallow(<MainView><p className="find-me">Find me</p></MainView>);
    expect(enzymeWrapper.find('.find-me')).toHaveLength(1);
    expect(toJson(enzymeWrapper)).toMatchSnapshot();
  });
});
