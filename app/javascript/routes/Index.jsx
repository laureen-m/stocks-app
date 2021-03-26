import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "tachyons";
import Home from "../components/Home";
import Stocks from "../components/Stocks";
import Stock from "../components/Stock";
import StockData from "../components/StockData";

export default (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/stocks" exact component={Stocks} />
      <Route path="/stocks/:id" exact component={Stock} />
      <Route path="/stockdata" exact component={StockData} />
    </Switch>
  </Router>
);
