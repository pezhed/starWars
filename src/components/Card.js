import React from 'react'

const Card = ({name}) => {
  return (
    <div>
      <img alt='heroes' src={`./images/${name}.jpeg`} />
      <div>
      <h2>{name}</h2>
      </div>
    </div>
  )
}

export default Card;
