import React from 'react';
import PT from 'prop-types';
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

LoadingMsg.propTypes = {
  children: PT.node.isRequired,
};

export default LoadingMsg;
