import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Stocks() {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    fetch('stocks/index')
      .then(response => response.json())
      .then(data => setStocks(data))
      /*.catch(() => history.push('/'))*/;
  }, []);

  return (
    <div>
      <h1>List of stocks</h1>
      { stocks.map(stocks => (
          <div key={stocks.id}>
            <h5>{stocks.name}</h5>
          </div>
      )) }
      <Link to="/">Home</Link>
    </div>
  );
}
export default Stocks;