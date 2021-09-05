import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "tachyons";
import Home from "../components/Home";
import Stocks from "../components/Stocks";
import Stock from "../components/Stock";
import StocksValues from "../components/StocksValues";
import ApiStocksValues from "../components/ApiStocksValues";

export default (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/stocks" exact component={Stocks} />
      <Route path="/stocks/:id" exact component={Stock} />
      <Route path="/stocksvalues" exact component={StocksValues} />
      <Route path="/ApiStocksValues" exact component={ApiStocksValues} />
    </Switch>
  </Router>
);
