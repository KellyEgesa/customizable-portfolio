import "./primaryButton.css";
const PrimaryButton = (props) => {
  const { buttonText, buttonAction, buttonClass } = props;
  return (
    <div id="primaryButton" onClick={buttonAction} className={buttonClass}>
      {buttonText}
    </div>
  );
};

export default PrimaryButton;
