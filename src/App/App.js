// @flow
import * as React from 'react';
import styled, { injectGlobal } from 'styled-components';
import { normalize } from 'polished';
import Resizer from './Resizer/ResizerContainer';
import TopBar from './TopBar/TopBarContainer';
import Router from './Router/Router';
import routes from '../routes';
import fonts, { fontSmoothing } from '../styles/fonts';

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
