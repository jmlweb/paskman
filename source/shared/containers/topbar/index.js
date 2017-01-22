import React, { Component } from 'react';
import createTopbarView from './view';

const TopbarView = createTopbarView(React);

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
      <TopbarView isOpen={this.state.isOpen} toggleOpen={this.toggleOpen} />
    );
  }
}
