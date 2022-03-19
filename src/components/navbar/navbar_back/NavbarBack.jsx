import React from "react";
import "./NavbarBack.css";

//React Route
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NavbarBack(props) {
  return (
    <nav className="navbar navbar-expand navbar-light bg-default fixed-top">
      <div className="container-fluid">
        <div className="navbar-nav mr-auto">
            <Link className="no-decoration color-white" to={props.to}>
                <FontAwesomeIcon className="font-24" icon="arrow-left" />
                <span className="ml-3 bold font-24">{props.title}</span>
            </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavbarBack;
