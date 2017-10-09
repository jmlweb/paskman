// @flow
import React from 'react';
import { Route, Link } from 'react-router-dom';
import DynamicComponent from '../../components/DynamicComponent';

const AsyncHome = DynamicComponent(() => import('../Home'));

const App = () => (
  <div>
    <header>
      <Link to="/">Home</Link>
    </header>

    <main>
      <Route exact path="/" component={AsyncHome} />
    </main>
  </div>
);

export default App;
