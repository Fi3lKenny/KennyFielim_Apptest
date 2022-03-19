import React from "react";
import "./MenuItem.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function MenuItem(props) {
  return (
    <div className={`btn btn-menu center ${props.styleName}`}>
      <div>
        <FontAwesomeIcon icon={props.menuLogo} />
        <div className="menu-title font-18 font-sm-12 font-xs-10">
          {props.name}
        </div>
      </div>
    </div>
  );
}

export default MenuItem;
