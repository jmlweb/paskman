// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import colors from '../../../styles/colors';
import timings from '../../../styles/timings';
import topBarHeight from '../../../styles/topBarHeight';
import { type RoutesType } from '../../../types';

type Props = {
  menuOpen: boolean,
  toggleMenu: () => void,
  routes: RoutesType,
};

const StyledLink = styled(Link)`
  align-items: center;
  border-bottom: 1px solid ${colors.secondaryS2};
  box-shadow: 0 1px 0 ${colors.secondaryT2};
  color: ${colors.white};
  display: flex;
  filter: blur(5px);
  flex: 1;
  flex-direction: column;
  font-size: 2rem;
  justify-content: center;
  text-decoration: none;
  transition: all 0.4s ${timings.easeInOutQuad};
  &:active {
    background: ${colors.secondaryS7};
  }
  &:last-child {
    border-bottom: 2px solid transparent;
  }
`;

const openMenu = css`
  border-bottom: 1px solid ${colors.secondaryS5};
  border-top: 1px solid ${colors.secondaryS5};
  max-height: calc(100vh - ${topBarHeight});
  transition: max-height 0.3s ${timings.easeOutBack};
`;

const closedMenu = css`
  max-height: 0;
  transition: max-height 0.3s ${timings.easeInQuad};
`;

const StyledMenu = styled.nav`
  background: ${colors.secondary};
  bottom: 0;
  color: ${colors.white};
  display: flex;
  flex-direction: column;
  left: 0;
  margin: 0;
  overflow: hidden;
  padding: 0;
  position: fixed;
  right: 0;
  top: ${topBarHeight};
  z-index: 5;
  ${props => props.menuOpen ? openMenu : closedMenu};
  ${StyledLink} {
    filter: blur(0);
    opacity: ${props => props.menuOpen ? 1 : 0};
  }
`;

const Menu = ({ menuOpen, toggleMenu, routes }: Props) => (
  <StyledMenu menuOpen={menuOpen}>
    {routes.map(route => <StyledLink key={`link${route.title}`} to={route.path} onClick={toggleMenu}>{route.title}</StyledLink>)}
  </StyledMenu>
);

export default Menu;
