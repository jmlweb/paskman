import React from 'react';
import {
  Route,
  IndexRoute,
} from 'react-router';

import Main from './pages/main';
import Dashboard from './pages/dashboard';
import Backlog from './pages/backlog';

export default () => (
  <Route path="/" component={Main}>
    <IndexRoute component={Dashboard} />
    <Route path="backlog" component={Backlog} />
  </Route>
);
