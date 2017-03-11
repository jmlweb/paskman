import React from 'react';
import Clock from '../../../../components/clock';
import SvgIcon from '../../../../components/svgicon';
import style from './style.scss';
import addSvg from './add.svg';

const {
  number,
  func,
} = React.PropTypes;

function getTasksPending(tasksPending) {
  if (tasksPending === 0) {
    return 'No';
  }
  return tasksPending;
}

const TaskInfoBarView = ({ tasks, amount, toggleModal }) => (
  <div className={style.tasksInfoBar}>
    <div className={style.info}>
      <p className={style.infoText}>
        <span className={style.strong}>
          {getTasksPending(tasks)}
        </span> tasks pending in your list
      </p>
      <p className={style.infoText}>
        <span className={style.strong}><Clock amount={amount} /></span> planned
      </p>
    </div>
    <button className={style.btn} onClick={toggleModal}>
      <SvgIcon svg={addSvg} />
    </button>
  </div>
);

TaskInfoBarView.defaultProps = {
  amount: 0,
  tasks: 0,
};

TaskInfoBarView.propTypes = {
  amount: number,
  tasks: number,
  toggleModal: func.isRequired,
};

export default TaskInfoBarView;
