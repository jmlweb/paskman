import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {
  menuToggleOpen,
} from './duck';
import TopbarView from './view';

const { bool, func } = PropTypes;

export class Topbar extends Component {
  static propTypes = {
    menuOpen: bool.isRequired,
    menuToggleOpen: func.isRequired,
  }
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
    if (!this.props.menuOpen) {
      this.setState({
        opacity: 1,
        lastY: 9999,
      });
    }
    this.props.menuToggleOpen();
  }
  /**
   * Handles touch events on menu
   */
  handleTouchMove(e) {
    const currentY = e.touches[0].clientY;
    const windowHeight = window.outerHeight;
    clearTimeout(this.interval);
    this.setState({
      lastY: currentY,
      opacity: (currentY / windowHeight) - 0.2,
    });
    this.interval = setTimeout(() => {
      this.setState({
        lastY: 9999,
      });
      if (currentY <= windowHeight / 1.5) {
        this.setState({
          opacity: 0,
        });
        this.toggleMenu();
      } else {
        this.setState({
          opacity: 1,
        });
      }
    }, 100);
  }
  render() {
    return (
      <TopbarView
        menuOpen={this.props.menuOpen}
        toggleMenu={this.toggleMenu}
        handleTouchMove={this.handleTouchMove}
        lastY={this.state.lastY}
        opacity={this.state.opacity}
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
