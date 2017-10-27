import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const Router = props =>
  <main>
    <Route exact path="/" render={() => (
      <Redirect to="/dashboard"/>
    )}/>
    {props.routes.map(
      route => (
        <Route
          key={`route${route.title}`}
          path={route.path}
          component={route.component}
          routes={route.routes}
        />
      )
    )}
  </main>;

export default Router;
