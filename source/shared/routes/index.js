import { Router, Route, IndexRoute } from 'react-router';
import createApp from 'shared/components/app';
import createHome from 'shared/components/home';
import createTestData from 'shared/components/test-data';

export default (React, browserHistory) => {

  return (
    <Router history={ browserHistory }>
      <Route path="/" component={ createApp(React) }>
        <IndexRoute component={ createHome(React) } />
        <Route path="/test-data" component={ createTestData(React) } />
      </Route>
    </Router>
  );
};
