import React from 'react';
import styled, { injectGlobal } from 'styled-components';
import { normalize } from 'polished';
import ConnectedResizer from './Resizer/ResizerContainer';
import TopBar from './TopBar/TopBarContainer';
import Router from './Router/Router';
import routes from '../routes';
import fonts, { fontSmoothing } from '../styles/fonts';

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

const App = () => (
  <Wrapper>
    <ConnectedResizer />
    <TopBar routes={routes} />
    <Router routes={routes} />
  </Wrapper>
);

export default App;
