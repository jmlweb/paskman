import { PropTypes } from 'react';
import createNavbar from '../../components/navbar';

export default React => props => Object.assign(
  {},
  <div>
    {createNavbar(React)}
    {props.children}
  </div>,
  {
    propTypes: {
      children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
      ]),
    },
  },
);
