import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  menuToggleOpen,
} from './reducer';
import TopbarView from './view';

const { bool, func } = React.PropTypes;

class Topbar extends Component {
  constructor(props) {
    super(props);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.handleTouchMove = this.handleTouchMove.bind(this);
    this.interval = null;
    this.state = {
      lastY: 9999,
    };
  }
  toggleMenu() {
    this.props.menuToggleOpen();
  }
  /**
   * Handles touch events on menu
   */
  handleTouchMove(e) {
    const currentY = e.touches[0].clientY;
    clearTimeout(this.interval);
    this.setState({
      lastY: currentY,
    });
    this.interval = setTimeout(() => {
      const windowHeight = window.outerHeight;
      this.setState({
        lastY: 9999,
      });
      if (currentY <= windowHeight / 1.5) {
        this.toggleMenu();
      }
    }, 200);
  }
  render() {
    return (
      <TopbarView
        menuOpen={this.props.menuOpen}
        toggleMenu={this.toggleMenu}
        handleTouchMove={this.handleTouchMove}
        lastY={this.state.lastY}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    menuOpen: state.components.topbar.get('menuOpen'),
  };
}

export default connect(mapStateToProps, {
  menuToggleOpen,
})(Topbar);

Topbar.propTypes = {
  menuOpen: bool.isRequired,
  menuToggleOpen: func.isRequired,
};
