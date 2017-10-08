// @flow
import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from '../Home';
import Manager from '../Manager';
import About from '../About';

const App = () => (
  <div>
    <header>
      <Link to="/">Home</Link>
      <Link to="/manager">Manager</Link>
      <Link to="/about-us">About</Link>
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/manager" component={Manager} />
      <Route exact path="/about-us" component={About} />
    </main>
  </div>
);

export default App;
