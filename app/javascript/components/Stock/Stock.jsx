import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

// Your components dont need to be nested inside folders. For example, this file is components/Stock/Stock.jsx. This could be components/Stock.jsx.

function Stock() {
  const [stock, setStock] = useState([]);

  // You have the id from react-router. So you just need to grab the id from the react-router params. You can use the useParams hook to do that.
  // More here: https://reactrouter.com/web/example/url-params

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    // Using your original code, if you put a console.log here, you can see that id is undefined.
    console.log(id);
    fetch(`/show/${id}`)
      // The path should be ^ rather than stocks/show/${id}. I knew this because of the `get '/show/:id', to: 'stocks#show'` in your routes.rb file.
      .then((response) => response.json())
      .then((data) => setStock(data));
    /*.catch(() => history.push('/'))*/
  }, []);

  return (
    <div>
      <h1>SCL</h1>
      <div>{stock.name}</div>
      <Link to="/">Home</Link>
    </div>
  );
}

export default Stock;
