import { PropTypes } from 'react';

export default React => props => Object.assign(
  {},
  <h1 {...props}>{props.title}</h1>,
  {
    propTypes: {
      title: PropTypes.string,
    },
  },
);