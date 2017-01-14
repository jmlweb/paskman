import React, {
  Component,
  PropTypes,
} from 'react';
import * as Immutable from 'immutable';
import { connect } from 'react-redux';
import moment from 'moment';
import {
  setTarget,
  configLoaded,
  toggleActive,
  toggleMode,
  pushTime,
  reset,
  modeTargetSelector,
  modeTableSelector,
  elapsedTimeSelector,
} from '../../redux/modules/pomodoro';
import {
  PAUSE_BETWEEN,
  INTERVAL_TIME,
  REINIT_TIMEOUT,
  RELOAD_TIMEOUT,
} from '../../constants/pomodoro';
import createTimerView from './view';
import { minToMil } from '../../utils/parse-time';

const TimerView = createTimerView(React);

class Timer extends Component {
  constructor(props) {
    super(props);
    this.toggleAction = this.toggleAction.bind(this);
    this.pushTime = this.pushTime.bind(this);
    this.timeFinished = this.timeFinished.bind(this);
    this.state = {
      amountTime: this.props.modeTarget,
      isToggling: false,
    };
  }

  componentDidMount() {
    this.props.setTarget({
      working: this.props.modes.get('working').get('minutes'),
      resting: this.props.modes.get('resting').get('minutes'),
    });
    setTimeout(() => {
      this.setState({
        amountTime: this.calculateAmountTime(),
      });
      this.props.configLoaded();
    }, 0);
  }

  componentWillUnmount() {
    if (this.props.isActive) {
      this.toggleAction();
    }
  }

  getModeTime() {
    return minToMil(this.props.modes.get(this.props.mode).get('minutes'));
  }

  getProgress() {
    const timeStart = this.props.modeTarget;
    const progress = 1 - (this.state.amountTime / timeStart);
    return parseInt(progress * 100, 10) / 100;
  }

  getElapsedTime() {
    const differencesArr = this.props.modeTable.map((timeItem) => {
      const timeStart = moment(timeItem.get('start'));
      const timeEnd = moment(timeItem.get('end'));
      return timeEnd.diff(timeStart);
    }).toJS();
    if (differencesArr.length) {
      const reduced = differencesArr.reduce((total, n) => total + n);
      if (!isNaN(reduced) && reduced > 0) {
        return reduced;
      }
    }
    return 0;
  }

  calculateAmountTime() {
    const elapsedTime = this.getElapsedTime();
    const modeTime = this.props.modeTarget;
    if (elapsedTime > modeTime) {
      return 0;
    }
    return modeTime - elapsedTime;
  }

  checkInterval() {
    let lastCents;
    this.interval = setInterval(() => {
      const amountTime = this.calculateAmountTime();
      const currentCents = parseInt(amountTime / 100, 10);
      if (lastCents !== currentCents) {
        this.setState({
          amountTime: Math.floor(amountTime * 1000) / 1000,
        });
        lastCents = currentCents;
      }
      if (amountTime <= 0) {
        this.timeFinished();
      }
    }, INTERVAL_TIME);
  }

  timeFinished() {
    clearInterval(this.interval);
    this.setState({
      isToggling: true,
      amountTime: 0,
    });
    this.pushTime();
    this.props.toggleActive();
    if (this.props.mode === this.props.modes.get('working').get('name')) {
      this.props.toggleMode();
    } else {
      this.props.reset();
    }
    setTimeout(() => {
      this.setState({
        amountTime: this.calculateAmountTime(),
        isToggling: false,
      });
      if (!PAUSE_BETWEEN) {
        setTimeout(() => {
          this.toggleAction(true);
        }, REINIT_TIMEOUT);
      }
    }, RELOAD_TIMEOUT);
  }

  getToggledMode() {
    const { mode, modes } = this.props;
    return mode === modes.get('working').name ? modes.get('resting').name : modes.get('working').name;
  }

  pushTime() {
    this.props.pushTime(Date.now());
  }

  toggleAction(auto = false) {
    this.pushTime();
    this.props.toggleActive();
    if (this.props.isActive && !auto) {
      clearInterval(this.interval);
    } else {
      this.checkInterval();
    }
  }

  render() {
    return (
      this.props.hasConfig &&
      <TimerView
        amountTime={this.state.amountTime}
        progress={this.getProgress()}
        isActive={this.props.isActive}
        isToggling={this.state.isToggling}
        toggleAction={this.toggleAction}
      />
    );
  }
}

const mapStateToProps = state => ({
  hasConfig: state.pomodoro.get('hasConfig'),
  isActive: state.pomodoro.get('isActive'),
  mode: state.pomodoro.get('mode'),
  modes: state.settings.get('modes'),
  target: state.pomodoro.get('target'),
  modeTarget: modeTargetSelector(state),
  modeTable: modeTableSelector(state),
  elapsedTime: elapsedTimeSelector(state),
});

const mapDispatchToProps = dispatch =>
  ({
    setTarget: (newTarget) => { dispatch(setTarget(newTarget)); },
    toggleActive: () => { dispatch(toggleActive()); },
    toggleMode: (newMode) => { dispatch(toggleMode()); },
    pushTime: (newTime) => { dispatch(pushTime(newTime)); },
    reset: () => { dispatch(reset()); },
    configLoaded: () => { dispatch(configLoaded()); },
  });

export default connect(mapStateToProps, mapDispatchToProps)(Timer);

Timer.propTypes = {
  isActive: PropTypes.bool,
  mode: PropTypes.string,
  modes: PropTypes.objectOf(
    PropTypes.any,
  ),
  target: PropTypes.objectOf(
    PropTypes.any,
  ),
  modeTarget: PropTypes.number,
  setTarget: PropTypes.func,
  toggleActive: PropTypes.func,
  toggleMode: PropTypes.func,
  pushTime: PropTypes.func,
  reset: PropTypes.func,
};
