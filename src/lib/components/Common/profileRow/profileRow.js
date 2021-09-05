import "./profileRow.css";

const ProfileRow = (props) => {
  const { skills } = props;

  return (
    <div className="row ">
      {skills.map((skillItem) => {
        return (
          <div key={skillItem.title} className="col">
            <div className="card mb-4 p-3 profileSkillCard">
              <div className="profileSkillImageCard">
                <img
                  src={skillItem.icon}
                  className="profileSkillImage"
                  alt={skillItem.title}
                />
              </div>
              <h3 className="profileStatement" id="profileTitle">
                {skillItem.title}
              </h3>
              <p className="profileStatement">{skillItem.statement}</p>
              <div className="button">View Tech Stack</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProfileRow;
