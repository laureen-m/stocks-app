import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { RiCloseFill } from 'react-icons/ri';
import { BiErrorCircle } from 'react-icons/bi'; 
import PageWrapper from './common/PageWrapper';

const StocksValuesStyle = styled.div`
form {
  display: flex;
  flex-direction: column;
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
  margin: 15px;    
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
  cursor: pointer;
}
textarea {
  width: 400px;
  height: 100px;
  padding: 5px;
}
button, textarea:focus {
    outline: 0;
}
label {
  width: 150px;
}
.section {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.validation {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.success {
  display: flex;
  flex-direction: row;
  align-items: center;
  background: rgb(237, 247, 237);
  color: rgb(30, 70, 32);
  padding: 0px 0px 10px 10px;
  border-radius: 5px;
}
.error {
  display: flex;
  flex-direction: row;
  align-items: center;
  background: rgb(97, 26, 21);
  color: rgb(253, 236, 234);
  padding: 0px 0px 10px 10px;
  border-radius: 5px;
}
.close {
  padding-top: 10px;
}
`

function StocksApiValues() {
  const [stocks, setStocks] = useState([]);
  const [stock_id, setStockId] = useState('');

  useEffect(() => {
    fetch('/api/v1/stocks/index')
      .then(response => response.json())
      .then(data => setStocks(data))
      .catch(console.log)
  }, []);

  const handleClickSave = (event) => {
    event.preventDefault();
    const object = {stock_id: stock_id}
    fetch("/api/v1/api_values/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(object)
    })
    .then((response) => response.json())
    .catch(console.log)         
  }

  return (
    <PageWrapper>    
      <StocksValuesStyle>
        <h1>Stock Data</h1>
        <div>
          <form>
            <div className="section">
              <label>Stock name</label>
              <select name="stocks" onChange = {(e) => {setStockId(e.target.value)}}>
                <option value="">--Select your stock--</option>
                {stocks.map(stocks => (
                  <option key={stocks.id} value={stocks.id} required>{stocks.name}</option>
                ))}
              </select>
            </div>
            <div className="validation">
              <button type="submit" onClick={handleClickSave}>Save!</button>
            </div>
          </form>  
        </div>
      </StocksValuesStyle>
    </PageWrapper>
  );
}
export default StocksApiValues;