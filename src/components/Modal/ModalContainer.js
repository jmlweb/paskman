// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  modalToggle,
} from './duck';
import Modal from './Modal';

type Props = {
  title: string,
  isOpen: bool,
  children: mixed,
  name: string,
  modalToggle: (name: string) => void,
  closeCallback: () => void,
};

class ModalContainer extends Component<Props> {
  handleToggle: (e: Event) => void;
  constructor(props: Props) {
    super(props);
    this.handleToggle = this.handleToggle.bind(this);
  }
  handleToggle(e: Event) {
    const { name, isOpen, modalToggle, closeCallback } = this.props;
    modalToggle(name);
    if (!isOpen && closeCallback) {
      closeCallback();
    }
  }
  render() {
    const { isOpen, title, children } = this.props;
    return (
      <Modal
        title={title}
        isOpen={isOpen}
        handleToggle={this.handleToggle}
      >
        {children}
      </Modal>
    );
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

const ModalConnectedContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalContainer);

// const withModal = (WrappedComponent: Function, props: {
//   title: string,
//   name: string,
//   isOpen?: bool,
//   closeCallback?: () => void,
// }) => (
//   <ModalConnectedContainer {...props}>
//     <WrappedComponent />
//   </ModalConnectedContainer>
// );

export default ModalConnectedContainer;
