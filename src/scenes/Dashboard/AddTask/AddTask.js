import React from 'react'
import Modal from '../../../components/Modal/ModalContainer';
import {
  FieldSet,
  Form,
  FormGroup,
  Label,
  OptionsSwitcher,
  RangeSlider,
  TextArea,
  TextField,
} from '../../../components/Form';
import ButtonBar from '../../../components/ButtonBar/ButtonBar';
import Button from '../../../components/Button/Button';
import constants from '../constants';

/**
 * <div className={style.slider}>
    <Slider
      min={5}
      max={125}
      step={5}
      value={timeRequired}
      onChange={handleTimeRequiredChange}
      format={value => `${value} min`}
    />
  </div>
 */

function dummy() {
  return false;
}

export const AddTask = () => (
  <Form noSpacing>
    <FieldSet>
      <FormGroup>
        <Label>Name (3 chars min)</Label>
        <TextField
          id="name"
          type="text"
          minLength="3"
          placeholder="Try to be concise"
          required
        />
      </FormGroup>
      <FormGroup>
        <Label>Description</Label>
        <TextArea
          id="description"
          placeholder="Describe the task"
          cols="80"
          rows="4"
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
            <Button color="primary" size="sm">Change to time</Button>
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
            <Button color="primary" size="sm">Change to pomodoros</Button>
          </ButtonBar>
        </FormGroup>
      )}
    </FieldSet>
    <Button type="submit" color="success" block>Save</Button>
  </Form>
);

const AddTaskWithModal = () => (
  <Modal name={constants.addTaskModalName} title="Add new task">
    <AddTask />
  </Modal>
);

export default AddTaskWithModal;
