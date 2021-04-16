import React, { useState, useEffect } from "react";
import styled from "styled-components";
/*import PageWrapper from './common/PageWrapper';*/
import Header from './common/Header';

const StocksValuesStyle = styled.div`
form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
select {
  height: 40px;
  width: 400px;
  border-radius: 5px;
  background-image:
    linear-gradient(45deg, transparent 50%, black 50%),
    linear-gradient(135deg, black 50%, transparent 50%),
    linear-gradient(to right, #ccc, #ccc);
  background-position:
    calc(100% - 20px) calc(1em + 2px),
    calc(100% - 15px) calc(1em + 2px),
    calc(100% - 2.5em) 0.5em;
  background-size:
    5px 5px,
    5px 5px,
    1px 1.5em;
  background-repeat: no-repeat;
  background-color: white;
  padding: 5px 60px 5px 15px;
  margin: 0;    
  /*-webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;*/
  box-sizing: border-box;
  -webkit-appearance: none;
  -moz-appearance: none;  
  border-style: none;
}
select:focus {
  background-image:
    linear-gradient(45deg, black 50%, transparent 50%),
    linear-gradient(135deg, transparent 50%, black 50%),
    linear-gradient(to right, #ccc, #ccc);
  background-position:
    calc(100% - 15px) 1em,
    calc(100% - 20px) 1em,
    calc(100% - 2.5em) 0.5em;
  background-size:
    5px 5px,
    5px 5px,
    1px 1.5em;
  background-repeat: no-repeat;
  outline: 0;
}
select:-moz-focusring {
  color: transparent;
  text-shadow: 0 0 0 black;
}
button, textarea {
  background-color: white;
  height: 40px;
  border-radius: 5px;
  border-style: none;
  margin: 15px;
}
button {
  padding: 5px 20px 5px 20px;
}
textarea {
  width: 400px;
  height: 100px;
  padding: 5px;
}
button, textarea:focus {
    outline: 0;
}
`

function StocksValues() {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    fetch('stocks/index')
      .then(response => response.json())
      .then(data => setStocks(data))
      .catch(console.log)
  }, []);

  /*const handleClick = () => {
    fetch("stocks_values/scrape", {
      method: 'post'
    })
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
  };*/

  const getSclData = () => {
    const jsonValue = '[{"dateTime":"2021-03-26T13:30:00Z","value":61.01},{"dateTime":"2021-03-26T13:33:00Z","value":60.67},{"dateTime":"2021-03-26T13:34:00Z","value":60.5},{"dateTime":"2021-03-26T13:35:00Z","value":60.84},{"dateTime":"2021-03-26T13:36:00Z","value":60.76},{"dateTime":"2021-03-26T13:37:00Z","value":60.92},{"dateTime":"2021-03-26T13:38:00Z","value":60.93},{"dateTime":"2021-03-26T13:39:00Z","value":61.1},{"dateTime":"2021-03-26T13:40:00Z","value":61.27}]'
    const jsonVolume = '[{"dateTime":"2021-03-26T13:30:00Z","value":61.01},{"dateTime":"2021-03-26T13:33:00Z","value":60.67},{"dateTime":"2021-03-26T13:34:00Z","value":60.5},{"dateTime":"2021-03-26T13:35:00Z","value":60.84},{"dateTime":"2021-03-26T13:36:00Z","value":60.76},{"dateTime":"2021-03-26T13:37:00Z","value":60.92},{"dateTime":"2021-03-26T13:38:00Z","value":60.93},{"dateTime":"2021-03-26T13:39:00Z","value":61.1},{"dateTime":"2021-03-26T13:40:00Z","value":61.27}]'
    const parsedValue = JSON.parse(jsonValue);
    const parsedVolume = JSON.parse(jsonVolume);
    const sclData = [];
   
    for (var i = 0; i < parsedValue.length; i++) {
      for (var j = 0; j < parsedVolume.length; j++) {
        if (parsedValue[i].dateTime === parsedVolume[j].dateTime) {
          sclData.push({stock_id: 3, date: parsedValue[i].dateTime.slice(0, 10), time: parsedValue[i].dateTime.slice(11, 19), price: parsedValue[i].value, volume: parsedVolume[j].value})         
        } 
      } 
    }
    console.log("SCL", sclData)
  };

  const getFgltData = () => {
    const jsonValue = '[{"dateTime":"2021-03-26T13:30:00Z","value":61.01},{"dateTime":"2021-03-26T13:33:00Z","value":60.67},{"dateTime":"2021-03-26T13:34:00Z","value":60.5},{"dateTime":"2021-03-26T13:35:00Z","value":60.84},{"dateTime":"2021-03-26T13:36:00Z","value":60.76},{"dateTime":"2021-03-26T13:37:00Z","value":60.92},{"dateTime":"2021-03-26T13:38:00Z","value":60.93},{"dateTime":"2021-03-26T13:39:00Z","value":61.1},{"dateTime":"2021-03-26T13:40:00Z","value":61.27}]'
    const jsonVolume = '[{"dateTime":"2021-03-26T13:30:00Z","value":61.01},{"dateTime":"2021-03-26T13:33:00Z","value":60.67},{"dateTime":"2021-03-26T13:34:00Z","value":60.5},{"dateTime":"2021-03-26T13:35:00Z","value":60.84},{"dateTime":"2021-03-26T13:36:00Z","value":60.76},{"dateTime":"2021-03-26T13:37:00Z","value":60.92},{"dateTime":"2021-03-26T13:38:00Z","value":60.93},{"dateTime":"2021-03-26T13:39:00Z","value":61.1},{"dateTime":"2021-03-26T13:40:00Z","value":61.27}]'
    const parsedValue = JSON.parse(jsonValue);
    const parsedVolume = JSON.parse(jsonVolume);
    const fgltData = [];
   
    for (var i = 0; i < parsedValue.length; i++) {
      for (var j = 0; j < parsedVolume.length; j++) {
        if (parsedValue[i].dateTime === parsedVolume[j].dateTime) {
          fgltData.push({stock_id: 2, date: parsedValue[i].dateTime.slice(0, 10), time: parsedValue[i].dateTime.slice(11, 19), price: parsedValue[i].value, volume: parsedVolume[j].value})         
        } 
      } 
    }
    console.log("FGLT", fgltData)
  };

  const getAcbData = () => {
    const jsonValue = '[{"dateTime":"2021-03-26T13:30:00Z","value":61.01},{"dateTime":"2021-03-26T13:33:00Z","value":60.67},{"dateTime":"2021-03-26T13:34:00Z","value":60.5},{"dateTime":"2021-03-26T13:35:00Z","value":60.84},{"dateTime":"2021-03-26T13:36:00Z","value":60.76},{"dateTime":"2021-03-26T13:37:00Z","value":60.92},{"dateTime":"2021-03-26T13:38:00Z","value":60.93},{"dateTime":"2021-03-26T13:39:00Z","value":61.1},{"dateTime":"2021-03-26T13:40:00Z","value":61.27}]'
    const jsonVolume = '[{"dateTime":"2021-03-26T13:30:00Z","value":61.01},{"dateTime":"2021-03-26T13:33:00Z","value":60.67},{"dateTime":"2021-03-26T13:34:00Z","value":60.5},{"dateTime":"2021-03-26T13:35:00Z","value":60.84},{"dateTime":"2021-03-26T13:36:00Z","value":60.76},{"dateTime":"2021-03-26T13:37:00Z","value":60.92},{"dateTime":"2021-03-26T13:38:00Z","value":60.93},{"dateTime":"2021-03-26T13:39:00Z","value":61.1},{"dateTime":"2021-03-26T13:40:00Z","value":61.27}]'
    const parsedValue = JSON.parse(jsonValue);
    const parsedVolume = JSON.parse(jsonVolume);
    const acbData = [];
   
    for (var i = 0; i < parsedValue.length; i++) {
      for (var j = 0; j < parsedVolume.length; j++) {
        if (parsedValue[i].dateTime === parsedVolume[j].dateTime) {
          acbData.push({stock_id: 4, date: parsedValue[i].dateTime.slice(0, 10), time: parsedValue[i].dateTime.slice(11, 19), price: parsedValue[i].value, volume: parsedVolume[j].value})         
        } 
      } 
    }
    console.log("ACB", acbData)
  };

  const getLspdData = () => {
    const jsonValue = '[{"dateTime":"2021-03-26T13:30:00Z","value":61.01},{"dateTime":"2021-03-26T13:33:00Z","value":60.67},{"dateTime":"2021-03-26T13:34:00Z","value":60.5},{"dateTime":"2021-03-26T13:35:00Z","value":60.84},{"dateTime":"2021-03-26T13:36:00Z","value":60.76},{"dateTime":"2021-03-26T13:37:00Z","value":60.92},{"dateTime":"2021-03-26T13:38:00Z","value":60.93},{"dateTime":"2021-03-26T13:39:00Z","value":61.1},{"dateTime":"2021-03-26T13:40:00Z","value":61.27}]'
    const jsonVolume = '[{"dateTime":"2021-03-26T13:30:00Z","value":2056},{"dateTime":"2021-03-26T13:33:00Z","value":400},{"dateTime":"2021-03-26T13:34:00Z","value":264},{"dateTime":"2021-03-26T13:35:00Z","value":3800},{"dateTime":"2021-03-26T13:36:00Z","value":3248},{"dateTime":"2021-03-26T13:37:00Z","value":2800},{"dateTime":"2021-03-26T13:38:00Z","value":1900},{"dateTime":"2021-03-26T13:39:00Z","value":500},{"dateTime":"2021-03-26T13:40:00Z","value":200}]'
    const parsedValue = JSON.parse(jsonValue);
    const parsedVolume = JSON.parse(jsonVolume);
    const lspdData = [];
   
    for (var i = 0; i < parsedValue.length; i++) {
      for (var j = 0; j < parsedVolume.length; j++) {
        if (parsedValue[i].dateTime === parsedVolume[j].dateTime) {
          lspdData.push({stock_id: 1, date: parsedValue[i].dateTime.slice(0, 10), time: parsedValue[i].dateTime.slice(11, 19), price: parsedValue[i].value, volume: parsedVolume[j].value})         
        } 
      } 
    }
    console.log("LSPD", lspdData)
  };

  return (
    <StocksValuesStyle>
      <Header />
      <h1>Stock Data</h1>
      <div>
        {/*<button onClick={() => {getSclData(), getAcbData(), getFgltData(), getLspdData()}}>Get more recent data!</button>
        stockPrice && <div>{stockPrice}</div>}
        Doing this ^ (with the brackets and &&) means that the div for the stockPrice only appears when there's a value for it. 
        Otherwise, without this, you just have an empty div on your page. Which isn't terrible, but isn't desirable. */}
        <form>
          <select>
            <option>Select your stock</option>
            { stocks.map(stocks => (
                /*<select key={stocks.id}>*/
                  <option key={stocks.id} value={stocks.id}>{stocks.name}</option>
                /*</select>*/  
            )) }
          </select>
          <label>Price</label>
          <textarea
            name="price"
            required
            rows= "15"
            cols= "50"
          />
          <label>Volume</label>
          <textarea
            name="volume"
            required
            rows= "15"
            cols= "50"
          />
          <button>Add data!</button>
        </form>
      </div>
    </StocksValuesStyle>
  );
}
export default StocksValues;