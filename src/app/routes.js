import React from 'react';
import {
  Route,
  IndexRoute,
} from 'react-router';

import Main from './containers/main';
import Timer from './pages/timer';
import Backlog from './pages/backlog';

export default () => (
  <Route path="/" component={Main}>
    <IndexRoute component={Timer} />
    <Route path="backlog" component={Backlog} />
  </Route>
);
