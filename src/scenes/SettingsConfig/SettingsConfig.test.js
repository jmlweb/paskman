import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import SettingsConfig from './SettingsConfig';
import constants from './constants';

describe('Settings Config', () => {
  const handleSubmit = jest.fn();
  const handleTargetSlider = jest.fn();
  const handlePauseBetweenChange = jest.fn();
  const handleConfirmEndingTaskChange = jest.fn();
  const props = {
    target: {
      working: 25,
      resting: 5,
    },
    pauseBetween: false,
    confirmEndingTask: false,
    defaults: constants,
    handleSubmit,
    handleTargetSlider,
    handlePauseBetweenChange,
    handleConfirmEndingTaskChange,
  };
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <SettingsConfig
        {...props}
      />
    );
  });
  it('Render the component without loading', () => {
    expect(wrapper.find('SettingsConfig').length).toEqual(1);
  });
  it('Handles event', () => {
    wrapper.find('input').first().simulate('change');
    wrapper.find('form').simulate('submit');
    setTimeout(() => {
      expect(handlePauseBetweenChange).toHaveBeenCalled();
      expect(handleSubmit).toHaveBeenCalled();
    }, 500);
  });
  it('Matchs snapshot', () => {
    const tree = renderer.create(wrapper).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
