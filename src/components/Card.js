import React from 'react';

export const Card = ({ character }) => {
  // console.log(character);
  return (
    <article>
      <h2>{character.name}</h2>
      <img src={character.image} alt={`mugshot of ${character.name}`} />
    </article>
  );
};
