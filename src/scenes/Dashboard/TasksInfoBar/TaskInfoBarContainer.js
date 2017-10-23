// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { modalOpen } from '../../../components/Modal/duck';
import constants from '../constants';

type Props = {
  modalOpen: Function,
};

const TaskInfoBarConnectedContainer = (WrappedComponent: Function) => {
  class TaskInfoBarContainer extends Component<Props> {
    handleAddTask: () => void;
    constructor(props) {
      super(props);
      this.handleAddTask = this.handleAddTask.bind(this);
    }
    handleAddTask() {
      const { modalOpen } = this.props;
      modalOpen(constants.addTaskModalName);
    }
    render() {
      return <WrappedComponent handleAddTask={this.handleAddTask} />
    }
  }
  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(TaskInfoBarContainer);
}

export function mapStateToProps() {
  return {};
};

export const mapDispatchToProps = {
  modalOpen,
};

export default TaskInfoBarConnectedContainer;
