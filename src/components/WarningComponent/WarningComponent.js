import "./WarningComponent.scss";

export const WarningComponent = ({ text, icon }) => {
  return (
    <div className="warning-component__container">
      <div>{icon}</div>
      <div className="warning-component__text">{text}</div>
    </div>
  );
};
