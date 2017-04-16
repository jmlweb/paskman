import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  pomodorosAdd,
  pomodorosAddItem,
} from '../../../../data/pomodoros/duck';
import {
  firstTaskSelector,
} from '../../../../data/tasks/duck';
import TimerView from './view';

const {
  objectOf,
  any,
  func,
} = PropTypes;

class Timer extends Component {
  static propTypes = {
    settings: objectOf(any).isRequired,
    pomodorosAdd: func.isRequired,
    pomodorosAddItem: func.isRequired,
    firstTask: objectOf(any).isRequired,
  };
  constructor(props) {
    super(props);
    this.state = {
      mode: 'stopped',
    };
    this.addPomodoro = this.addPomodoro.bind(this);
    this.addPomodoroItem = this.addPomodoroItem.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  addPomodoro() {
    const { target } = this.props.settings;
    this.props.pomodorosAdd({
      target,
    });
  }
  addPomodoroItem() {
    const { firstTask } = this.props;
    this.props.pomodorosAddItem({
      task: firstTask.id,
    });
  }
  handleClick() {
    const { mode } = this.state;
    if (mode === 'stopped') {
      this.addPomodoro();
    }
    if (mode === 'stopped' || mode === 'paused') {
      this.setState({
        mode: 'started',
      });
      this.addPomodoroItem();
    }
  }
  render() {
    const { mode } = this.state;
    return (
      <TimerView
        state={mode}
        handleClick={this.handleClick}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    settings: state.data.settings.toJS(),
    firstTask: firstTaskSelector(state.data.tasks),
  };
}

export default connect(mapStateToProps, {
  pomodorosAdd,
  pomodorosAddItem,
})(Timer);

