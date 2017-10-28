import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { RoutesPT } from '../../propTypes';

const getRoute = route => (
  <Route
    key={`route${route.title}`}
    path={route.path}
    component={route.component}
    routes={route.routes}
  />
);

const Router = props => (
  <main>
    <Route
      exact
      path="/"
      render={() => (
        <Redirect to="/dashboard" />
      )}
    />
    {props.routes.map(getRoute)
    }
  </main>
);

Router.defaultProps = {
  routes: [],
};

Router.propTypes = {
  routes: RoutesPT,
};

export default Router;
