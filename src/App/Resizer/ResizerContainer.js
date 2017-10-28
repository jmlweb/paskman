import { Component } from 'react';
import PT from 'prop-types';
import { connect } from 'react-redux';
import { appSetDimensions } from './duck';

export class Resizer extends Component {
  static propTypes = {
    dimensions: PT.shape({
      width: PT.number,
      height: PT.number,
    }).isRequired,
    appSetDimensions: PT.func.isRequired,
  }
  componentWillMount() {
    this.setTimer();
  }
  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
  setTimer() {
    this.interval = setTimeout(() => {
      const { innerWidth, innerHeight } = window;
      const { width, height } = this.props.dimensions;
      if (innerWidth !== width || innerHeight !== height) {
        this.props.appSetDimensions({
          width: innerWidth,
          height: innerHeight,
        });
      }
      this.setTimer();
    }, 250);
  }
  interval = null;
  render() {
    return null;
  }
}

export function mapStateToProps(state) {
  const { dimensions } = state.app.resizer;
  return {
    dimensions,
  };
}

const ConnectedResizer = connect(mapStateToProps, {
  appSetDimensions,
});

export default ConnectedResizer(Resizer);
