import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {
  modalToggle,
} from '../../../../components/modal/duck';
import TaskInfoBarView from './view';

const { func } = PropTypes;

class TasksInfoBar extends Component {
  static propTypes = {
    modalToggle: func.isRequired,
  }
  constructor(props) {
    super(props);
    this.toggleModal = this.toggleModal.bind(this);
  }
  toggleModal() {
    this.props.modalToggle('addTask');
  }
  render() {
    return (
      <TaskInfoBarView toggleModal={this.toggleModal} />
    );
  }
}

export default connect(null, {
  modalToggle,
})(TasksInfoBar);
