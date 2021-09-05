import "./iconRow.css";

const IconRow = (props) => {
  const { icons } = props;
  return (
    <div className="m-2">
      <table>
        <tbody>
          <tr>
            {icons.map((iconItem) => {
              return (
                <td key={iconItem.route} className="col p-1 iconCol">
                  <a href={iconItem.route}>
                    <img
                      src={iconItem.routeIcon}
                      className="iconRowImage"
                      alt={iconItem.route}
                    />
                  </a>
                </td>
              );
            })}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default IconRow;
