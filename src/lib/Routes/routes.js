import { Route } from "../models/Route";

//navbar routes
const home = new Route({ routeName: "Home", route: "" });
const profile = new Route({ routeName: "Profile", route: "profile" });
const services = new Route({ routeName: "Services", route: "services" });
const projects = new Route({ routeName: "Projects", route: "projects" });
const contacts = new Route({ routeName: "Contacts", route: "contacts" });

export class Routes {
  static navBarRoutes = [home, profile, services, projects, contacts];
}
