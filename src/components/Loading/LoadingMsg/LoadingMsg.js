// @flow
import React from 'react';
import styled from 'styled-components';
import colors from '../../../styles/colors';

const StyledLoadingMsg = styled.p`
  color: ${colors.secondary};
  margin: 2rem;
  text-align: center;
  font-weight: 500;
  font-size: 2rem;
`;

const LoadingMsg = ({ children }) => <StyledLoadingMsg>{children}</StyledLoadingMsg>;

export default LoadingMsg;
