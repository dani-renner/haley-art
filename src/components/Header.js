import React from "react";
import { Link, Router } from "react-router-dom";

function Header(){
  return (
    <React.Fragment>
      <Router>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
      </Router>
    </React.Fragment>
  );
}

export default Header;