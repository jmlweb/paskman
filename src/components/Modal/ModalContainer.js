// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  modalToggle,
} from './duck';
import Modal from './Modal';
import type { Props as ComponentProps } from './Modal';

type Props = {
  ...ComponentProps,
  name: string,
  modalToggle: () => void,
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
    if (!isOpen) {
      closeCallback();
    }
  }
  render() {
    const { isOpen, title } = this.props;
    return (
      <Modal
        title={title}
        isOpen={isOpen}
        handleToggle={this.handleToggle}
      />
    );
  }
}

export function mapStateToProps(state: {
  components: {
    modal: [ComponentProps],
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

export default ModalConnectedContainer;
