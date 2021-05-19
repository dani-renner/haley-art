import React from 'react';
import Header from './Header';
import ArtControl from "./ArtControl";
import Admin from './Admin';
import Signin from './Signin';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './../App.css';

function App() {
  return (
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
  );
}

export default App;
