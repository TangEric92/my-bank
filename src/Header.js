import React from "react";
import User from "./User";
import Logo from "./Logo";

class Header extends React.Component {
  render = () => {
    return (
      <header>
        <Logo />
        <User userName="Alex" />
      </header>
    );
  };
}

export default Header;
