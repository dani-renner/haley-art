import React from "react";
import { Link } from "react-router-dom";

function Header(){
  return (
    <React.Fragment>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/admin">Admin</Link>
        </li>
      </ul>
    </React.Fragment>
  );
}

export default Header;