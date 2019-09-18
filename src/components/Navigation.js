import React from "react";
import { NavLink } from "react-router-dom";

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    console.log("Navigation");
  }
  render() {
    return (
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/crud">Crud</NavLink>
        <NavLink to="/about">About</NavLink>
      </div>
    );
  }
}

export default Navigation;
