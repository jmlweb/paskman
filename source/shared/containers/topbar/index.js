import React, { Component } from 'react';
import createNavbar from '../../components/navbar';

const Navbar = createNavbar(React);

export default class Topbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.toggleOpen = this.toggleOpen.bind(this);
  }

  toggleOpen() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
      <Navbar isOpen={this.state.isOpen} toggleOpen={this.toggleOpen} />
    );
  }
}
