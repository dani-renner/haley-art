import React from "react";
import { Link } from "react-router-dom";

export default function Admin(){
  return (
    <React.Fragment>
      <p>Only the site owner can access</p>
      <Link to="/signin">Sign In</Link>
    </React.Fragment>
  );
}
