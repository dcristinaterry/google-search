import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar.js"
import Search from "./pages/Search.js"
import Save from "./pages/Save.js"
import NoMatch from "./pages/NoMatch.js"


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
