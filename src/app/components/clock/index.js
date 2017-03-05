import React from 'react';
import { toClock } from '../../utils/parsetime';

const {
  number,
} = React.PropTypes;

const Clock = props => <span>{toClock(props.amount)}</span>;

Clock.propTypes = {
  amount: number.isRequired,
};

export default Clock;
