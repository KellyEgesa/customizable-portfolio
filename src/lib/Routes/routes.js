import { Route } from "../models/Route";
import { LandingPageIcons } from "../Strings/asset_strings";
import { Constants } from "../Strings/Constants";

//navbar routes
const home = new Route({ routeName: "Home", route: "" });
const profile = new Route({ routeName: "Profile", route: "profile" });
const services = new Route({ routeName: "Services", route: "services" });
const projects = new Route({ routeName: "Projects", route: "projects" });
const contacts = new Route({ routeName: "Contacts", route: "contacts" });

//icons with routing
const gitHubRoute = new Route({
  routeName: "Github",
  route: Constants.githubUrl,
  routeIcon: LandingPageIcons.githubIcon,
});
const linkedInRoute = new Route({
  routeName: "LinkedIn",
  route: Constants.linkedinUrl,
  routeIcon: LandingPageIcons.linkedInIcon,
});
const twitterRoute = new Route({
  routeName: "Twitter",
  route: Constants.twitterUrl,
  routeIcon: LandingPageIcons.twitterIcon,
});

export class Routes {
  static navBarRoutes = [home, profile, services, projects, contacts];
  static iconRoutes = [linkedInRoute, gitHubRoute, twitterRoute];
}
