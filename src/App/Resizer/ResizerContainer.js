import { connect } from 'react-redux';
import { appSetDimensions } from './duck';
import Resizer from './Resizer';

export function mapStateToProps(state) {
  const { dimensions } = state.app.resizer;
  return {
    dimensions,
  }
};

const ConnectedResizer = connect(mapStateToProps, {
  appSetDimensions,
});

export default ConnectedResizer(Resizer);
