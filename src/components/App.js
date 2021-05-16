import React from 'react';
import Header from './Header';
import ArtControl from "./ArtControl";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <ArtControl />
    </Router>
  );
}

export default App;
