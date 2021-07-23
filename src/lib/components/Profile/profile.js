import ProfileUserBio from "../Common/profileUserStatement/profileUserBio";
import ProfileUserStatement from "../Common/profileUserStatement/profileUserStatement";
import "./profile.css";
const Profile = () => {
  return (
    <div className="container">
      <div className="profile row justify-content-start align-items-center">
        <div className="col">
          <ProfileUserStatement />
        </div>
        <div className="col">
          <ProfileUserBio />
        </div>
      </div>
    </div>
  );
};

export default Profile;
