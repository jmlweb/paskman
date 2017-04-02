import Main from './scenes/main';

function errorLoading(err) {
  console.error('Dynamic page loading failed', err);
}

function loadRoute(cb) {
  return module => cb(null, module.default);
}

export default {
  component: Main,
  childRoutes: [
    {
      path: '/',
      getComponent(location, cb) {
        System.import('./scenes/dashboard')
          .then(loadRoute(cb))
          .catch(errorLoading);
      },
    },
    {
      path: 'backlog',
      getComponent(location, cb) {
        System.import('./scenes/backlog')
          .then(loadRoute(cb))
          .catch(errorLoading);
      },
    },
  ],
};
