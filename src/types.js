/**
 * ROUTES
 */
export type RouteType = {
  +path: string,
  +title: string,
  +component: any,
};

export type RoutesType = Array<RouteType>;
