import webIcon from "../../assets/Icons/computer_icon.svg";
import mobileIcon from "../../assets/Icons/phone_icon.svg";
import backEndIcon from "../../assets/Icons/server_icon.svg";
import { SkillGroup } from "../models/SkillGroup";

const mobile = new SkillGroup({
  icon: mobileIcon,
  title: "MOBILE APPS",
  statement:
    "Technologies that I use to create cross-platform (IOS and Android) and native mobile applications plus deploying the applications. ",
  route: "mobile",
});

const frontEnd = new SkillGroup({
  icon: webIcon,
  title: "FRONT-END WEB APPS",
  statement:
    "Technologies that I use to create web applications. I make both static and dynamic web applications and I have experience in deployment.",
  route: "frontEnd",
});

const backEnd = new SkillGroup({
  icon: backEndIcon,
  title: "BACKEND",
  statement:
    "Technologies that I use to create the backend including the Databases. I have experience creating REST, SOAP and GraphQL Backends",
  route: "backEnd",
});
const skills = [mobile, frontEnd, backEnd];

export default skills;
