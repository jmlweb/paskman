// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { modalToggle } from '../../../components/Modal/duck';
import AddTask from './AddTask';

const modalName = 'addTask';

class AddTaskContainer extends Component {
  constructor(props) {
    super(props);
    console.log('entra');
  }
  ComponentWillMount() {
    this.props.modalToggle(modalName);
  }
  render() {
    return <AddTask name={modalName} />;
  }
}

export function mapStateToProps(state: {
  components: {
    modal: mixed,
  }
}) {
  return { ...state.components.modal };
};

export const mapDispatchToProps = {
  modalToggle,
};

const AddTaskConnectedContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTaskContainer);

export default AddTaskConnectedContainer;
