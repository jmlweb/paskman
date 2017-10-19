// @flow
import * as React from 'react';
import styled, { injectGlobal } from 'styled-components';
import { normalize } from 'polished';
import createDynamicComponent from '../components/DynamicComponent';
import Resizer from './Resizer/ResizerContainer';
import TopBar from './TopBar/TopBarContainer';
import Router from './Router/Router';
import fonts, { fontSmoothing } from '../styles/fonts';
import { type RoutesType } from '../types';

export const routes: RoutesType = [
  {
    path: '/dashboard',
    title: 'Dashboard',
    component: createDynamicComponent(
      () => import('../scenes/Dashboard/Dashboard'),
      /* istanbul ignore next */
      () => require('../scenes/Dashboard/Dashboard'),
    ),
  },
  {
    path: '/settings',
    title: 'Settings',
    component: createDynamicComponent(
      () => import('../scenes/SettingsConfig/SettingsConfigContainer'),
      /* istanbul ignore next */
      () => require('../scenes/SettingsConfig/SettingsConfigContainer'),
    ),
  },
  {
    path: '/loading',
    title: 'Loading',
    component: createDynamicComponent(
      () => import('../components/Loading/Loading'),
      /* istanbul ignore next */
      () => require('../components/Loading/Loading'),
    ),
  },
];

const { rootFontSize, defaultFontSize, fontFamily } = fonts;

injectGlobal`${normalize()}`;

injectGlobal`
html {
  font-size: ${rootFontSize};
}

body {
  font-family: ${fontFamily};
  ${fontSmoothing()}
}
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: ${defaultFontSize};
  height: 100vh;
  width: 100%;
`;

const App = () => (
  <Wrapper>
    <Resizer />
    <TopBar routes={routes} />
    <Router routes={routes} />
  </Wrapper>
);

export default App;
