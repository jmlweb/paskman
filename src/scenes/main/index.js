import React from 'react';
import { connect } from 'react-redux';
import {
  mainSetDimensions,
} from './duck';
import MainView from './view';

const {
  oneOfType,
  arrayOf,
  objectOf,
  any,
  func,
} = React.PropTypes;

class Main extends React.Component {
  static propTypes = {
    children: oneOfType([
      objectOf(any),
      arrayOf(any),
    ]).isRequired,
    mainSetDimensions: func.isRequired,
  };
  constructor(props) {
    super(props);
    this.state = {
      lastDimensions: {
        width: 0,
        height: 0,
      },
    };
  }
  componentDidMount() {
    const setInterval = () => {
      this.interval = setTimeout(() => {
        if (
          window.innerWidth !== this.state.lastDimensions.width
          && window.innerHeight !== this.state.lastDimensions.height
        ) {
          this.setState({
            lastDimensions: {
              width: window.innerWidth,
              height: window.innerHeight,
            },
          });
          this.props.mainSetDimensions(this.state.lastDimensions);
        }
        setInterval();
      }, 500);
    };
    setInterval();
  }
  componentWillUnmount() {
    clearTimeout(this.interval);
  }
  render() {
    const { children } = this.props;
    return (
      <MainView>
        {children}
      </MainView>
    );
  }
}

export default connect(null, {
  mainSetDimensions,
})(Main);
