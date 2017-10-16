import { Component } from 'react';

export type Dimensions = {
  width: number,
  height: number,
};

type State = {
  lastDimensions: Dimensions,
};

export type Props = {
  appSetDimensions: any,
  dimensions: Dimensions,
};

class Resizer extends Component<Props, State> {
  interval = null;
  componentWillMount() {
    const { appSetDimensions } = this.props;
    const setTimer = () => {
      this.interval = setTimeout(() => {
        const { innerWidth, innerHeight } = window;
        const { width, height } = this.props.dimensions;
        if (innerWidth !== width || innerHeight !== height) {
          appSetDimensions({
            width: innerWidth,
            height: innerHeight,
          });
        }
        setTimer();
      }, 250);
    };
    setTimer();
  }
  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
  render() {
    return null;
  }
}

export default Resizer;
