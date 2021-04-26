import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
/*import PageWrapper from './common/PageWrapper';*/
import Header from './common/Header';

function Stock() {
  const [values, setValues] = useState([]);
  const [stock, setStock] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`/show/${id}`)
      .then((response) => response.json())
      .then((data) => setStock(data.values))
      .catch(console.log);
    fetch(`/show/${id}`)
      .then((response) => response.json())
      .then((data) => setValues(data.name))
      .catch(console.log)
  }, []);

  const handleClick = () => {
    console.log(stock);
    console.log(values)
  }

  return (
    <div>
      <Header />
      <h1>{values}</h1>
      <button onClick={handleClick} type="submit">Click</button>
      <div>
        <select>
          <option>Stock price</option>
          { stock.map(stock => (
            <option key={stock.id} value={stock.id}>{stock.date}</option>
            )) }
        </select>
          </div>
    </div>
  );
}

export default Stock;
