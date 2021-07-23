import "./profilePhoto.css";

import { Pictures } from "../../../Strings/asset_strings";

const ProfilePhoto = (props) => {
  return (
    <div>
      <img
        src={Pictures.profilePictures}
        className="profilePhoto"
        alt="ProfilePhoto"
      />
    </div>
  );
};
export default ProfilePhoto;
