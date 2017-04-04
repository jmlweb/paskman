import React from 'react';
import { toClock } from '../../utils/parsetime';
import style from './style.scss';

const {
  number,
} = React.PropTypes;

const Clock = ({ amount }) => {
  const parsedTimeArr = toClock(amount).split(':');
  return (
    <span className={style.clock}>
      {parsedTimeArr[0]}
      <span className={style.sep}>:</span>
      {parsedTimeArr[1]}
      <span className={style.sep}>:</span>
      {parsedTimeArr[2]}
    </span>
  );
};

Clock.propTypes = {
  amount: number.isRequired,
};

export default Clock;