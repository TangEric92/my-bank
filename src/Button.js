import React from "react";

class Button extends React.Component {
  render = () => {
    return (
      <div className="button-container">
        <div className="button">{this.props.text}</div>
      </div>
    );
  };
}

export default Button;
