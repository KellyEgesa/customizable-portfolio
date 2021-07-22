export class Route {
  constructor({ routeName, route, routeIcon }) {
    this.routeName = routeName;
    this.route = route;
    this.routeIcon = routeIcon;
  }

  getRouteName() {
    return this.routeName;
  }

  getRoute() {
    return this.route;
  }

  getRouteIcon() {
    return this.routeIcon;
  }
}
