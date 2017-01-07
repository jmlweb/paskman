import React, {
  Component,
  PropTypes,
} from 'react';
import * as Immutable from 'immutable';
import { connect } from 'react-redux';
import moment from 'moment';
import {
  toggleActive,
  toggleMode,
  addToTable,
  reset,
} from '../../redux/modules/pomodoro';
import {
  PAUSE_BETWEEN,
  INTERVAL_TIME,
  REINIT_TIMEOUT,
  RELOAD_TIMEOUT,
} from '../../constants/pomodoro';
import createTimerLayout from './components/layout';
import { minToMil } from '../../utils/parse-time';

function getElapsedTime(timeTable) {
  const differencesArr = timeTable.map((timeItem) => {
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

function calculateAmountTime(mode, table) {
  const elapsedTime = getElapsedTime(table.get(mode));
  const modeTime = this.getModeTime();
  if (elapsedTime > modeTime) {
    return 0;
  }
  return modeTime - elapsedTime;
}

const TimerLayout = createTimerLayout(React);

class Timer extends Component {
  constructor(props) {
    super(props);
    this.toggleAction = this.toggleAction.bind(this);
    this.addToTable = this.addToTable.bind(this);
    this.timeFinished = this.timeFinished.bind(this);
    this.state = {
      amountTime: this.getModeTime(),
      isToggling: false,
    };
  }

  componentWillUnmount() {
    if (this.props.isActive) {
      this.toggleAction();
    }
  }

  getModeTime() {
    return minToMil(this.props.modes[this.props.mode]);
  }

  getProgress() {
    const timeStart = this.getModeTime();
    const progress = 1 - (this.state.amountTime / timeStart);
    return parseInt(progress * 100, 10) / 100;
  }

  checkInterval() {
    let lastCents;
    this.interval = setInterval(() => {
      const amountTime = calculateAmountTime(this.props.mode, this.props.table);
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
    this.addToTable();
    this.props.toggleActive();
    if (this.props.mode === this.props.modes.working.name) {
      this.props.toggleMode();
    } else {
      this.props.reset();
    }
    setTimeout(() => {
      this.setState({
        amountTime: calculateAmountTime(this.props.mode, this.props.table),
        isToggling: false,
      });
      if (!PAUSE_BETWEEN) {
        setTimeout(() => {
          this.toggleAction(true);
        }, REINIT_TIMEOUT);
      }
    }, RELOAD_TIMEOUT);
  }

  addToTable() {
    const type = this.props.isActive ? 'end' : 'start';
    const pushIfStart = (table) => {
      if (type === 'start') {
        const newList = Immutable.List(table.get(this.props.mode)).push(Immutable.Map({}));
        return table.merge({
          [this.props.mode]: newList,
        });
      }
      return table;
    };
    const pushedTable = pushIfStart(Immutable.Map(this.props.table));
    const tableMode = pushedTable.get(this.props.mode);
    const position = tableMode.size;
    const newModeValue = tableMode.get(position - 1).merge({
      [type]: Date.now(),
    });
    const newTable = pushedTable.set(
      this.props.mode,
      tableMode.set(position - 1, newModeValue),
    ).get(this.props.mode);
    this.props.addToTable({
      mode: this.props.mode,
      table: newTable,
    });
  }

  toggleAction(auto = false) {
    this.addToTable();
    this.props.toggleActive();
    if (this.props.isActive && !auto) {
      clearInterval(this.interval);
    } else {
      this.checkInterval();
    }
  }

  render() {
    return (
      <TimerLayout
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
  isActive: state.pomodoro.get('isActive'),
  mode: state.pomodoro.get('mode'),
  table: state.pomodoro.get('table'),
  modes: state.settings.get('modes'),
});

const mapDispatchToProps = dispatch =>
  ({
    toggleActive: () => { dispatch(toggleActive()); },
    toggleMode: () => { dispatch(toggleMode()); },
    addToTable: (newTableMode) => { dispatch(addToTable(newTableMode)); },
    reset: () => { dispatch(reset()); },
  });

export default connect(mapStateToProps, mapDispatchToProps)(Timer);

Timer.propTypes = {
  isActive: PropTypes.bool,
  mode: PropTypes.string,
  table: PropTypes.objectOf(
    PropTypes.any,
  ),
  modes: PropTypes.objectOf(
    PropTypes.any,
  ),
  toggleActive: PropTypes.func,
  toggleMode: PropTypes.func,
  addToTable: PropTypes.func,
  reset: PropTypes.func,
};
