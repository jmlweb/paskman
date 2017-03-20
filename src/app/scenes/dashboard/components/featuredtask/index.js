import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {
  firstTaskSelector,
} from '../../../../data/tasks/duck';
import FeaturedTaskView from './view';

const {
  objectOf,
  any,
} = PropTypes;

class FeaturedTask extends Component {
  static propTypes = {
    firstTask: objectOf(any).isRequired,
    dimensions: objectOf(any).isRequired,
  };
  getMaxName() {
    return this.props.dimensions.width > 768 ? 200 : 40;
  }
  render() {
    const { firstTask } = this.props;
    return (
      <FeaturedTaskView
        name={firstTask.name.slice(0, this.getMaxName())}
        totalTime={firstTask.timeRequired}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    firstTask: firstTaskSelector(state.data.tasks),
    dimensions: state.scenes.main.get('dimensions'),
  };
}

export default connect(mapStateToProps, {
})(FeaturedTask);
