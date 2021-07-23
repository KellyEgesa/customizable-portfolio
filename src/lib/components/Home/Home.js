import { Routes } from "../../Routes/routes";
import { Constants } from "../../Strings/Constants";
import IconRow from "../Common/iconRow/iconRow";
import PrimaryButton from "../Common/primaryButton/primaryButton";
import ProfilePhoto from "../Common/profilePhoto/profilePhoto";
import "./homepage.css";

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="profile">
        <ProfilePhoto />
        <h1 className="userName">{Constants.userName}</h1>
        <h2 className="title">{Constants.title}</h2>
        <PrimaryButton
          buttonText={Constants.resume}
          buttonClass="primaryButton"
        />
        <IconRow icons={Routes.iconRoutes} />
      </div>
    </div>
  );
};

export default HomePage;
