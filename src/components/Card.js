import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';

export const Card = ({ character }) => {
  // console.log(character);
  return (
    <Link to={`/criminal/${character.name}`} className='link_to_single'>
      <article className='allCharacter_card'>
        <h2>{character.name}</h2>
        <img className='gird_image' src={character.image} alt={`mugshot of ${character.name}`} />
      </article>
    </Link>
  );
};
