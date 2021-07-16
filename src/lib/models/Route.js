export class Route {
  constructor({ routeName, route }) {
    this.routeName = routeName;
    this.route = route;
  }

  getRouteName() {
    return this.routeName;
  }

  getRoute() {
    return this.route;
  }
}
