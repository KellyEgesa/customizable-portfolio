import "./primaryButton.css";
const PrimaryButton = (props) => {
  const { buttonText, buttonAction } = props;
  return (
    <div onClick={buttonAction} className="primaryButton">
      {buttonText}
    </div>
  );
};

export default PrimaryButton;
