import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {
  modalToggle,
} from './duck';
import ModalView from './view';

const {
  string,
  func,
  bool,
  oneOfType,
  objectOf,
  arrayOf,
  any,
} = PropTypes;

class Modal extends Component {
  static propTypes = {
    modalToggle: func.isRequired,
    name: string.isRequired,
    isOpen: bool,
    title: string.isRequired,
    children: oneOfType([
      objectOf(any),
      arrayOf(any),
    ]).isRequired,
  };
  static defaultProps = {
    isOpen: false,
  };
  constructor(props) {
    super(props);
    this.toggleModal = this.toggleModal.bind(this);
  }
  toggleModal() {
    this.props.modalToggle(this.props.name);
  }
  render() {
    const { title, isOpen, children } = this.props;
    return (
      <ModalView
        title={title}
        toggleModal={this.toggleModal}
        modalOpen={isOpen}
      >
        {children}
      </ModalView>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    isOpen: state.components.modal.get(props.name),
  };
}

export default connect(mapStateToProps, {
  modalToggle,
})(Modal);
