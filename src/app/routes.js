import React from 'react';
import {
  Route,
  IndexRoute,
} from 'react-router';

import Main from './scenes/main';
import Dashboard from './scenes/dashboard';
import Backlog from './scenes/backlog';

export default () => (
  <Route path="/" component={Main}>
    <IndexRoute component={Dashboard} />
    <Route path="backlog" component={Backlog} />
  </Route>
);
