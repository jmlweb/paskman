// @flow
/**
 * ROUTES
 */
export type RouteType = {
  +path: string,
  +title: string,
  +component: Function,
};

export type RoutesType = RouteType[];
