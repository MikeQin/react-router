import React, { useState, useEffect } from 'react';

function Item({ match }) {

  console.log(`match.params.id: ${match.params.id}`);

  const [item, setItem] = useState({
    images: {}, // images is a nested object, must be declared before use
    ratings: {}
  });

  useEffect(() => {
    fetchItem();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchItem = () => {
    //     https://fortnite-public-api.theapinetwork.com/prod09/item/get?ids=23eb32c-acc9625-3c3cab5-0ff6052
    fetch(`https://fortnite-public-api.theapinetwork.com/prod09/item/get?ids=${match.params.id}`,
      { method: "GET" })
      .then(data => {
        return data.json();
      })
      .then(json => {
        console.log(json);
        console.log(json.images.transparent);
        setItem(json);
      })
      .catch(error => {
        console.log(error);
      })
  };

  return (
    <div>
      <h1>{item.name}</h1>
      <ul>
        <li>Description: {item.description}</li>
        <li>Rarity: {item.rarity}</li>
        <li>Type: {item.type}</li>
        <li>Cost: ${item.cost}</li>
        <li>Ratings: {item.ratings.avgStars}, Votes: {item.ratings.numberVotes} </li>
        <br />
        <img src={item.images.transparent} alt={item.name} />
      </ul>
    </div>
  );
}

export default Item;
