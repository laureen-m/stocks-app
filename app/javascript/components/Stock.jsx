import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
/*import PageWrapper from './common/PageWrapper';*/
import Header from './common/Header';

function Stock() {
  const [stock, setStock] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`/show/${id}`)
      .then((response) => response.json())
      .then((data) => setStock(data))
      .catch(console.log)
  }, []);

  return (
    <div>
      <Header />
      <h1>{stock.name}</h1>
      <div>This is where I want to have filters and graphs for the stock data.</div>
    </div>
  );
}

export default Stock;
