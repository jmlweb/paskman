import { Router, Route, IndexRoute } from 'react-router';
import createApp from '../layouts/app';
import createHome from '../pages/home';
import createSettings from '../pages/settings';

export default (React, history) =>
  (
    <Router history={history}>
      <Route path="/" component={createApp(React)}>
        <IndexRoute component={createHome(React)} />
        <Route path="/settings" component={createSettings(React)} />
      </Route>
    </Router>
  );
