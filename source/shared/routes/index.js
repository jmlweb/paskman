import { Router, Route, IndexRoute } from 'react-router';
import createApp from '../layouts/app';
import createHome from '../pages/home';
import createTestData from '../components/test-data';

export default (React, history) =>
  (
    <Router history={history}>
      <Route path="/" component={createApp(React)}>
        <IndexRoute component={createHome(React)} />
        <Route path="/test-data" component={createTestData(React)} />
      </Route>
    </Router>
  );
