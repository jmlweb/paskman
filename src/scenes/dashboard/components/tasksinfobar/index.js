import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  modalToggle,
} from '../../../../components/modal/duck';
import {
  remainingTasksCount,
  remainingTasksTime,
} from '../../../../data/tasks/duck';
import TaskInfoBarView from './view';

const {
  func,
  number,
} = PropTypes;

class TasksInfoBar extends Component {
  static propTypes = {
    modalToggle: func.isRequired,
    tasks: number,
    count: number,
  };
  static defaultProps = {
    tasks: 0,
    count: 0,
  };
  constructor(props) {
    super(props);
    this.toggleModal = this.toggleModal.bind(this);
  }
  toggleModal() {
    this.props.modalToggle('addTask');
  }
  render() {
    return (
      <TaskInfoBarView
        tasks={this.props.tasks}
        count={this.props.count}
        toggleModal={this.toggleModal}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    tasks: remainingTasksCount(state.data.tasks),
    count: remainingTasksTime(state.data.tasks),
  };
}

export default connect(mapStateToProps, {
  modalToggle,
})(TasksInfoBar);
