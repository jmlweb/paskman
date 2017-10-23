// @flow
import React from 'react';
import styled from 'styled-components';
import { stripUnit } from 'polished';
import ModalBtnSVG from './ModalBtnSVG';
import spacing from '../../../styles/spacing';
import topBarHeight from '../../../styles/topBarHeight';

const StyledModalBtn = styled.button`
  align-items: center;
  background: transparent;
  border: 0;
  display: inline-flex;
  height: ${topBarHeight};
  justify-content: center;
  margin: 0;
  margin-right: ${+stripUnit(spacing.sm) * -1}px;
  outline: 0;
  width: 12vh;
`;

const ModalBtn = ({ handleClick }) => (
  <StyledModalBtn onClick={handleClick}>
    <ModalBtnSVG />
  </StyledModalBtn>
);

export default ModalBtn;
