import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function Stock() {
  const [stock, setStock] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`/show/${id}`)
      .then((response) => response.json())
      .then((data) => setStock(data));
    /*.catch(() => history.push('/'))*/
  }, []);

  return (
    <div>
      <h1>{stock.name}</h1>
      <div>This is where I want to have filters and graphs for the stock data.</div>
      <Link to="/">Home</Link>
    </div>
  );
}

export default Stock;
