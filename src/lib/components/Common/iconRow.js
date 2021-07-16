const IconRow = (props) => {
  const { icons } = props;
  return (
    <div>
      <div className="row ">
        {icons.map((iconItem) => {
          return (
            <div className="col">
              <img src={iconItem} className="iconRowImage" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default IconRow;
