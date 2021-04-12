import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';
import StockPage from './common/StockPage';

function Stocks() {
  const [stocks, setStocks] = useState([]);
  const [stockId, setStockId] = useState('');
  const [selectedStock, setSelectedStock] = useState(`Select your stock ▾`)
  let history = useHistory();

  useEffect(() => {
    fetch('stocks/index')
      .then(response => response.json())
      .then(data => setStocks(data))
  }, []);

  const handleSelect = (event) => {
    setStockId(event);
    const sorted = stocks.sort((a, b) => a.id - b.id);
    setSelectedStock(sorted[--event].name);
  };

  const handleClick = () => {
    history.push(`/stocks/${stockId}`);
  };

  return (
    <StockPage>
      <h1>List of stocks</h1>
      <div className="flex flex-row justify-center">
        <DropdownButton id="dropdown-basic-button" title={selectedStock} className="ma3" onSelect={handleSelect}>
          { stocks.map(stocks => (
            <Dropdown.Item key={stocks.id} eventKey={stocks.id} className="flex flex-column pa1">{stocks.name}</Dropdown.Item>
          ))}
        </DropdownButton>
        <Button className="ma3" onClick={handleClick}>Analyze</Button>
      </div>
    </StockPage>
  );
}
export default Stocks;


