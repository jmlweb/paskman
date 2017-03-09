import React from 'react';
import { connect } from 'react-redux';
import CircleProgressView from './view';

const {
  number,
  objectOf,
  any,
} = React.PropTypes;

const defaultHeight = 568;
const defaultCircleSize = 200;
const relation = defaultCircleSize / defaultHeight;

class CircleProgress extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: defaultCircleSize,
    };
    this.getSize = this.getSize.bind(this);
  }
  getSize() {
    const { dimensions } = this.props;
    return relation * dimensions.height;
  }
  render() {
    const { progress } = this.props;
    return (
      <CircleProgressView
        progress={progress}
        size={this.getSize()}
      />
    );
  }
}

CircleProgress.propTypes = {
  progress: number.isRequired,
  dimensions: objectOf(any).isRequired,
};

function mapStateToProps(state) {
  return {
    dimensions: state.scenes.main.get('dimensions'),
  };
}

export default connect(mapStateToProps, {})(CircleProgress);
