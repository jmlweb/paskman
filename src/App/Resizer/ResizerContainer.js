// @flow
import { connect } from 'react-redux';
import type { Connector } from 'react-redux';
import { appSetDimensions, type State } from './duck';
import Resizer from './Resizer';
import type { Props } from './Resizer';

export function mapStateToProps(state: {app: {resizer: {dimensions: State}}}) {
  const { dimensions } = state.app.resizer;
  return {
    dimensions,
  }
};

const ConnectedResizer: Connector<{}, Props> = connect(mapStateToProps, {
  appSetDimensions,
});

export default ConnectedResizer(Resizer);
