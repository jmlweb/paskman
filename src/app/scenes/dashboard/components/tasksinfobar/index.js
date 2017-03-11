import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {
  dashboardToggleTasksModal,
} from '../../duck';
import TaskInfoBarView from './view';

const { func } = PropTypes;

class TasksInfoBar extends Component {
  static propTypes = {
    dashboardToggleTasksModal: func.isRequired,
  }
  constructor(props) {
    super(props);
    this.toggleModal = this.toggleModal.bind(this);
  }
  toggleModal() {
    this.props.dashboardToggleTasksModal();
  }
  render() {
    return (
      <TaskInfoBarView toggleModal={this.toggleModal} />
    );
  }
}

export default connect(null, {
  dashboardToggleTasksModal,
})(TasksInfoBar);
