import React from 'react';
import Header from './Header';
import ArtControl from "./ArtControl";
import Admin from './Admin';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
      <ArtControl />
    </Router>
    </React.Fragment>
  );
}

export default App;
