import React from "react";
import "./NavbarDefault.css";

//logo
import main_logo from "../../../assets/contacts-logo.png";

function NavbarDefault(props) {
  return (
    <nav className="navbar navbar-expand navbar-light bg-default fixed-top">
      <div className="container-fluid">
        <div className="navbar-brand">
          <img src={main_logo} alt="main_logo" className="logo-size" />
          <span className="nav-title">{props.title}</span>
        </div>
      </div>
    </nav>
  );
}

export default NavbarDefault;
