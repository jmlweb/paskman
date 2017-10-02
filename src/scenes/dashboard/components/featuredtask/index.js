import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  firstTaskSelector,
} from '../../../../data/tasks/duck';
import {
  elapsedTimeSelector,
} from '../../../../data/pomodoros/duck';
import FeaturedTaskView from './view';

const {
  objectOf,
  any,
  number,
} = PropTypes;

class FeaturedTask extends Component {
  static propTypes = {
    firstTask: objectOf(any).isRequired,
    dimensions: objectOf(any).isRequired,
    elapsedTime: number.isRequired,
  };
  getMaxName() {
    return this.props.dimensions.width > 768 ? 200 : 40;
  }
  render() {
    const {
      firstTask,
      elapsedTime,
    } = this.props;
    const { timeRequired } = firstTask;
    const progress = elapsedTime / (timeRequired || elapsedTime);
    return (
      <FeaturedTaskView
        name={firstTask.name.slice(0, this.getMaxName())}
        elapsedTime={elapsedTime}
        totalTime={timeRequired}
        progress={progress}
      />
    );
  }
}

function mapStateToProps(state) {
  const firstTask = firstTaskSelector(state.data.tasks);
  return {
    firstTask,
    elapsedTime: elapsedTimeSelector(state.data.pomodoros, firstTask.id, 'working'),
    dimensions: state.scenes.main.get('dimensions'),
  };
}

export default connect(mapStateToProps, {
})(FeaturedTask);
