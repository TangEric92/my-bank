import React from "react";
import UserIcon from "./UserIcon";

class User extends React.Component {
  render = () => {
    return (
      <div className="user">
        <p>{this.props.userName}</p>
        <div className="icon">
          <UserIcon />
        </div>
      </div>
    );
  };
}

export default User;
