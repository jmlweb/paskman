// @flow
/**
 * ROUTES
 */
export type RouteType = {
  +path: string,
  +title: string,
  +component: Function,
  routes?: mixed,
};

export type RoutesType = RouteType[];
