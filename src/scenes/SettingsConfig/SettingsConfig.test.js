import React from 'react';
import { mount } from 'enzyme';
import SettingsConfig from './SettingsConfig';

const baseProps = {
  isLoading: false,
  target: {
    working: 25,
    resting: 5,
  },
  pauseBetween: false,
  confirmEndingTask: false,
  settingsSave: jest.fn(),
};

describe('Settings Config', () => {
  it('Render the component without loading', () => {
    const wrapper = mount(<SettingsConfig {...baseProps} />);
    expect(wrapper.find('SettingsConfig').length).toEqual(1);
  });
  it('Render the component when loading', () => {
    const loadingProps = {...baseProps, isLoading: true};
    const wrapper = mount(<SettingsConfig {...loadingProps} />);
    expect(wrapper.find('SettingsConfig').length).toEqual(1);
  });
  it('Handles event', () => {
    const handleSubmit = jest.fn();
    const handlePauseBetweenChange = jest.fn();
    SettingsConfig.prototype.handleSubmit = handleSubmit;
    const wrapper = mount(<SettingsConfig {...baseProps} />);
    //wrapper.find('rangeslider').simulate('change');
    wrapper.find('input').first().simulate('change');
    wrapper.find('form').simulate('submit');
    setTimeout(() => {
      expect(handlePauseBetweenChange).toHaveBeenCalled();
      expect(handleSubmit).toHaveBeenCalled();
    }, 500);
  });
});
