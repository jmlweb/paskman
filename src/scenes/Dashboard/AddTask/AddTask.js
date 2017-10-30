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
import ButtonBar from '../../../components/ButtonBar/ButtonBar';
import Button from '../../../components/Button/Button';
import constants from '../constants';

function dummy() {
  return false;
}

export const AddTask = ({
  name,
  description,
  handleNameChange,
  handleNameBlur,
  handleDescriptionChange,
}) => (
  <Form noSpacing noValidate>
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
          error={!name.isValid && name.hasChanged && 'Please, enter 3 characters at least'}
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
      {(
        <FormGroup>
          <Label>Pomodoros required</Label>
          <OptionsSwitcher
            options={[1, 2, 3, 4, 5].map(pomodoros => ({
              description: `${pomodoros}`,
              value: pomodoros * 25, // @todo Load time from settings
            }))}
            value={1 * 25}
            onChange={dummy}
          />
          <ButtonBar right>
            <Button type="button" color="primary" size="sm">Change to time</Button>
          </ButtonBar>
        </FormGroup>
      )}
      { 1 === 3 && (
        <FormGroup>
          <Label>Time required</Label>
          <RangeSlider
            tooltip={false}
            min={5}
            max={75}
            step={5}
            onChange={dummy}
          />
          <ButtonBar right>
            <Button type="button" color="primary" size="sm">Change to pomodoros</Button>
          </ButtonBar>
        </FormGroup>
      )}
    </FieldSet>
    <Button type="submit" color="success" block>Save</Button>
  </Form>
);

AddTask.propTypes = {
  name: PT.shape({
    hasChanged: PT.bool,
    value: PT.string,
    isValid: PT.bool,
  }).isRequired,
  description: PT.string.isRequired,
  handleNameChange: PT.func.isRequired,
  handleNameBlur: PT.func.isRequired,
  handleDescriptionChange: PT.func.isRequired,
};

const AddTaskWithModal = props => (
  <Modal name={constants.addTaskModalName} title="Add new task">
    <AddTask {...props} />
  </Modal>
);

export default AddTaskWithModal;
