import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const PageTitle = styled.h1`
  font-size: 24px;
  text-align: center;
`;

function Header(){
  return (
    <React.Fragment>
      <PageTitle>
        <h1>Art by Haley</h1>
      </PageTitle>
      <Link to="/admin">Admin</Link>
    </React.Fragment>
  );
}

export default Header;