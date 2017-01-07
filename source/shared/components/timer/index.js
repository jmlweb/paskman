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
} from '../../reducers/pomodoro/actions';
import {
  PAUSE_BETWEEN,
  INTERVAL_TIME,
  MODES,
  TIMEOUT_TIME,
} from '../../constants/pomodoro';
import createTimerLayout from './layout';
import { minToMil } from '../../utils/parse-time';

function getModeTime(mode) {
  return minToMil(MODES[mode].minutes);
}

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
  const modeTime = getModeTime(mode);
  if (elapsedTime > modeTime) {
    return 0;
  }
  return Math.floor((modeTime - elapsedTime) / 500) * 500;
}

const TimerLayout = createTimerLayout(React);

class Timer extends Component {
  constructor(props) {
    super(props);
    this.toggleAction = this.toggleAction.bind(this);
    this.state = {
      amountTime: getModeTime(props.mode),
      isToggling: false,
    };
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
    if (this.props.isActive) {
      this.toggleAction();
    }
  }

  getMsg() {
    let msg = '';
    if (!this.props.isActive && !this.state.isToggling) {
      msg = 'PAUSED. ';
    }
    msg += `You're ${MODES[this.props.mode].name.toUpperCase()} now.`;
    return msg;
  }

  getProgress() {
    const timeStart = getModeTime(this.props.mode);
    const progress = 1 - (this.state.amountTime / timeStart);
    return Math.ceil(progress * 500, 10) / 500;
  }

  checkInterval() {
    let lastCents;
    this.interval = setInterval(() => {
      const amountTime = calculateAmountTime(this.props.mode, this.props.table);
      const currentCents = parseInt(amountTime / 100, 10);
      if (lastCents !== currentCents) {
        this.setState({
          amountTime: Math.floor(amountTime * 100) / 100,
        });
        lastCents = currentCents;
      }
      if (amountTime <= 0) {
        this.setState({
          isToggling: true,
        });
        this.toggleAction();
        if (this.props.mode === 'working') {
          this.props.toggleMode();
        } else {
          this.props.reset();
        }
        this.setState({
          amountTime: calculateAmountTime(this.props.mode, this.props.table),
        });
        if (!PAUSE_BETWEEN) {
          this.toggleAction();
        }
        this.setState({
          isToggling: false,
        });
      }
    }, INTERVAL_TIME);
  }

  toggleAction() {
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
    this.props.toggleActive();
    this.props.addToTable({
      mode: this.props.mode,
      table: newTable,
    });
    if (this.props.isActive) {
      clearInterval(this.interval);
    } else {
      this.checkInterval();
    }
  }

  render() {
    return (
      <TimerLayout
        msg={this.getMsg()}
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
  toggleActive: PropTypes.func,
  toggleMode: PropTypes.func,
  addToTable: PropTypes.func,
  reset: PropTypes.func,
};
