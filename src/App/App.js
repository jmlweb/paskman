import React from 'react';
import styled, { injectGlobal } from 'styled-components';
import { normalize } from 'polished';
import ConnectedResizer from './Resizer/ResizerContainer';
import TopBar from './TopBar/TopBarContainer';
import Router from './Router/Router';
import fonts, { fontSmoothing } from '../styles/fonts';
import { RoutesPT } from '../propTypes';

const { rootFontSize, defaultFontSize, fontFamily } = fonts;

/* eslint-disable no-unused-expressions */
injectGlobal`
  ${normalize()};
  html {
    font-size: ${rootFontSize};
  }
  body {
    font-family: ${fontFamily};
    ${fontSmoothing()}
  }
`;
/* eslint-enable no-unused-expressions */

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: ${defaultFontSize};
  height: 100vh;
  width: 100%;
`;

const App = ({ routes }) => (
  <Wrapper>
    <ConnectedResizer />
    <TopBar routes={routes} />
    <Router routes={routes} />
  </Wrapper>
);

App.defaultProps = {
  routes: [],
};

App.propTypes = {
  routes: RoutesPT,
};

export default App;
