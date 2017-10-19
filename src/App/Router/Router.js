// @flow
import React from 'react';
import { Route } from 'react-router-dom';
import { type RoutesType } from '../../types';

type Props = {
  routes: RoutesType,
};

const Router = (props: Props) => (
  <main>
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
