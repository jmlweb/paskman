import React from 'react';
import PT from 'prop-types';
import Modal from '../../../components/Modal/ModalContainer';
import {
  FieldSet,
  Form,
  FormGroup,
  Label,
  OptionsSwitcher,
  RangeSlider,
  TextField,
} from '../../../components/Form';
import Button from '../../../components/Button/Button';
import Loading from '../../../components/Loading/Loading';
import AddTaskButtonBar from './AddTaskButtonBar/AddTaskButtonBar';

export const AddTask = ({
  name,
  description,
  timeRequired,
  timeToPomodoros,
  timeMode,
  targetTime,
  handleNameChange,
  handleNameBlur,
  handleDescriptionChange,
  handleToggleTimeMode,
  handlePomodorosChange,
  handleTimeChange,
  handleSubmit,
}) => (
  <Form noSpacing noValidate onSubmit={handleSubmit}>
    <FieldSet>
      <FormGroup>
        <Label>Name (3 chars min)</Label>
        <TextField
          id="name"
          type="text"
          minLength="3"
          placeholder="Try to be concise"
          value={name.value}
          onChange={handleNameChange}
          onBlur={handleNameBlur}
          error={!name.isValid && name.hasChanged && 'Please, enter 3 characters or more'}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label>Description</Label>
        <TextField
          textarea
          id="description"
          placeholder="Describe the task"
          cols="80"
          rows="4"
          value={description}
          onChange={handleDescriptionChange}
        />
      </FormGroup>
      { !timeMode && (
        <FormGroup>
          <Label>Pomodoros required</Label>
          <OptionsSwitcher
            options={[1, 2, 3, 4, 5].map(pomodoros => ({
              description: `${pomodoros}`,
              value: pomodoros * targetTime, // @todo Load time from settings
            }))}
            value={timeToPomodoros * targetTime}
            onChange={handlePomodorosChange}
          />
          <AddTaskButtonBar
            timeRequired={timeRequired}
            handleToggleTimeMode={handleToggleTimeMode}
            text="Change to time"
          />
        </FormGroup>
      )}
      { timeMode && (
        <FormGroup>
          <Label>Time required</Label>
          <RangeSlider
            tooltip={false}
            min={5}
            max={targetTime * 5}
            step={5}
            value={timeRequired}
            onChange={handleTimeChange}
          />
          <AddTaskButtonBar
            timeRequired={timeRequired}
            handleToggleTimeMode={handleToggleTimeMode}
            text="Change to pomodoros"
          />
        </FormGroup>
      )}
    </FieldSet>
    <Button disabled={!name.isValid} type="submit" color="success" block>Save</Button>
  </Form>
);

AddTask.defaultProps = {
  timeMode: false,
};

AddTask.propTypes = {
  name: PT.shape({
    hasChanged: PT.bool,
    value: PT.string,
    isValid: PT.bool,
  }).isRequired,
  description: PT.string.isRequired,
  timeRequired: PT.number.isRequired,
  timeToPomodoros: PT.number.isRequired,
  timeMode: PT.bool,
  targetTime: PT.number.isRequired,
  handleNameChange: PT.func.isRequired,
  handleNameBlur: PT.func.isRequired,
  handleDescriptionChange: PT.func.isRequired,
  handleToggleTimeMode: PT.func.isRequired,
  handlePomodorosChange: PT.func.isRequired,
  handleTimeChange: PT.func.isRequired,
  handleSubmit: PT.func.isRequired,
};

const AddTaskWithModal = ({ handleReset, isSaving, modalName, ...props }) => (
  <Modal name={modalName} title="Add new task" closeCallback={handleReset}>
    <AddTask {...props} />
    {isSaving && <Loading text="Saving task..." />}
  </Modal>
);

AddTaskWithModal.propTypes = {
  handleReset: PT.func.isRequired,
  isSaving: PT.bool.isRequired,
  modalName: PT.string.isRequired,
};

export default AddTaskWithModal;
