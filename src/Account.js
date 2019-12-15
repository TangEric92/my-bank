import React from "react";
import Operations from "./Operations";
import Button from "./Button";

class Account extends React.Component {
  render = () => {
    const data = this.props.data;

    return (
      <div className="account">
        {/* Header */}
        <div className="account-header" style={{ backgroundColor: data.color }}>
          <span className="account-name">{data.name}</span>
          <span className="account-name">
            {data.balance} <span className="euro">€</span>
          </span>
        </div>

        {/* Operations */}
        <Operations operations={data.operations} />
        <Button text="SEE MORE" />
      </div>
    );
  };
}

export default Account;
