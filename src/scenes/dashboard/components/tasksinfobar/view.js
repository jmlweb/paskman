import React from 'react';
import PropTypes from 'prop-types';
import Clock from '../../../../components/clock';
import SvgIcon from '../../../../components/svgicon';
import style from './style.scss';
import addSvg from './add.svg';

const {
  number,
  func,
} = PropTypes;

function getTasksPending(tasksPending) {
  if (tasksPending === 0) {
    return 'No';
  }
  return tasksPending;
}

const TaskInfoBarView = ({ tasks, count, toggleModal }) => (
  <div className={style.tasksInfoBar}>
    <div className={style.info}>
      <p className={style.infoText}>
        <span className={style.strong}>
          {getTasksPending(tasks)}
        </span> tasks pending in your list
      </p>
      <p className={style.infoText}>
        <span className={style.strong}><Clock amount={count} /></span> planned
      </p>
    </div>
    <button className={style.btn} onClick={toggleModal}>
      <SvgIcon svg={addSvg} />
    </button>
  </div>
);

TaskInfoBarView.defaultProps = {
  count: 0,
  tasks: 0,
};

TaskInfoBarView.propTypes = {
  count: number,
  tasks: number,
  toggleModal: func.isRequired,
};

export default TaskInfoBarView;
