import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function StockInfo() {
  const [stockPrice, setStockPrice] = useState('');
  /*const onSubmit = () => {
    const url = "stock_data/new";
    fetch(url)
    .then(res => { if (res.ok) {
      return res.json();
    } throw new Error('Request Failed')},
    networkError => console.log(networkError.message))
  };*/

  /*useEffect(() => {
    fetch('stock_infos/new', {
      method: 'get',
      headers: {'Content-Type': 'application/json'},
      /*body: JSON.stringify()*/
      /*.then(console.log())*/
      /*.then(console.log('OK'))*/
      /*.catch(error => console.log(error.message));*/
  /*  })
    .then(response => response.json())
    .then(data => setStockPrice(data))
  }, []);*/

  const handleClick = () => {
    fetch('stocks_data/scrape', {
      method: 'get',
      headers: {'Content-Type': 'application/json'},
      /*body: JSON.stringify()*/
      /*.then(console.log())*/
      /*.then(console.log('OK'))*/
      /*.catch(error => console.log(error.message));*/
    })
    .then(response => response.json())
    .then(data => setStockPrice(data))
  };
  
  return (
    <div>
      <h1>Stock Data</h1>
      {/*<button onClick = {() => { onSubmit() }}>Scrape data</button><br />*/}
      <div>
        <button onClick={handleClick}>Scrape!</button>
        <div>{stockPrice}</div>
      </div>
      <br />
      <Link to="/">Home</Link>
    </div>
  );
}
export default StockInfo;


