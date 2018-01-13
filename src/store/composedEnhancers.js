import { applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { createEpicMiddleware } from 'redux-observable';

import rootEpic from './rootEpic';
import history from './history';

const epicMiddleware = createEpicMiddleware(rootEpic);
const middleware = [epicMiddleware, routerMiddleware(history)];

const enhancers = [];

/* istanbul ignore next */
if (process.env.NODE_ENV === 'development') {
  const { devToolsExtension } = window;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

export default compose(applyMiddleware(...middleware), ...enhancers);
