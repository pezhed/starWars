import React from 'react';
import Card from './Card';


const CardList = ({ heroes }) => {
  return (
    <div>
    {
      heroes.map((user, i) => {
        return (
          <Card
            key={i}
            name = {heroes[i].name}
          />
        );
      })
    }
    </div>
  );
}

export default CardList;
