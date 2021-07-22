//landing page icons
import githubIcon from "../../assets/Icons/github_icons.svg";
import linkedInIcon from "../../assets/Icons/linkedIn_icon.svg";
import twitterIcon from "../../assets/Icons/twitter_icon.svg";
//pictures
import profilePictures from "../../assets/Images/profile_photo.svg";

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

export class Pictures {
  static profilePictures = profilePictures;
}

export class LandingPageIcons {
  static githubIcon = githubIcon;
  static linkedInIcon = linkedInIcon;
  static twitterIcon = twitterIcon;
}
