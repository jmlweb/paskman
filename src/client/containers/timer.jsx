import React, {
  Component,
  PropTypes,
} from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import * as Immutable from 'immutable';
import Clock from '../components/clock';
import TimerButton from './timer-button';
import {
  toggleActive,
  setMode,
  addToTable,
  pomodoroReset,
} from '../actions/timer-actions';
import { minToMil } from '../utils/parse-time';
import {
  WORKING_MIN,
  RESTING_MIN,
  PAUSE_BETWEEN,
  WORKING_MODE,
  RESTING_MODE,
  INTERVAL_TIME,
} from '../constants/timer-constants';

function getElapsedTime(timeTable) {
  const now = moment().startOf('second');
  const differencesArr = timeTable.map((timeItem) => {
    const timeStart = moment(timeItem.get('start')).startOf('second') || now;
    const timeEnd = moment(timeItem.get('end')).startOf('second') || now;
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
  const modeTime = mode === WORKING_MODE ? minToMil(WORKING_MIN) : minToMil(RESTING_MIN);
  if (elapsedTime > modeTime) {
    return mode === WORKING_MODE ? minToMil(RESTING_MIN) : minToMil(WORKING_MIN);
  }
  return modeTime - elapsedTime;
}

class Timer extends Component {
  constructor(props) {
    super(props);
    this.toggleAction = this.toggleAction.bind(this);
    this.state = {
      amountTime: calculateAmountTime(
        props.mode,
        props.table,
      ),
    };
  }

  componentDidMount() {
    this.checkInterval();
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleAction() {
    const type = this.props.isActive ? 'end' : 'start';
    const pushIfStart = (table) => {
      if (type === 'start') {
        const newList = table.get(this.props.mode).push(Immutable.Map());
        return table.set(this.props.mode, newList);
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
  }

  checkInterval() {
    this.interval = setInterval(() => {
      if (this.props.isActive) {
        this.setState({
          amountTime: calculateAmountTime(
            this.props.mode,
            this.props.table,
          ),
        });
        if (this.state.amountTime <= INTERVAL_TIME) {
          this.toggleAction();
          if (this.props.mode === WORKING_MODE) {
            this.props.setMode(RESTING_MODE);
          } else {
            this.props.pomodoroReset();
          }
          if (!PAUSE_BETWEEN) {
            this.toggleAction();
          }
        }
      }
    }, 500);
  }

  render() {
    return (
      <div>
        <Clock
          amount={this.state.amountTime}
        />
        <TimerButton
          isActive={this.props.isActive}
          toggleAction={this.toggleAction}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isActive: state.getIn(['timer', 'isActive']),
  mode: state.getIn(['timer', 'mode']),
  table: state.getIn(['timer', 'table']),
});

const mapDispatchToProps = dispatch =>
  ({
    toggleActive: () => { dispatch(toggleActive()); },
    setMode: (newMode) => { dispatch(setMode(newMode)); },
    addToTable: (newTableMode) => { dispatch(addToTable(newTableMode)); },
    pomodoroReset: () => { dispatch(pomodoroReset()); },
  });

export default connect(mapStateToProps, mapDispatchToProps)(Timer);

Timer.propTypes = {
  isActive: PropTypes.bool,
  mode: PropTypes.string,
  table: PropTypes.objectOf(
    PropTypes.any,
  ),
  toggleActive: PropTypes.func,
  setMode: PropTypes.func,
  addToTable: PropTypes.func,
  pomodoroReset: PropTypes.func,
};
