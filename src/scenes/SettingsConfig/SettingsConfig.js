import React from 'react';
import {
  Form,
  FieldSet,
  FormGroup,
  Label,
  OptionsSwitcher,
  RangeSlider,
} from '../../components/Form';
import Heading from '../../components/Heading/Heading';
import Button from '../../components/Button/Button';
import { SettingsPT } from '../../propTypes';

const SettingsConfig = ({
  target,
  pauseBetween,
  confirmEndingTask,
  defaults,
  handleSubmit,
  handleTargetSlider,
  handlePauseBetweenChange,
  handleConfirmEndingTaskChange,
}) => (
  <Form onSubmit={handleSubmit}>
    <Heading>Settings Config</Heading>
    <FieldSet>
      <FormGroup>
        <Label><b>{target.working}</b> minutes working time</Label>
        <RangeSlider
          tooltip={false}
          min={defaults.working.target.min}
          max={defaults.working.target.max}
          step={defaults.working.step}
          value={target.working}
          onChange={handleTargetSlider('working')}
        />
      </FormGroup>
      <FormGroup>
        <Label><b>{target.resting}</b> minutes resting time</Label>
        <RangeSlider
          tooltip={false}
          min={defaults.resting.target.min}
          max={defaults.resting.target.max}
          step={defaults.resting.step}
          value={target.resting}
          onChange={handleTargetSlider('resting')}
        />
      </FormGroup>
      <FormGroup>
        <Label>Pause between pomodoros?</Label>
        <OptionsSwitcher
          options={
            [
              {
                value: true,
                description: 'Yes',
              },
              {
                value: false,
                description: 'No',
              },
            ]
          }
          value={pauseBetween}
          onChange={handlePauseBetweenChange}
        />
      </FormGroup>
      <FormGroup>
        <Label>Require confirm for ending tasks</Label>
        <OptionsSwitcher
          options={
            [
              {
                value: true,
                description: 'Yes',
              },
              {
                value: false,
                description: 'No',
              },
            ]
          }
          value={confirmEndingTask}
          onChange={handleConfirmEndingTaskChange}
        />
      </FormGroup>
    </FieldSet>
    <Button type="submit" color="success" block>Save</Button>
  </Form>
);

SettingsConfig.propTypes = SettingsPT;

export default SettingsConfig;
