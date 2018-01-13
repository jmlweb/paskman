import React from 'react';
import { Form, FieldSet } from '../../components/Form';
import Heading from '../../components/Heading/Heading';
import Button from '../../components/Button/Button';
import { SettingsPT } from '../../propTypes';

import { buildTimeGroup, BoolGroup } from './SettingsGroups';

const SettingsConfig = ({
  target,
  pauseBetween,
  confirmEndingTask,
  defaults,
  handleSubmit,
  handleTargetSlider,
  handlePauseBetweenChange,
  handleConfirmEndingTaskChange,
}) => {
  const TimeGroup = buildTimeGroup({ target, defaults, handleTargetSlider });
  return (
    <Form onSubmit={handleSubmit}>
      <Heading>Settings Config</Heading>
      <FieldSet>
        <TimeGroup mode="working" />
        <TimeGroup mode="resting" />
        <BoolGroup
          title="Pause between pomodoros?"
          value={pauseBetween}
          handleChange={handlePauseBetweenChange}
        />
        <BoolGroup
          title="Require confirm for ending tasks"
          value={confirmEndingTask}
          handleChange={handleConfirmEndingTaskChange}
        />
      </FieldSet>
      <Button type="submit" color="success" block>
        Save
      </Button>
    </Form>
  );
};

SettingsConfig.propTypes = SettingsPT;

export default SettingsConfig;
