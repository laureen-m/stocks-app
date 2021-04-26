import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from "styled-components";
import PageWrapper from './common/PageWrapper';

const StocksPageStyle = styled.div`
select {
  height: 40px;
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
button {
  background-color: white;
  height: 40px;
  border-radius: 5px;
  border-style: none;
  padding: 5px 15px 5px 15px;
  margin: 15px;
}
`

function Stocks() {
  const [stocks, setStocks] = useState([]);
  const [stockId, setStockId] = useState('');
  let history = useHistory();

  useEffect(() => {
    fetch('stocks/index')
      .then(response => response.json())
      .then(data => setStocks(data))
      .catch(console.log)
  }, []);

  const handleChange = (event) => {
    setStockId(event.target.value);
  };

  const handleClick = () => {
    history.push(`/stocks/${stockId}`);
  };

  return (
    <PageWrapper>
      <StocksPageStyle>
        <h1>List of stocks</h1>
        <div className="flex flex-row justify-center items-center">
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
      </StocksPageStyle>
    </PageWrapper>
  );
}
export default Stocks;


