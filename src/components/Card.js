import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { focusSingleCharacter } from '../actions';

export const Card = ({ character }) => {
  // console.log(character.id);
  handleClick = () => {
    props.onChoosingCriminal(id);
  };

  return (
    <Link
      to={`/criminal/${character.name}`}
      className='link_to_single'
      onCLick={() => handleClick()}
    >
      <article className='allCharacter_card'>
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
