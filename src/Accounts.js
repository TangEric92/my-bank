import React from "react";
import Account from "./Account";

class Accounts extends React.Component {
  render = () => {
    const data = this.props.data;

    return (
      <div className="accounts">
        {data.map((account, index) => {
          return <Account key={"account:" + index} data={account} />;
        })}
      </div>
    );
  };
}

export default Accounts;
