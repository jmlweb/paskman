import { PropTypes } from 'react';

export default React => props => Object.assign(
  {},
  <button onClick={props.action}>{props.actionLabel}</button>,
  {
    propTypes: {
      action: PropTypes.func.isRequired,
      actionLabel: PropTypes.string.isRequired,
    },
  },
);
