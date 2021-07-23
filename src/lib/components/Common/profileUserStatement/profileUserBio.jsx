import { Constants } from "../../../Strings/Constants";
import "./profileUserBio.css";
const ProfileUserBio = () => {
  return (
    <div className="profileUserBio">
      <h2 className="profileUserBioPH2">{Constants.profile}</h2>
      <p className="profileUserBioP">{Constants.profileBio}</p>
    </div>
  );
};

export default ProfileUserBio;
