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
import { minToMil } from '../../utils/parse-time';
import {
  WORKING_MIN,
  RESTING_MIN,
  PAUSE_BETWEEN,
  WORKING_MODE,
  INTERVAL_TIME,
} from '../../constants/pomodoro';
import createTimerClock from './clock';
import createTimerButton from './button';

const TimerClock = createTimerClock(React);
const TimerButton = createTimerButton(React);

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
      amountTime: 0,
      isToggling: false,
    };
  }

  componentDidMount() {
    this.checkInterval();
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    if (this.props.isActive) {
      this.toggleAction();
    }
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
          this.setState({
            isToggling: true,
          });
          this.toggleAction();
          clearInterval(this.interval);
          if (this.props.mode === WORKING_MODE) {
            this.props.toggleMode();
          } else {
            this.props.reset();
          }
          setTimeout(() => {
            this.checkInterval();
            if (!PAUSE_BETWEEN) {
              this.toggleAction();
            }
            this.setState({
              isToggling: false,
            });
          }, INTERVAL_TIME * 2);
        }
      }
    }, INTERVAL_TIME);
  }

  render() {
    return (
      <div>
        <TimerClock
          amount={this.state.amountTime}
        />
        <TimerButton
          isActive={this.props.isActive}
          isToggling={this.state.isToggling}
          toggleAction={this.toggleAction}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return ({
    isActive: state.pomodoro.get('isActive'),
    mode: state.pomodoro.get('mode'),
    table: state.pomodoro.get('table'),
  });
};

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
