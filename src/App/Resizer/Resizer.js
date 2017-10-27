import { Component } from 'react';

class Resizer extends Component {
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
