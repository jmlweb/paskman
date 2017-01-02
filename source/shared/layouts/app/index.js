import { PropTypes } from 'react';
import createNavbar from '../../components/navbar';

export default React => (props) => {
  const Navbar = createNavbar(React);
  return Object.assign(
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
};
