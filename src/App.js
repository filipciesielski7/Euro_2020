import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Team from "./pages/Team";
import Error from "./pages/Error";

function App() {
  return (
    <Router basename='/'>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/team/:code">
          <Team />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
