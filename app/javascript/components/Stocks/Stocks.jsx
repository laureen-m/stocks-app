import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Stocks() {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    fetch('stocks/index')
      .then(response => response.json())
      .then(data => setStocks(data))
      .then(console.log(stocks))
      /*.catch(() => history.push('/'))*/;
  }, []);

  /*const allStocks = stocks.map((stock, index) => (
    <div key={index}>
      <h5>{stock.name}</h5>
    </div>
  ));*/

  return (
    <div>
      <h1>List of stocks</h1>
      {
        stocks.map(stocks => (
          <div key={stocks.id}>
            <h5>{stocks.name}</h5>
          </div>
        ))
      }
     {/* <div>{allStocks}</div>*/}
      <Link to="/">Home</Link>
    </div>
  );
}
export default Stocks;



/*useEffect(() => {
    fetch('http://localhost:3000/')
      .then(response => response.json())
      .then(console.log)
  })*/