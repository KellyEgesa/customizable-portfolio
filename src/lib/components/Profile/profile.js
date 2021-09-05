import ProfileUserBio from "../Common/profileUserStatement/profileUserBio";
import ProfileUserStatement from "../Common/profileUserStatement/profileUserStatement";
import "./profile.css";
const Profile = () => {
  return (
    <div className="profilePage container row">
      <div className="col p-2">
        <ProfileUserStatement />
      </div>
      <div className="col p-2">
        <ProfileUserBio />
      </div>
    </div>
  );
};

export default Profile;
