import { connect } from 'react-redux';
import Button from '../components/button';
import { toggleEnabled } from '../actions/timer-actions';

const mapStateToProps = state => ({
  isEnabled: state.getIn('timer', 'isEnabled'),
  actionLabel: state.getIn(['timer', 'isEnabled']) ? 'Pause timer' : 'Start timer',
});

const mapDispatchToProps = dispatch =>
  ({
    action: () => { dispatch(toggleEnabled()); },
  });

export default connect(mapStateToProps, mapDispatchToProps)(Button);
