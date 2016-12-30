import React, { PropTypes } from 'react';
import { toClock } from '../../utils/parse-time';

const Clock = ({ amount }: {amount: number}) =>
  <div>{toClock(amount)}</div>;

Clock.propTypes = {
  amount: PropTypes.number,
};

export default Clock;
