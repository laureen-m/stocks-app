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
      <Route path="/stocks/:id" exact component={Stock} />
      {/* # The page we should be visiting is http://localhost:3000/stocks/1
      This wasn't broken, but I believe it's a better practice to nest like ^*/}
      <Route path="/stockdata" exact component={StockData} />
    </Switch>
  </Router>
);
