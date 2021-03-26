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
      <div>
        <Link className="mr2" to="/">Home</Link>
        <Link className="ml2" to="/stocks">List of stocks</Link>
      </div>  
      <h1>{stock.name}</h1>
      <div>This is where I want to have filters and graphs for the stock data.</div>
      <br />
      
    </div>
  );
}

export default Stock;
