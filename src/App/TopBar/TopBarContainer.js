// @flow
import { connect } from 'react-redux';
import { topBarToggleMenu } from './duck';
import TopBar from './TopBar';

export function mapStateToProps(state: any) {
  return {
    menuOpen: state.app.topBar.menuOpen,
  }
};

const TopBarContainer = connect(mapStateToProps, {
  topBarToggleMenu,
})(TopBar);

export default TopBarContainer;
