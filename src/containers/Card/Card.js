import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { focusSingleCharacter } from '../../actions';

export const Card = ({ character, onChoosingCriminal }) => {
  // console.log(onChoosingCriminal);
  const handleClick = () => {
    onChoosingCriminal(character.id);
    console.log('worked', character.id)
  };

  return (
    <Link
      to={`/criminals/${character.name}`}
      className='link_to_single'
    >
      <article className='allCharacter_card' onClick={handleClick}>
        <h2>{character.name}</h2>
        <img
          className='grid_image'
          src={character.image}
          alt={`mugshot of ${character.name}`}
        />
      </article>
    </Link>
  );
};

export const mapDispatchToProps = dispatch => ({
  onChoosingCriminal: id => dispatch(focusSingleCharacter(id))
});

export default connect(null, mapDispatchToProps)(Card);
