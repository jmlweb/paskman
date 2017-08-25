import React from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';

const {
  arrayOf,
  object,
} = PropTypes;

const RemainingTasks = ({ remainingTasks }) => (
  <div className={style.remainingTasks}>
    <div className={style.topbar}>
      <h2 className={style.title}>
        <strong className={style.number}>
          {remainingTasks.length ? remainingTasks.length : 'No'} tasks remaining
        </strong>
      </h2>
    </div>
    <div className={style.content}>
      {!remainingTasks.length && (
        <div className={style.empty}>
          <p className={style.emptyMsg}>Your list is empty. Feeling productive today?</p>
        </div>
      )}
    </div>
  </div>
);

RemainingTasks.defaultProps = {
  remainingTasks: [],
};

RemainingTasks.propTypes = {
  remainingTasks: arrayOf(object),
};

export default RemainingTasks;
