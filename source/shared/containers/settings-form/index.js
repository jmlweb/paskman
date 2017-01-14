import React, { Component } from 'react';

export default class SettingsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: 'Settings',
    };
  }

  render() {
    return (
      <h1>{this.state.msg}</h1>
    );
  }
}
