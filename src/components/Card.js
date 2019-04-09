import React from 'react'
import './card.css';

const Card = ({name}) => {
  return (
    <div class='card-container'>
      <img alt='heroes' src={require(`../images/${name}.jpeg`)} height="239" width="240"/>
      <div>
      <h2>{name}</h2>

      </div>
    </div>
  )
}

export default Card;
