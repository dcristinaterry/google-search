import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
    <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/save" component={Save} />
          <Route exact path="/books/:id" component={Save} />
          <Route component={NoMatch} />
        </Switch>
    </div>
  </Router>
  );
}

export default App;
