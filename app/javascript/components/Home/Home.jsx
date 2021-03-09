import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <div>
    <h1>Stocks App</h1>
      <p>
        A curated list of stock for the best returns.
      </p>
      <Link
        to="/stocks"
        role="button"
      >
        View Stocks
      </Link>  
    </div>
);