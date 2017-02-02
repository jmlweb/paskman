import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  menuToggleOpen,
} from '../../redux/modules/menu';
import TopbarView from './view';

const { bool, func } = React.PropTypes;

class Topbar extends Component {
  constructor(props) {
    super(props);
    this.toggleMenu = this.toggleMenu.bind(this);
  }
  toggleMenu() {
    this.props.menuToggleOpen();
  }
  render() {
    return (
      <TopbarView toggleMenu={this.toggleMenu} menuOpen={this.props.menuOpen} />
    );
  }
}

function mapStateToProps(state) {
  return {
    menuOpen: state.menu.get('open'),
  };
}

export default connect(mapStateToProps, {
  menuToggleOpen,
})(Topbar);

Topbar.propTypes = {
  menuOpen: bool.isRequired,
  menuToggleOpen: func.isRequired,
};
