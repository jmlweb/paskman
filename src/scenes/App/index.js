// @flow
import React from 'react';
import { Route, Link } from 'react-router-dom';
import createDynamicComponent from '../../components/DynamicComponent';

type RouteType = {
  +path: string,
  +title: string,
  +component: any,
};

const routes: Array<RouteType> = [
  {
    path: '/',
    title: 'Home',
    component: createDynamicComponent(
      () => import('../Home'), () => require('../Home')
    ),
  },
];

const App = () => (
  <div>
    <header>
      {routes.map(route => <Link key={`link${route.title}`} to={route.path}>{route.title}</Link>)}
    </header>

    <main>
      {routes.map(route => <Route key={`route${route.title}`} exact path={route.path} component={route.component} />)}
    </main>
  </div>
);

export default App;
