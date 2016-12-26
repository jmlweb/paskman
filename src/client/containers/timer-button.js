import { connect } from 'react-redux';
import Button from '../components/button';
import { toggleEnabled } from '../actions/timer-actions';

const mapDispatchToProps = dispatch => ({
  action: () => { dispatch(toggleEnabled()); },
  actionLabel: 'Start timer',
});

export default connect(null, mapDispatchToProps)(Button);
