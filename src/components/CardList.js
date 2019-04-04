import React from 'react';
import Card from './Card';
import "./cardlist.css";

const CardList = ({ data }) => {

  data = Array.from(data);
  console.log(data.type);
  return (

    <div class="cardList-container">
    {

      data.map((user, i) => {
        return (
          <Card
            key={i}
            name = {data[i].name}
          />
        );
      })
    }
    </div>
  );
}

export default CardList;
