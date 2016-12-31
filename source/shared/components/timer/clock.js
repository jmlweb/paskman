import { PropTypes } from 'react';
import { toClock } from '../../utils/parse-time';

export default React => props => Object.assign(
  {},
  <div>{toClock(props.amount)}</div>,
  {
    propTypes: {
      amount: PropTypes.number,
    },
  },
);
