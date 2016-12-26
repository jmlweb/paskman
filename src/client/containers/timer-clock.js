import { connect } from 'react-redux';
import Message from '../components/message';

const mapStateToProps = state => ({
  message: state.getIn(['timer', 'isEnabled']) ? 'Timer enabled' : 'Timer disabled',
});

export default connect(mapStateToProps)(Message);
