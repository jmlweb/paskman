import React from 'react';
import Clock from '../../../../components/clock';
import SvgIcon from '../../../../components/svgicon';
import style from './style.scss';
import addSvg from './add.svg';

const {
  number,
} = React.PropTypes;

function getTasksPending(tasksPending) {
  if (tasksPending === 0) {
    return 'No';
  }
  return tasksPending;
}

const TaskInfoBar = ({ tasks, amount }) => (
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
    <button className={style.btn}>
      <SvgIcon svg={addSvg} />
    </button>
  </div>
);

TaskInfoBar.defaultProps = {
  amount: 0,
  tasks: 0,
};

TaskInfoBar.propTypes = {
  amount: number,
  tasks: number,
};

export default TaskInfoBar;
