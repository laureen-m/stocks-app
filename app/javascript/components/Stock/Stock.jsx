import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

function Stock() {
  const [stock, setStock] = useState([]);

  useEffect((id) => {
    fetch(`stocks/show/${id}`)
      .then(response => response.json())
      .then(data => setStock(data))
      /*.catch(() => history.push('/'))*/;
  }, []);

  return (
    <div>
      <h1>SCL</h1>
      <div>{ stock.name }</div>
      <Link to="/">Home</Link>
    </div>
  );
}
export default Stock;