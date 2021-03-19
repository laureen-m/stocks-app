import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home/Home";
import Stocks from "../components/Stocks/Stocks";
import Stock from "../components/Stock/Stock";
import StockData from "../components/StockData/StockData";

export default (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/stocks" exact component={Stocks} />
      <Route path="/stock/:id" exact component={Stock} />
      <Route path="/stockdata" exact component={StockData} />
    </Switch>
  </Router>
);
 
