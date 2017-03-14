import React from 'react';
import classNames from 'classnames';
import InputRange from 'react-input-range';
import Modal from '../../../../components/modal';
import Btn from '../../../../components/btn';
import RadioButton from '../../../../components/radiobutton';
import style from './style.scss';

const {
  string,
  number,
  func,
} = React.PropTypes;

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
        <label className={style.label} htmlFor="name">Name</label>
        <input
          className={style.fieldName}
          id="name"
          type="text"
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
          required
          onChange={handleDescriptionChange}
          value={description}
          cols="80"
          rows="4"
        />
      </div>
      <div className={style.group}>
        <label className={style.label} htmlFor="timeRequired">Time required</label>
        <div className={style.slider}>
          <InputRange
            minValue={0}
            maxValue={125}
            value={timeRequired}
            onChange={handleTimeRequiredChange}
          />
        </div>
        <RadioButton
          options={[
            {
              description: '1 pom',
              value: 25,
            },
            {
              description: '2 pom',
              value: 50,
            },
            {
              description: '3 pom',
              value: 75,
            },
            {
              description: '4 pom',
              value: 100,
            },
            {
              description: '5 pom',
              value: 125,
            },
          ]}
          value={timeRequired}
          onChange={handleTimeRequiredChange}
        />
      </div>
      <div className={classNames(style.group, style.center)}>
        <input
          className={classNames(style.fieldName, style.short)}
          id="timeRequired"
          type="number"
          placeholder="Please, enter the minutes required"
          required
          onChange={handleTimeRequiredChange}
          value={timeRequired}
          min={1}
          max={125}
        /> minutes
      </div>
      <div className={style.btn}>
        <Btn type="submit" onSubmit={handleSubmit}>Save task</Btn>
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
