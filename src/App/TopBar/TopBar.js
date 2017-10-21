// @flow
import React from 'react';
import styled from 'styled-components';
import colors from '../../styles/colors';
import spacing from '../../styles/spacing';
import topBarHeight from '../../styles/topBarHeight';
import Logo from '../../components/Logo/Logo';
import TopBarBtn from './TopBarBtn/TopBarBtn';
import TopBarMenu from './TopBarMenu/TopBarMenu';
import type { RoutesType } from '../../types';

type Props = {
  menuOpen: boolean,
  routes: RoutesType,
  topBarToggleMenu: () => void,
};

const StyledTopBar = styled.div`
  background: ${colors.primary};
  color: ${colors.secondary};
`;

const StyledWrapper = styled.div`
  align-items: center;
  display: flex;
  height: ${topBarHeight};
  justify-content: space-between;
  padding: 0 ${spacing.sm};
`;

const StyledNav = styled.div``;

const TopBar = ({ menuOpen, routes, topBarToggleMenu }: Props) => (
  <StyledTopBar>
    <StyledWrapper>
      <Logo />
      <StyledNav>
        <TopBarBtn menuOpen={menuOpen} toggleMenu={topBarToggleMenu} />
        <TopBarMenu menuOpen={menuOpen} toggleMenu={topBarToggleMenu} routes={routes} />
      </StyledNav>
    </StyledWrapper>
  </StyledTopBar>
);

export default TopBar;
