// @flow
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { type RoutesType } from '../../types';

type Props = {
  routes: RoutesType,
};

const Router = (props: Props) => (
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
  </main>
);

export default Router;
