import "./iconRow.css";

const IconRow = (props) => {
  const { icons } = props;
  return (
    <div className="m-2">
      <table>
        <tr>
          {icons.map((iconItem) => {
            return (
              <td key={iconItem.route} className="col p-1 iconCol">
                <a href={iconItem.route}>
                  <img src={iconItem.routeIcon} className="iconRowImage" />
                </a>
              </td>
            );
          })}
        </tr>
      </table>
      <div className="row iconRow"></div>
    </div>
  );
};

export default IconRow;
