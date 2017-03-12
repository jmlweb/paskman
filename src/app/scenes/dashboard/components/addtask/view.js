import React from 'react';
import Modal from '../../../../components/modal';
import Btn from '../../../../components/btn';
import style from './style.scss';

const {
  string,
  func,
} = React.PropTypes;

const AddTask = ({
  name,
  description,
  handleNameChange,
  handleDescriptionChange,
  handleSubmit,
}) => (
  <Modal
    name="addTask"
    title="Add new task"
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
      <div className={style.btn}>
        <Btn type="submit" onSubmit={handleSubmit}>Save task</Btn>
      </div>
    </form>
  </Modal>
);

AddTask.propTypes = {
  name: string.isRequired,
  description: string.isRequired,
  handleNameChange: func.isRequired,
  handleDescriptionChange: func.isRequired,
  handleSubmit: func.isRequired,
};

export default AddTask;
