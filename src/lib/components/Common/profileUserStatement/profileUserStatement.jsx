import "./profileUserStatement.css";

import { GIFS } from "../../../Strings/asset_strings";
import { Constants } from "../../../Strings/Constants";
import PrimaryButton from "../primaryButton/primaryButton";

const ProfileUserStatement = () => {
  return (
    <div className="ProfileUserStatement">
      <div className="card pUSImageCard">
        <img className="pUSImage" src={GIFS.userStatementImage} alt="" />
        <p className="pUSP">{Constants.userStatement}</p>
        <PrimaryButton
          className="pUSIButton"
          buttonText={Constants.contactMe}
          buttonClass="primaryButtonAlt"
        />
      </div>
    </div>
  );
};

export default ProfileUserStatement;
