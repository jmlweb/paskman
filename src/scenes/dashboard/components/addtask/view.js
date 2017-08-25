import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-rangeslider';
import Modal from '../../../../components/modal';
import Btn from '../../../../components/btn';
import RadioButton from '../../../../components/radiobutton';
import style from './style.scss';

const {
  string,
  number,
  func,
} = PropTypes;

const AddTask = ({
  name,
  description,
  timeRequired,
  handleNameChange,
  handleDescriptionChange,
  handleTimeRequiredChange,
  handleReset,
  handleSubmit,
}) => (
  <Modal
    name="addTask"
    title="Add new task"
    closeCb={handleReset}
  >
    <form className={style.form} onSubmit={handleSubmit}>
      <div className={style.group}>
        <label className={style.label} htmlFor="name">Name (3 chars min)</label>
        <input
          className={style.fieldName}
          id="name"
          type="text"
          minLength="3"
          placeholder="Try to be concise"
          required
          onChange={handleNameChange}
          value={name}
        />
      </div>
      <div className={style.group}>
        <label className={style.label} htmlFor="description">Description</label>
        <textarea
          className={style.fieldName}
          id="description"
          placeholder="Describe the task"
          onChange={handleDescriptionChange}
          value={description}
          cols="80"
          rows="4"
        />
      </div>
      <div className={style.group}>
        <label className={style.label} htmlFor="timeRequired">Time required</label>
        <div className={style.radioButton}>
          <RadioButton
            options={[1, 2, 3, 4, 5].map(pomodoros => ({
              description: `${pomodoros} pom`,
              value: pomodoros * 25, // @todo Load time from settings
            }))}
            value={timeRequired}
            onChange={handleTimeRequiredChange}
          />
        </div>
        <div className={style.slider}>
          <Slider
            min={5}
            max={125}
            step={5}
            value={timeRequired}
            onChange={handleTimeRequiredChange}
            format={value => `${value} min`}
          />
        </div>
      </div>
      <div className={style.btn}>
        <Btn
          color="primary"
          type="submit"
          disabled={name.length < 3}
          onSubmit={handleSubmit}
        >
          Save task
        </Btn>
      </div>
    </form>
  </Modal>
);

AddTask.defaultProps = {
  handleReset: func,
};

AddTask.propTypes = {
  name: string.isRequired,
  description: string.isRequired,
  timeRequired: number.isRequired,
  handleNameChange: func.isRequired,
  handleDescriptionChange: func.isRequired,
  handleTimeRequiredChange: func.isRequired,
  handleReset: func,
  handleSubmit: func.isRequired,
};

export default AddTask;
