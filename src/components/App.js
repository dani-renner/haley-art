import React from 'react';
import Header from './Header';
import ArtControl from "./ArtControl";
import Admin from './Admin';
import Signin from './Signin';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import { MDBContainer } from 'mdb-react-ui-kit';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './../App.css';

function App() {
  return (
    <MDBContainer>
      <React.Fragment>
      <Router>
      <Header />
        <Switch>
          <Route path="/admin">
            <Admin />
          </Route>
        </Switch>
        <Switch>
          <Route path="/signin">
            <Signin />
          </Route>
        </Switch>
        <ArtControl />
      </Router>
      </React.Fragment>
    </MDBContainer>
  );
}

export default App;
