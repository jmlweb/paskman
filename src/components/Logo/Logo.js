// @flow
import React from 'react';
import styled from 'styled-components';
import LogoSVG from './LogoSVG';

const StyledLogo = styled.span`
  display: inline-flex;
  align-items: center;
`;

const StyledText = styled.span`
  font-size: 2.4rem;
  font-weight: 700;
`;

const Logo = () => (
  <StyledLogo>
    <LogoSVG />
    <StyledText>PASKMAN</StyledText>
  </StyledLogo>
);

export default Logo;
