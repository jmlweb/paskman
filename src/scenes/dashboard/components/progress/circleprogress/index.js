import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CircleProgressView from './view';

const {
  number,
  objectOf,
  any,
} = PropTypes;

class CircleProgress extends React.Component {
  static propTypes = {
    progress: number.isRequired,
    dimensions: objectOf(any).isRequired,
  };
  static defaultCircleSize = 200;
  static defaultHeight = 568;
  static relation = CircleProgress.defaultCircleSize / CircleProgress.defaultHeight;
  constructor(props) {
    super(props);
    this.state = {
      size: this.defaultCircleSize,
    };
    this.getSize = this.getSize.bind(this);
  }
  getSize() {
    const { dimensions } = this.props;
    return CircleProgress.relation * dimensions.height;
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

function mapStateToProps(state) {
  return {
    dimensions: state.scenes.main.get('dimensions'),
  };
}

export default connect(mapStateToProps, {})(CircleProgress);
