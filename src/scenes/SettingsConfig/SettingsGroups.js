import React from 'react';
import PT from 'prop-types';

import { FormGroup, Label, OptionsSwitcher, RangeSlider } from '../../components/Form';

export const buildTimeGroup = ({ target, defaults, handleTargetSlider }) => {
  const TimeGroup = ({ mode }) => (
    <FormGroup>
      <Label>
        <b>{target[mode]}</b> minutes {mode} time
      </Label>
      <RangeSlider
        tooltip={false}
        min={defaults[mode].target.min}
        max={defaults[mode].target.max}
        step={defaults[mode].step}
        value={target[mode]}
        onChange={handleTargetSlider(mode)}
      />
    </FormGroup>
  );
  TimeGroup.propTypes = {
    mode: PT.string.isRequired,
  };
  return TimeGroup;
};

export const BoolGroup = ({ title, value, handleChange }) => (
  <FormGroup>
    <Label>{title}</Label>
    <OptionsSwitcher
      options={[
        {
          value: true,
          description: 'Yes',
        },
        {
          value: false,
          description: 'No',
        },
      ]}
      value={value}
      onChange={handleChange}
    />
  </FormGroup>
);

BoolGroup.propTypes = {
  title: PT.string.isRequired,
  value: PT.bool.isRequired,
  handleChange: PT.func.isRequired,
};
