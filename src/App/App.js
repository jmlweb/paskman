// @flow
import React from 'react';
import styled, { injectGlobal } from 'styled-components';
import { normalize } from 'polished';
import createDynamicComponent from '../components/DynamicComponent';
import Resizer from './Resizer/ResizerContainer';
import TopBar from './TopBar/TopBarContainer';
import Router from './Router/Router';
import fonts, { fontSmoothing } from '../styles/fonts';
import { type RoutesTypes } from '../types';

export const routes: RoutesTypes = [
  {
    path: '/',
    title: 'Home',
    component: createDynamicComponent(
      () => import('../scenes/Home/Home'),
      /* istanbul ignore next */
      () => require('../scenes/Home/Home'),
    ),
  },
  {
    path: '/settings',
    title: 'Settings',
    component: createDynamicComponent(
      /* istanbul ignore next */
      () => import('../scenes/SettingsConfig/SettingsConfigContainer'),
      /* istanbul ignore next */
      () => require('../scenes/SettingsConfig/SettingsConfigContainer'),
    ),
  },
  {
    path: '/loading',
    title: 'Loading',
    component: createDynamicComponent(
      /* istanbul ignore next */
      () => import('../components/Loading/Loading'),
      /* istanbul ignore next */
      () => require('../components/Loading/Loading'),
    ),
  },
];

const { rootFontSize, defaultFontSize, fontFamily } = fonts;

injectGlobal`${normalize()}`

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
