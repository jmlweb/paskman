import React from 'react';
import classNames from 'classnames';
import Btn from '../../../../components/btn';
import closeSvg from './close.svg';
import SvgIcon from '../../../../components/svgicon';
import style from './style.scss';

const {
  bool,
  string,
  func,
} = React.PropTypes;

const AddTask = ({
  tasksModalOpen,
  name,
  description,
  handleNameChange,
  handleDescriptionChange,
  handleSubmit,
  toggleModal,
}) => (
  <div className={classNames(style.modal, tasksModalOpen && style.active)}>
    <div className={style.topbar}>
      <h3 className={style.title}>Add new task</h3>
      <button className={style.close} onClick={toggleModal}><SvgIcon svg={closeSvg} /></button>
    </div>
    <div className={style.content}>
      <form className={style.form} onSubmit={handleSubmit}>
        <div className={style.group}>
          <label className={style.label} htmlFor="name">Name</label>
          <input className={style.fieldName} id="name" type="text" placeholder="Name" required onChange={handleNameChange} value={name} />
        </div>
        <div className={style.group}>
          <label className={style.label} htmlFor="description">Description</label>
          <textarea className={style.fieldName} id="description" placeholder="Description" required onChange={handleDescriptionChange} value={description} />
        </div>
        <div className={style.btn}>
          <Btn type="submit" onSubmit={handleSubmit}>Save task</Btn>
        </div>
      </form>
    </div>
  </div>
);

AddTask.propTypes = {
  tasksModalOpen: bool.isRequired,
  name: string.isRequired,
  description: string.isRequired,
  handleNameChange: func.isRequired,
  handleDescriptionChange: func.isRequired,
  handleSubmit: func.isRequired,
  toggleModal: func.isRequired,
};

export default AddTask;
