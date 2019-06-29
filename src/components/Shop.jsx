import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Shop() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = () => {
    fetch("https://fortnite-public-api.theapinetwork.com/prod09/upcoming/get")
      .then(data => {
        return data.json();
      })
      .then(json => {
        //console.log(json.items);
        setItems(json.items);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div id="shop-list">
      <h1>Shop</h1>
      <ol>
        {items.map((item, i) => (
          <li key={i}>
            <Link to={`/shop/${item.itemid}`}>{item.name}</Link>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Shop;
