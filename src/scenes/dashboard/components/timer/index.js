import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  pomodorosAdd,
  pomodorosAddItem,
  pomodorosFinishItem,
  pomodorosChangeMode,
  lastPomodoroSelector,
  modeTimeSelector,
  lastModeEntrySelector,
  previousElapsedTimeSelector,
} from '../../../../data/pomodoros/duck';
import {
  firstTaskSelector,
} from '../../../../data/tasks/duck';
import {
  timerSetMode,
  timerSetAmount,
  timerSetIsChanging,
} from './duck';
import TimerView from './view';

const {
  objectOf,
  any,
  func,
  number,
} = PropTypes;

class Timer extends Component {
  static propTypes = {
    settings: objectOf(any).isRequired,
    pomodorosAdd: func.isRequired,
    pomodorosAddItem: func.isRequired,
    pomodorosFinishItem: func.isRequired,
    pomodorosChangeMode: func.isRequired,
    firstTask: objectOf(any).isRequired,
    timerData: objectOf(any).isRequired,
    timerSetMode: func.isRequired,
    timerSetAmount: func.isRequired,
    timerSetIsChanging: func.isRequired,
    previousElapsedTime: number,
    lastPomodoro: objectOf(any),
    modeTime: number,
    lastModeEntry: objectOf(any),
  };
  static defaultProps = {
    previousElapsedTime: 0,
    lastPomodoro: {},
    lastModeEntry: { start: Date.now() },
    modeTime: 0,
  };
  constructor(props) {
    super(props);
    this.addPomodoro = this.addPomodoro.bind(this);
    this.addPomodoroItem = this.addPomodoroItem.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleStop = this.handleStop.bind(this);
    this.handleInterval = this.handleInterval.bind(this);
  }
  componentWillMount() {
    this.updateAmount();
    if (this.props.timerData.mode === 'started') {
      this.startCounter();
    }
  }
  shouldComponentUpdate(nextProps) {
    const {
      timerData,
    } = this.props;
    const isDifferentTime = +(timerData.amount / 1000) !== +(nextProps.timerData.amount / 1000);
    const isDifferentMode = timerData.mode !== nextProps.timerData.mode;
    return timerData.amount === 0 || isDifferentTime || isDifferentMode;
  }
  componentWillUnmount() {
    if (this.props.timerData.mode === 'started') {
      this.handleClick();
    } else {
      this.stopCounter();
    }
  }
  startCounter() {
    this.counter = setInterval(this.handleInterval, 200);
  }
  stopCounter() {
    clearInterval(this.counter);
  }
  handleInterval() {
    const {
      modeTime,
      timerData,
      settings,
    } = this.props;
    const availableTime = modeTime - timerData.amount;
    if (availableTime <= 200) {
      this.props.timerSetIsChanging(true);
    }
    if (availableTime <= 0) {
      this.props.timerSetMode('stopped');
      this.props.pomodorosFinishItem();
      this.stopCounter();
      this.props.pomodorosChangeMode();
      this.props.timerSetAmount(0);
      // add some delay waiting for progress completion
      setTimeout(() => {
        this.props.timerSetIsChanging(false);
        if (!settings.pauseBetween) {
          this.handleClick();
        }
      }, 700);
    } else {
      this.updateAmount();
    }
  }
  updateAmount() {
    let elapsedTime = this.props.previousElapsedTime;
    if (!this.props.lastModeEntry.end) {
      elapsedTime += Date.now() - this.props.lastModeEntry.start;
    }
    this.props.timerSetAmount(elapsedTime);
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
    const { timerData, lastPomodoro } = this.props;
    this.props.timerSetIsChanging(false);
    if (timerData.mode === 'stopped' && lastPomodoro.mode !== 'resting') {
      this.addPomodoro();
    }
    if (timerData.mode === 'stopped' || timerData.mode === 'paused') {
      this.props.timerSetMode('started');
      this.addPomodoroItem();
      this.startCounter();
    }
    if (timerData.mode === 'started') {
      this.props.timerSetMode('paused');
      this.props.pomodorosFinishItem();
      this.stopCounter();
    }
  }
  handleStop() {
    this.props.timerSetMode('stopped');
    this.props.pomodorosFinishItem();
  }
  render() {
    const { timerData, modeTime, lastPomodoro } = this.props;
    return (
      <TimerView
        state={timerData.mode}
        mode={lastPomodoro.mode}
        amount={timerData.amount}
        handleClick={this.handleClick}
        handleStop={this.handleStop}
        progress={timerData.amount / modeTime}
        isChanging={timerData.isChanging}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    settings: state.data.settings.toJS(),
    timerData: state.scenes.dashboard.components.timer.toJS(),
    firstTask: firstTaskSelector(state.data.tasks),
    lastPomodoro: lastPomodoroSelector(state.data.pomodoros).toJS(),
    modeTime: modeTimeSelector(state.data.pomodoros),
    lastModeEntry: lastModeEntrySelector(state.data.pomodoros),
    previousElapsedTime: previousElapsedTimeSelector(state.data.pomodoros),
  };
}

export default connect(mapStateToProps, {
  pomodorosAdd,
  pomodorosAddItem,
  pomodorosFinishItem,
  pomodorosChangeMode,
  timerSetMode,
  timerSetAmount,
  timerSetIsChanging,
})(Timer);

