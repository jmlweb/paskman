import React, {
  Component,
  PropTypes,
} from 'react';
import { connect } from 'react-redux';
import Clock from '../components/clock';
import TimerButton from './timer-button';
import {
  toggleEnabled,
  setAmount,
  setState,
} from '../actions/timer-actions';
import { minToMil } from '../utils/parse-time';
import {
  POMODORO_MIN,
  REST_MIN,
  TIMER_INTERVAL,
  POMODORO_STATE,
  REST_STATE,
  PAUSE_BETWEEN,
} from '../constants/timer-constants';

class App extends Component {
  componentDidMount() {
    this.checkInterval();
  }

  componentWillUnmount() {
    clearTimeout(this.interval);
  }

  checkInterval() {
    this.interval = setTimeout(() => {
      this.forceUpdate.bind(this);
      if (this.props.isEnabled) {
        if (this.props.amount < TIMER_INTERVAL) {
          if (this.props.state === POMODORO_STATE) {
            this.props.setAmount(minToMil(REST_MIN));
            this.props.setState(REST_STATE);
          } else {
            this.props.setAmount(minToMil(POMODORO_MIN));
            this.props.setState(POMODORO_STATE);
          }
          if (PAUSE_BETWEEN) {
            this.props.toggleEnabled();
          }
        } else {
          this.props.setAmount(this.props.amount - TIMER_INTERVAL);
        }
      }
      this.checkInterval(this.props);
    }, 500);
  }

  render() {
    return (
      <div>
        <Clock amount={this.props.amount} />
        <TimerButton />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isEnabled: state.getIn(['timer', 'isEnabled']),
  amount: state.getIn(['timer', 'amount']),
  state: state.getIn(['timer', 'state']),
});

const mapDispatchToProps = dispatch =>
  ({
    setAmount: (amount) => { dispatch(setAmount(amount)); },
    toggleEnabled: () => { dispatch(toggleEnabled()); },
    setState: (newState) => { dispatch(setState(newState)); },
  });

export default connect(mapStateToProps, mapDispatchToProps)(App);

App.propTypes = {
  isEnabled: PropTypes.bool,
  amount: PropTypes.number,
  state: PropTypes.number,
  setState: PropTypes.func,
  setAmount: PropTypes.func,
  toggleEnabled: PropTypes.func,
};
