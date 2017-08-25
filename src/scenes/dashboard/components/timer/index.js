import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  pomodorosAdd,
  pomodorosAddItem,
  pomodorosFinishItem,
} from '../../../../data/pomodoros/duck';
import {
  firstTaskSelector,
} from '../../../../data/tasks/duck';
import { timerSetMode } from './duck';
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
    pomodorosFinishItem: func.isRequired,
    firstTask: objectOf(any).isRequired,
    timerData: objectOf(any).isRequired,
    timerSetMode: func.isRequired,
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
    const { timerData } = this.props;
    if (timerData.mode === 'stopped') {
      this.addPomodoro();
    }
    if (timerData.mode === 'stopped' || timerData.mode === 'paused') {
      this.props.timerSetMode('started');
      this.addPomodoroItem();
    }
    if (timerData.mode === 'started') {
      this.props.timerSetMode('paused');
      this.props.pomodorosFinishItem();
    }
  }
  render() {
    const { timerData } = this.props;
    return (
      <TimerView
        state={timerData.mode}
        enabled={timerData.mode === 'started'}
        handleClick={this.handleClick}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    settings: state.data.settings.toJS(),
    timerData: state.scenes.dashboard.components.timer.toJS(),
    firstTask: firstTaskSelector(state.data.tasks),
  };
}

export default connect(mapStateToProps, {
  pomodorosAdd,
  pomodorosAddItem,
  pomodorosFinishItem,
  timerSetMode,
})(Timer);

