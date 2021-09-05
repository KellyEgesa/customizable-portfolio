import skills from "../../Strings/SkillGroups";
import ProfileRow from "../Common/profileRow/profileRow";
import ProfileUserBio from "../Common/profileUserStatement/profileUserBio";
import ProfileUserStatement from "../Common/profileUserStatement/profileUserStatement";
import "./profile.css";

const Profile = () => {
  console.log(skills);
  return (
    <div className="profilePage  row">
      <div className="col  p-2">
        <ProfileUserStatement />
      </div>
      <div className="col  p-2">
        <ProfileUserBio />
        <ProfileRow skills={skills} />
      </div>
    </div>
  );
};

export default Profile;
