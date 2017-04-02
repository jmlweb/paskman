import React from 'react';
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
        <div className={style.slider}>
          <InputRange
            minValue={5}
            maxValue={125}
            step={5}
            value={timeRequired}
            onChange={handleTimeRequiredChange}
            formatLabel={(value, type) => {
              if (type === 'value') {
                return `${value} min`;
              }
              return value;
            }}
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
