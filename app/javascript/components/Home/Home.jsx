import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <div>
    <h1>Stocks App</h1>
      <p>
        A curated list of stocks to get the best returns.
      </p>
      <br />
      <Link
        to="/stocks"
        role="button"
      >
        View available stocks
      </Link>  
    </div>
);