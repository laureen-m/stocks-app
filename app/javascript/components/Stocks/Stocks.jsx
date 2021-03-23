import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

function Stocks() {
  const [stocks, setStocks] = useState([]);
  const [stockId, setStockId] = useState('');
  let history = useHistory();

  useEffect(() => {
    fetch('stocks/index')
      .then(response => response.json())
      .then(data => setStocks(data))
      /*.catch(() => history.push('/'))*/;
  }, []);

  const handleChange = (event) => {
    console.log(event.target.value);
    setStockId(event.target.value);
  };

  const handleClick = () => {
    console.log(stockId);
    history.push(`/stocks/${stockId}`);
  };

  return (
    <div>
      <h1>List of stocks</h1>
      <div>
        <select onChange={handleChange}>
          <option>Select your stock</option>
          { stocks.map(stocks => (
              /*<select key={stocks.id}>*/
                <option key={stocks.id} value={stocks.id}>{stocks.name}</option>
              /*</select>*/  
          )) }
        </select>
        <button onClick={handleClick}>Analyze</button>
      </div>
      <br />
      <Link to="/">Home</Link>
    </div>
  );
}
export default Stocks;