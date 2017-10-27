import React from 'react';
import styled, { css } from 'styled-components';
import Heading from '../Heading/Heading';
import ModalBtn from './ModalBtn/ModalBtn';
import colors from '../../styles/colors';
import spacing from '../../styles/spacing';
import timings from '../../styles/timings';
import topBarHeight from '../../styles/topBarHeight';

const activeModalStyle = css`
  border-radius: 0;
  bottom: 0;
  left: 0;
  opacity: 1;
  right: 0;
  top: 0;
  z-index: 99;
  transform: translateY(0);
  transition: all 0.3s ${timings.easeOutBack};
`;

const inactiveModalStyle = css`
  border-radius: 50%;
  bottom: 50%;
  left: 50%;
  opacity: 0;
  right: 50%;
  top: 50%;
  transition: all 0.3s ${timings.easeInBack};
  transform: translateY(-25vh);
  z-index: 1;
`;

const StyledModal = styled.div`
  background: #fff;
  overflow: hidden;
  position: fixed;
  box-shadow: 0 0 8px ${colors.blackA3};
  ${props => props.isOpen ? activeModalStyle : inactiveModalStyle};
`;

const ModalBar = styled.div`
  align-items: center;
  background: ${colors.primary};
  color: ${colors.secondary};
  display: flex;
  height: ${topBarHeight};
  justify-content: space-between;
  padding: 0 ${spacing.sm};
`;

const ModalHeading = styled(Heading)`
  && {
    margin: 0;
  }
`;

const ModalContent = styled.div`
  padding: ${spacing.md} ${spacing.sm};
`;

const Modal = ({ isOpen, title, handleClose, children }) =>
  <StyledModal isOpen={isOpen}>
    <ModalBar>
      <ModalHeading weight="700">{title}</ModalHeading>
      <ModalBtn handleClick={handleClose} />
    </ModalBar>
    <ModalContent>{children}</ModalContent>
  </StyledModal>;

export default Modal;
