import { connect } from 'react-redux';
import Message from '../components/message';

const mapStateToProps = state => ({
  message: state.getIn(['timer', 'isEnabled']) ? 'Timer enabled' : 'Timer disabled',
  amount: state.getIn(['timer', 'amount']),
});

export default connect(mapStateToProps)(Message);
