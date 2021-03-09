import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home/Home";
import Stocks from "../components/Stocks/Stocks";

export default (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/stocks" exact component={Stocks} />
    </Switch>
  </Router>
);
 
