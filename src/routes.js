// @flow
import createDynamicComponent from './components/DynamicComponent/DynamicComponent';
import { type RoutesType } from './types';

const routes: RoutesType = [
  {
    path: '/dashboard',
    title: 'Dashboard',
    component: createDynamicComponent(
      () => import('./scenes/Dashboard/Dashboard'),
      /* istanbul ignore next */
      () => require('./scenes/Dashboard/Dashboard'),
    ),
  },
  {
    path: '/settings',
    title: 'Settings',
    component: createDynamicComponent(
      () => import('./scenes/SettingsConfig/SettingsConfigContainer'),
      /* istanbul ignore next */
      () => require('./scenes/SettingsConfig/SettingsConfigContainer'),
    ),
  },
  {
    path: '/loading',
    title: 'Loading',
    component: createDynamicComponent(
      () => import('./components/Loading/Loading'),
      /* istanbul ignore next */
      () => require('./components/Loading/Loading'),
    ),
  },
];

export default routes;