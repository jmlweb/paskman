import { PropTypes } from 'react';
import Navbar from '../../components/navbar';

export default React => props =>
  Object.assign(
    {},
    <div>
      <Navbar />
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
