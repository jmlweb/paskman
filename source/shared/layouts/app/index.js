import { PropTypes } from 'react';

export default React => props => Object.assign(
  {},
  <div>{props.children}</div>,
  {
    propTypes: {
      children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
      ]),
    },
  },
);
