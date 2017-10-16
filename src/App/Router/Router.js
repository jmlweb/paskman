// @flow
import React from 'react';
import { Route } from 'react-router-dom';
import { type RouteTypes } from '../../types';

type Props = {
  routes: RouteTypes,
};

const Router = (props: Props) => (
  <main>
    {props.routes.map(
      route => <Route key={`route${route.title}`} exact path={route.path} component={route.component} />
    )}
  </main>
);

export default Router;
