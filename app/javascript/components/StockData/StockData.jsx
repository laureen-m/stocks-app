import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function StockInfo() {
  const [stockPrice, setStockPrice] = useState("");
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
    fetch("stocks_data/scrape")
      // A GET is the default method for fetch requests. See here: https://github.github.io/fetch/.
      // The result of the scrape endpoint (the response.json()) is:
      // {
      //   "spider_name": "stock_data",
      //   "status": "completed",
      //   "error": null,
      //   "environment": "development",
      //   "start_time": "2021-03-20T17:47:09.976-04:00",
      //   "stop_time": "2021-03-20T17:47:10.274-04:00",
      //   "running_time": 0.298,
      //   "visits": {
      //       "requests": 1,
      //       "responses": 1
      //   },
      //   "items": {
      //       "sent": 0,
      //       "processed": 0
      //   },
      //   "events": {
      //       "requests_errors": {},
      //       "drop_items_errors": {},
      //       "custom": {}
      //   }
      // }
      // And the result of the scrape is not stock-specific, is it? I'm not sure what you want to display in the return for this page, other than the "Scrape" button.
      // I see the "stockPrice" in a div below to be rendered, but I don't see how this fetch call returns a response for setting that value.
      // You could flash a message or something that says something along the lines of "Scrape successful/failed" and/or redirect to the homepage or something. At least as a first pass?
      .then((response) => response.json())
      .then((data) => console.log(data));
    // With these changes, you can see your result in the console!
  };

  return (
    <div>
      <h1>Stock Data</h1>
      {/*<button onClick = {() => { onSubmit() }}>Scrape data</button><br />*/}
      <div>
        <button onClick={handleClick}>Scrape!</button>
        {stockPrice && <div>{stockPrice}</div>}
        {/* Doing this ^ (with the brackets and &&) means that the div for the stockPrice only appears when there's a value for it. 
        Otherwise, without this, you just have an empty div on your page. Which isn't terrible, but isn't desirable. */}
      </div>
      <br />
      <Link to="/">Home</Link>
    </div>
  );
}
export default StockInfo;
