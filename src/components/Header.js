import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const pageTitle = styled.h1`
  font-size: 24px;
  text-align: center;
`;

function Header(){
  return (
    <React.Fragment>
      <pageTitle>
        <h1>Art by Haley</h1>
      </pageTitle>
    </React.Fragment>
  );
}

export default Header;